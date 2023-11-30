import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retriveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(
  data: { fullname: string; email: string; password: string; role?: string },
  callback: Function
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    return callback({ status: false, message: "Email already exists" });
  } else {
    data.role = "admin";
    data.password = await bcrypt.hash(data.password, 10);

    await addDoc(collection(firestore, "users"), data)
      .then(() => {
        callback({ status: true, message: "User created successfully" });
      })
      .catch((error) => {
        callback({ status: false, message: error.message });
      });
  }
}
