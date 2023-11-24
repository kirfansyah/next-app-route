import { retriveData, retriveDataById } from "@/lib/firebase/services";
import { NextResponse, NextRequest } from "next/server";

// const data = [
//   {
//     id: 1,
//     title: "Nike Air Force 1",
//     price: 100000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-shoe-HWWX9W.png",
//   },
//   {
//     id: 2,
//     title: "Nike Air Pegasus",
//     price: 200000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86abdf06-d919-4aab-8c1b-e59c033d08b8/air-pegasus-89-shoes-WMcn5F.png",
//   },
//   {
//     id: 3,
//     title: "Nike Air Max",
//     price: 300000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aad7fc25-7871-4263-93f7-644237bdd457/air-max-systm-shoes-hLmQ85.png",
//   },
//   {
//     id: 4,
//     title: "Nike Air Max 4",
//     price: 300000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aad7fc25-7871-4263-93f7-644237bdd457/air-max-systm-shoes-hLmQ85.png",
//   },
//   {
//     id: 5,
//     title: "Nike Air Max 5",
//     price: 300000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aad7fc25-7871-4263-93f7-644237bdd457/air-max-systm-shoes-hLmQ85.png",
//   },
// ];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    // const detailProduct = data.find((product) => product.id === Number(id));
    const detailProduct = await retriveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = await retriveData("products");

  return NextResponse.json({ status: 200, message: "success", data: products });
}
