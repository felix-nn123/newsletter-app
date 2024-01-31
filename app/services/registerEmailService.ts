export function PostRegisterEmail(username: string, email: string) {
  try {
    return fetch("http://localhost:3000/api/registerEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email }),
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetRegisterEmail() {
  try {
    const data = await fetch("http://localhost:3000/api/registerEmail", {
      cache: "no-store",
    });

    if (!data.ok) throw new Error("Error fetching data");
    return data.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function DeleteRegisterEmail(id: string) {
  try {
    const data = await fetch(`http://localhost:3000/api/registerEmail/${id}`, {
      method: "DELETE",
    });

    return data.json();
  } catch (error) {
    console.log(error.message);
  }
}
