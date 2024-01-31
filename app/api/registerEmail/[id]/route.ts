import connectionDB from "@/libs/mongodb";
import registerEmail from "@/models/registerEmail";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params: any }) {
  const { username, email } = await request.json();
  await connectionDB();
  const user = await registerEmail.findByIdAndUpdate(params.id, {
    username,
    email,
  });
  return NextResponse.json({ data: user }, { status: 200 });
}

export async function GET(request: Request, { params: any }) {
  await connectionDB();
  const user = await registerEmail.findById(params.id);
  return NextResponse.json({ data: user }, { status: 200 });
}
