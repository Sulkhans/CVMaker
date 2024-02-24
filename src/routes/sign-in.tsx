import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-unauth bg-cover bg-center bg-no-repeat h-screen  bg-red-300 flex justify-center items-center">
      <div className="min-w-96 shadow-lg w-1/3 p-11 bg-white flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-4">Log In To Your Account</h2>
        <form className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address:
          </label>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3.5 w-full border border-solid border-2 border-custom-inputBorder bg-custom-inputBackground py-2 px-4"
          />
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <div className="relative mb-2.5 w-full">
            <input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-solid border-2 border-custom-inputBorder bg-custom-inputBackground py-2 px-4"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-2 py-1"
            >
              <FontAwesomeIcon
                color="#F4A448"
                icon={!showPassword ? faEyeSlash : faEye}
              />
            </button>
          </div>
          <a className="text-custom-main">Forgot Your Password?</a>
        </form>
        <button className="rounded text-2xl my-6 bg-custom-main w-72 py-2.5 text-white">
          Log In
        </button>
        <p>
          Don't Have An Account?{" "}
          <Link to="/sign-up" className="text-custom-main">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
