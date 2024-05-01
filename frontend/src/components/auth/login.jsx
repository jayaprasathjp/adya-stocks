import React, { useEffect } from "react";
import { Brand, FormInput, SubmitButton } from "./common";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch("http://localhost:3001" + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    if (response.ok) {
      console.log("Success:", body);
      localStorage.setItem("user", JSON.stringify(body.user));
      navigate("/TopStocks");
    } else {
      console.error("Error:", body);
      alert(body.error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/TopStocks");
    }
  });
  return (
    <>
      <div className=" min-h-screen flex w-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white shadow-lg border py-12 rounded-xl p-4">
            <div className="flex flex-col items-center">
              <Brand />

              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8 ">
              <div className="py-8 px-4 sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleLogin}>
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                  />
                  <FormInput
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                  />
                  <SubmitButton text="Sign in" />
                </form>
              </div>
            </div>
            <div className="ml-9">
              Don’t have an account yet?{" "}
              <Link className=" text-blue-500" to="/register">
                Sign up
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
