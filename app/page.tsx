"use client"; // This is a client componen
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <Header />
      </div>
    </>
  );
}
