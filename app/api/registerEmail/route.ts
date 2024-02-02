import connectionDB from "@/libs/mongodb";
import registerEmail from "@/models/registerEmail";
import fetch from "node-fetch";
import { NextRequest, NextResponse } from "next/server";

/////////////////////////////////////////////////////
/////////////////mailchimp function//////////////////////////
const mailchimpFunc = async (email: string, username: string) => {
  interface mailData {
    members: [
      {
        email_address: string;
        status: string;
        merge_fields: {
          FNAME: string;
          LNAME: string;
        };
      }
    ];
  }

  const data: mailData = {
    members: [
      {
        email_address: username,
        status: "subscribed",
        merge_fields: {
          FNAME: email.split(" ")[0],
          LNAME: email
            .split(" ")
            .slice(email.split(" ").length - 1)
            .join(" "),
        },
      },
    ],
  };

  const postData: string = JSON.stringify(data);

  fetch("https://us21.api.mailchimp.com/3.0/lists/270eb537da", {
    method: "POST",
    headers: {
      Authorization: "auth 48cb646c23ae5578df53dc837683750f-us21",
    },
    body: postData,
  }).catch((err: any) => {
    // console.log("fail to subscribe to mailchip", err);
    NextResponse.json(
      { message: "fail to subscribe to our news letter" },
      { status: 400 }
    );
  });
};

export async function POST(request: NextRequest) {
  const { username, email } = await request.json();
  await connectionDB();

  const alreadyRegister = await registerEmail.findOne({ email: username });
  if (alreadyRegister) {
    return NextResponse.json(
      { message: "email already registered" },
      { status: 400 }
    );
  }

  await registerEmail.create({ username: email, email: username });

  ////////////////////////////////////////////
  ///////register email to mailchimp//////////
  // Construct req data
  mailchimpFunc(email, username);

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
