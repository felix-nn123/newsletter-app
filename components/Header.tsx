"use client";

import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { Lobster } from "next/font/google";
import Loading from "./Loading";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "./NewsLetterForm";
import { on } from "events";
import {
  GetRegisterEmail,
  PostRegisterEmail,
} from "@/services/registerEmailService";

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

const Header = ({}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await GetRegisterEmail();
    setUsers(res);
  };

  const onClickSubmit = async () => {
    try {
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
      setSuccess(true);
      setError("");

      let timer = setTimeout(() => {
        setSuccess(false);
        clearTimeout(timer);
      }, 5000);
    } catch (ex: any) {
      if (ex?.response?.status === 400) {
        setError(ex?.response?.data?.message);
        return;
      }
    }
  };

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
            <MailchimpSubscribe
              url={
                "https://app.us21.list-manage.com/subscribe/post?u=de51cdebee964a09b9b795a8b&amp;id=270eb537da&amp;f_id=008eeee6f0"
              }
              render={({ subscribe, status, message }: any) => (
                <>
                  <NewsLetterForm
                    onClickSubmit={(e: React.MouseEvent) => {
                      e.preventDefault();
                      subscribe({
                        EMAIL: email,
                        FNAME: username.split(" ")[0],
                        LNAME: username
                          .split(" ")
                          .slice(username.split(" ").length - 1)
                          .join(" "),
                      });
                      onClickSubmit();
                    }}
                    onChangeTextInput={(
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => setEmail(e.target.value)}
                    onChangeUserName={(
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => setUsername(e.target.value)}
                    error={error}
                    loading={loading}
                    success={success}
                    username={username}
                    email={email}
                  />
                </>
              )}
            />

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
