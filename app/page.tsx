"use client"; // This is a client componen
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState } from "react";
import {
  GetRegisterEmail,
  PostRegisterEmail,
} from "./services/registerEmailService";

export default async function Home() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const res = await GetRegisterEmail();
  console.log("All REGISTERED EMAILS", res);

  const onClickSubmit = async () => {
    const res = await PostRegisterEmail(email, username);
    console.log(res);
  };
  return (
    <main className="w-full h-screen">
      <Navbar />
      <Header
        onClickSubmit={onClickSubmit}
        onChangeTextInput={(e) => setEmail(e.target.value)}
        onChangeUserName={(e) => setUsername(e.target.value)}
      />
    </main>
  );
}
