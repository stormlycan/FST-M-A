import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold m-7">Sign Up</h1>
      <form action="" className="flex flex-col gap-4 text-3xl">
        <input
          type="text"
          placeholder="Username"
          id="Username"
          className="bg-slate-100 p3 rounded-lg"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          className="bg-slate-100 p3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p3 rounded-lg uppercase hover:opacity-95 disabled:placeholder-opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account</p>
        <Link to="/sign-in" className="text-blue-400">
          <span>Signin</span>
        </Link>
      </div>
    </div>
  );
}
