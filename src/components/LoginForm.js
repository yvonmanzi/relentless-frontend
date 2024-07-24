import React, { useState } from "react";

import login from "../authService.js";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await login(username, password);
      // Some redirection
      console.log("Login Successful");
    } catch (e) {
      setError(error);
      console.error("Login Failed", error);
    }
  };
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onSubmit={handleLogin}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800"
            href=""
          >
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
