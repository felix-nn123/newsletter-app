/////////////////////////////////////////////////////
/////////////////mailchimp function//////////////////////////
export const mailchimpFunc = async (email: string, username: string) => {
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
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: username.split(" ")[0],
          LNAME: username
            .split(" ")
            .slice(username.split(" ").length - 1)
            .join(" "),
        },
      },
    ],
  };

  console.log("mailchimp data", data);

  const postData: string = JSON.stringify(data);

  await fetch("https://us21.api.mailchimp.com/3.0/lists/270eb537da", {
    method: "POST",
    headers: {
      Authorization: "auth 48cb646c23ae5578df53dc837683750f-us21",
    },
    body: postData,
  }).catch((err: any) => {
    // console.log("fail to subscribe to mailchip", err);
    console.log("fail to subscribe to mailchip", err);
  });
};
