"use client";

import { useState } from "react";

const AdminProductPage = () => {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=kiki123",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Failed to revalidate");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidated");
      }
    }
  };
  return (
    <div>
      <h1>{status}</h1>
      <button
        onClick={() => revalidate()}
        className="bg-black text-white p-3 m-5"
      >
        Revalidate
      </button>
    </div>
  );
};

export default AdminProductPage;
