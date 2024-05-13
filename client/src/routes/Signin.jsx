import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailuser,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailuser(data));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");

    } catch (error) {
      dispatch(signInFailuser(error));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold m-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-3xl">
        <input
          type="text"
          placeholder="email"
          id="email"
          className="bg-slate-100 p3 rounded-lg"
          onChange={handelChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p3 rounded-lg"
          onChange={handelChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p3 rounded-lg uppercase hover:opacity-95 disabled:placeholder-opacity-80"
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Haveave an Account</p>
        <Link to="/sign-up" className="text-blue-400">
          <span>Sign Up</span>
        </Link>
      </div>
      <p className="text-red-500">{error ? error.message || "Something went wrong!": ""}</p>
    </div>
  );
}
