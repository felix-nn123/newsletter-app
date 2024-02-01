export function PostRegisterEmail(username: string, email: string) {
  try {
    return fetch("http://localhost:3000/api/registerEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email }),
    });
  } catch (error: unknown) {
    // console.log(error.message);
  }
}

export async function GetRegisterEmail() {
  try {
    return fetch("http://localhost:3000/api/registerEmail", {
      cache: "no-store",
    });
  } catch (error: unknown) {
    // console.log(error.message);
  }
}

export async function DeleteRegisterEmail(id: string) {
  try {
    return fetch(`http://localhost:3000/api/registerEmail/${id}`, {
      method: "DELETE",
    });
  } catch (error: unknown) {
    // console.log(error.message);
  }
}
