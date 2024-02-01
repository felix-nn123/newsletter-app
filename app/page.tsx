"use client"; // This is a client componen
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React, { useState } from "react";
import {
  GetRegisterEmail,
  PostRegisterEmail,
} from "./services/registerEmailService";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // const res = await GetRegisterEmail();
  // console.log("All REGISTERED EMAILS", res);

  const onClickSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      if (!email) {
        setError("Please enter a valid email address");
        return;
      }
      if (!username) {
        setError("Please enter a valid username");
        return;
      }
      
      const res = await PostRegisterEmail(email, username);

    } catch (error: unknown) {
      // setError(error?.message);
    }
  };
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Header
        onClickSubmit={onClickSubmit}
        onChangeTextInput={(e) => setEmail(e.target.value)}
        onChangeUserName={(e) => setUsername(e.target.value)}
        error={error}
      />
    </div>
  );
}
