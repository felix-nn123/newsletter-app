"use client";

import { TextField } from "@mui/material";
import React from "react";

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

const NewsLetterForm = ({
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
    <>
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
        onClick={onClickSubmit}
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
  );
};

export default NewsLetterForm;
