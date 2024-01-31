import connectionDB from "@/libs/mongodb";
import registerEmail from "@/models/registerEmail";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params: any }) {
  const { username, email } = await request.json();
  await connectionDB();
  const user = await registerEmail.findByIdAndUpdate(params.id, {
    username,
    email,
  });
  return NextResponse.json({ data: user }, { status: 200 });
}
