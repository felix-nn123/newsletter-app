"use client"; // This is a client componen
// /* @ts-expect-error Async Server Component */
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import {
  GetRegisterEmail,
  PostRegisterEmail,
} from "../services/registerEmailService";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await GetRegisterEmail();
    setUsers(res);
  };

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

      setLoading(true);

      const res = await PostRegisterEmail(email, username);
      setUsername("");
      setEmail("");
      setLoading(false);
      console.log("REGISTERED EMAIL", res);
    } catch (error: unknown) {
      // setError(error?.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <Header
          onClickSubmit={onClickSubmit}
          onChangeTextInput={(e) => setEmail(e.target.value)}
          onChangeUserName={(e) => setUsername(e.target.value)}
          error={error}
          loading={loading}
        />
      </div>
    </>
  );
}
