"use client"; // This is a client componen
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const onClickSubmit = () => {
    console.log("clicked");
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
