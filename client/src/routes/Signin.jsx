import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
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
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        seterror(true);
        return;
      }
    } catch (err) {
      setLoading(false);
      seterror(true);
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
        <button disabled={loading} className="bg-slate-700 text-white p3 rounded-lg uppercase hover:opacity-95 disabled:placeholder-opacity-80">
          {loading ? 'Loading...': "Sign in"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Haveave an Account</p>
        <Link to="/sign-up" className="text-blue-400">
          <span>Sign Up</span>
        </Link>
      </div>
      <p className="text-red-500">{error && "Something went wrong!"}</p>
    </div>
  );
}
