import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // console.log("request", request);
  const req = await request.json();
  return NextResponse.json({
    status: 200,
    message: "success",
    data: req,
  });
}
