export async function PostRegisterEmail(username: string, email: string) {
  try {
    const res = await fetch(
      "https://newsletter-ijyc2dytu-felix-nkongho-ndifons-projects.vercel.app/api/registerEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      }
    );

    return res.json();
  } catch (error: unknown) {
    // console.log(error.message);
  }
}

export async function GetRegisterEmail() {
  try {
    const res = await fetch(
      "https://newsletter-ijyc2dytu-felix-nkongho-ndifons-projects.vercel.app/api/registerEmail",
      {
        cache: "no-store",
      }
    );

    return res.json();
  } catch (error: unknown) {
    // console.log(error.message);
  }
}

export async function DeleteRegisterEmail(id: string) {
  try {
    const res = await fetch(
      `https://newsletter-ijyc2dytu-felix-nkongho-ndifons-projects.vercel.app/api/registerEmail/${id}`,
      {
        method: "DELETE",
      }
    );
    return res.json();
  } catch (error: unknown) {
    // console.log(error.message);
  }
}
