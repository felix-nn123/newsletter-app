import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import { useState } from "react";

export default function Home() {
  // const [email, setEmail] = useState("");
  const onClickSubmit = () => {
    console.log("clicked");
  };
  return (
    <main className="w-full h-screen">
      <Navbar />
      <Header
      // onClickSubmit={onClickSubmit}
      // onChangeTextInput={(e) => setEmail(e.target.value)}
      />
    </main>
  );
}
