import connectionDB from "@/libs/mongodb";
import registerEmail from "@/models/registerEmail";
import { NextRequest, NextResponse } from "next/server";

interface PropsParams {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function PUT(
  request: NextRequest,
  { params, searchParams }: PropsParams
) {
  const { username, email } = await request.json();
  await connectionDB();
  const user = await registerEmail.findByIdAndUpdate(params.id, {
    username,
    email,
  });
  return NextResponse.json({ data: user }, { status: 200 });
}

export async function GET(
  request: Request,
  { params, searchParams }: PropsParams
) {
  await connectionDB();
  const user = await registerEmail.findById(params.id);
  return NextResponse.json({ data: user }, { status: 200 });
}
