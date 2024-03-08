import { useState } from "react";
import { getSession, login, logout } from "@/lib";
import { redirect } from "next/navigation";

const Login = () => {
  const session = getSession();

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Login</h2>
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/");
        }}
      >
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default Login;
