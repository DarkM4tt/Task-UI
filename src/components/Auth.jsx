import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsApple, BsFacebook } from "react-icons/bs";

const Auth = () => {
  return (
    <div className="flex flex-col w-96 mx-auto mt-5 py-5 px-10 bg-white items-center rounded-2xl">
      <h1 className="font-bold text-2xl mt-5">Agent Login</h1>
      <p className="text-sm font-semibold mt-4">
        Hey, Enter your details to get signin
      </p>
      <p className="text-sm font-semibold">to your account</p>

      <div className="mt-8">
        <input
          className="w-full border border-gray-200 px-4 py-2 rounded-xl"
          type="text"
          placeholder="Enter Email / Phone No."
        />
        <input
          className="w-full border border-gray-200 px-4 py-2 mt-3 rounded-xl"
          type="text"
          placeholder="Passcode"
        />
        <p className="absolute top-[352px] font-bold text-xs left-[876px]">
          Hide
        </p>
      </div>

      <div className="w-full">
        <p className="mt-2 text-sm font-semibold">Having trouble in sign in?</p>
        <button className="bg-yellow-300 w-full py-2 mt-4 rounded-xl">
          Sign in
        </button>
      </div>

      <p className="text-xs mt-5">---Or Sign in with---</p>

      <div className="flex mt-4 gap-3">
        <div className="flex gap-1 border p-1 items-center border-gray-200 rounded-xl">
          <AiOutlineGoogle />
          <p>Google</p>
        </div>
        <div className="flex border gap-1 p-1 items-center border-gray-200 rounded-xl">
          <BsApple />
          <p>Apple ID</p>
        </div>
        <div className="flex items-center gap-1 p-1 border border-gray-200 rounded-xl">
          <BsFacebook />
          <p>Facebook</p>
        </div>
      </div>

      <p className="text-xs my-5">
        Don't have an account?<span className="font-bold">Request Now</span>
      </p>
    </div>
  );
};

export default Auth;
