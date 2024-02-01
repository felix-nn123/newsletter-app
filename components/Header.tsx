"use client";
import React from "react";
import { Button, TextField } from "@mui/material";

type Props = {
  onClickSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
};

const Header = ({
  onClickSubmit,
  onChangeTextInput,
  onChangeUserName,
  error,
}: Props) => {
  return (
    <div className="w-full h-full bg-slate-100">
      <div className="flex lg:flex-row md:flex-col w-full h-full overflow-hidden">
        <div className="flex-1 relative bg-text-black/50">
          <div className="flex absolute w-full h-full justify-center items-center p-4 bg-[rgba(0,0,0,0.5)]">
            <h3 className="text-5xl text-center text-white font-bold leading-relaxed">
              Welcome to our news app, please subscribe to our Newsletter
            </h3>
          </div>
          <img className="w-full h-full" src="images/news-background.jpg" />
        </div>
        <div className="flex flex-col w-full h-full  p-2 flex-1 bg-slate-300 justify-center items-center">
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
          <Button
            onClick={onClickSubmit}
            className="w-1/3 mt-10 bg-gray-800"
            variant="contained"
            type="submit"
          >
            Subscribe to newsletter
          </Button>

          <div className="flex justify-center items-center mt-4">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
