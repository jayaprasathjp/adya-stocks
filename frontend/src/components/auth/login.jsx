import React from "react";
import { Brand, FormInput, SubmitButton } from "./common";
import { Link } from "react-router-dom";

export default function LoginPage() {
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
              <form className="space-y-6" action="#" method="POST">
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
          <div className="ml-9">Don’t have an account yet? <Link className=" text-blue-500" to="/register">Sign up</Link></div>
        </div>
        
      </div>
    </div>
    </>
  );
}
