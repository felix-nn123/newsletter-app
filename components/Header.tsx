"use client";

import React from "react";
import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { Lobster } from "next/font/google";
import Loading from "./Loading";

type Props = {
  onClickSubmit: (e: React.MouseEvent) => void;
  onChangeTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  loading: boolean;
  success: boolean;
  username: string;
  email: string;
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
  success,
  username,
  email,
}: Props) => {
  return (
    <div className="w-full h-full bg-slate-100">
      <div className="flex  flex-col lg:flex-row w-full h-full overflow-hidden">
        <div className="flex-1 relative bg-text-black/50">
          <img
            className="absolute w-full h-full"
            src="images/news-background.jpg"
          />
          <div
            className={`flex flex-col absolute z-5 w-full h-full justify-center items-center p-4 bg-[rgba(0,0,0,0.7)]`}
          >
            <h3
              className={`text-3xl text-center text-white font-bold leading-10 md:leading-relaxed md:text-6xl ${lobster.className}`}
            >
              Welcome to our news app
            </h3>
            <h3 className="text-3xl text-center font-bold leading-10 md:leading-relaxed md:text-6xl text-blue-500">
              Please subscribe to our Newsletter
            </h3>
          </div>
        </div>

        <div className="relative flex flex-col w-full h-full  p-2 flex-1 bg-slate-300 justify-center items-center">
          <>
            {loading ? (
              <Loading />
            ) : success ? (
              <Alert
                className="absolute m-5 top-0 "
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
              >
                Successfully subscribed to our newsletter
              </Alert>
            ) : (
              ""
            )}
            <TextField
              className="w-5/6 md:w-2/3"
              id="standard-basic"
              label="Full Name"
              variant="standard"
              onChange={onChangeUserName}
              required
              value={username}
            />
            <TextField
              className="w-5/6 md:w-2/3"
              id="standard-basic"
              label="Please enter your email address"
              variant="standard"
              type="email"
              required
              onChange={onChangeTextInput}
              value={email}
            />

            <button
              onClick={(e: React.MouseEvent) => onClickSubmit(e)}
              className="w-4/5 md:w-1/3 mt-10 bg-gray-800 text-white p-3 rounded-3xl hover:bg-gray-100 hover:text-black"
              type="submit"
              disabled={loading}
            >
              Subscribe to our newsletter
            </button>

            <div className="flex justify-center items-center mt-4">
              <p className="text-red-500 text-xs">{error}</p>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
