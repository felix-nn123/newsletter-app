import connectionDB from "@/libs/mongodb";
import registerEmail from "@/models/registerEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, email } = await request.json();
  await connectionDB();
  await registerEmail.create({ username, email });
  return NextResponse.json({ message: "success" }, { status: 201 });
}

export async function GET() {
  await connectionDB();
  const emails = await registerEmail.find({});
  return NextResponse.json(emails, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectionDB();
  await registerEmail.findByIdAndDelete(id);
  return NextResponse.json({ message: "success" }, { status: 200 });
}
