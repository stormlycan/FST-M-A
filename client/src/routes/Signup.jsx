import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false);
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      seterror(false);
      console.log(formData);
      await axios
        .post("http://localhost:5000/api/auth/signup", formData)
        .then((result) => {
          console.log(result);
        });
      setLoading(false)
    } catch (err) {
      setLoading(false);
      seterror(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold m-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-3xl">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-slate-100 p3 rounded-lg"
          onChange={handelChange}
        />
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
        <button disabled={loading} className="bg-slate-700 text-white p3 rounded-lg uppercase hover:opacity-95 disabled:placeholder-opacity-80">
          {loading ? 'Loading...': "Sign up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account</p>
        <Link to="/sign-in" className="text-blue-400">
          <span>Signin</span>
        </Link>
      </div>
      <p className="text-red-500">{error && "Something went wrong!"}</p>
    </div>
  );
}
