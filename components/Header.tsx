"use client";

import React from "react";
import { Button, TextField } from "@mui/material";
import { Lobster } from "next/font/google";
import Loading from "./Loading";

type Props = {
  onClickSubmit: (e: React.MouseEvent) => void;
  onChangeTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  loading: boolean;
};

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const Header = ({
  onClickSubmit,
  onChangeTextInput,
  onChangeUserName,
  error,
  loading,
}: Props) => {
  return (
    <div className="w-full h-full bg-slate-100">
      <div className="flex lg:flex-row md:flex-col w-full h-full overflow-hidden">
        <div className="flex-1 relative bg-text-black/50">
          <div
            className={`flex flex-col absolute w-full h-full justify-center items-center p-4 bg-[rgba(0,0,0,0.5)]}`}
          >
            <h3
              className={`text-6xl text-center text-white font-bold leading-relaxed ${lobster.className}`}
            >
              Welcome to our news app
            </h3>
            <p className="text-xl text-amber-500">
              Please subscribe to our Newsletter
            </p>
          </div>
          <img className="w-full h-full" src="images/news-background.jpg" />
        </div>

        <div className="flex flex-col w-full h-full  p-2 flex-1 bg-slate-300 justify-center items-center">
          {loading ? (
            <Loading />
          ) : (
            <>
              <TextField
                className="w-2/3"
                id="standard-basic"
                label="Full Name"
                variant="standard"
                onChange={onChangeUserName}
              />
              <TextField
                className="w-2/3"
                id="standard-basic"
                label="Please enter your email address"
                variant="standard"
                onChange={onChangeTextInput}
              />
              <button
                onClick={(e: React.MouseEvent) => onClickSubmit(e)}
                className="w-1/3 mt-10 bg-gray-800 text-white p-3 rounded-3xl"
                type="submit"
              >
                Subscribe to newsletter
              </button>

              <div className="flex justify-center items-center mt-4">
                <p className="text-red-500 text-xs">{error}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
