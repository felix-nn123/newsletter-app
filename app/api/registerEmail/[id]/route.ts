import connectionDB from "@/libs/mongodb";
import registerEmail from "@/models/registerEmail";
import { useRouter } from "next/router";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const router = useRouter();
  const { id } = router.query;
  const { username, email } = await request.json();
  await connectionDB();
  const user = await registerEmail.findByIdAndUpdate(id, {
    username,
    email,
  });
  return NextResponse.json({ data: user }, { status: 200 });
}

export async function GET(request: Request) {
  const router = useRouter();
  const { id } = router.query;
  await connectionDB();
  const user = await registerEmail.findById(id);
  return NextResponse.json({ data: user }, { status: 200 });
}
