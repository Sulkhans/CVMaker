import {
  faEyeSlash,
  faEye,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../context/authContext";

const SignIn = () => {
  const { logIn } = useContext(AuthContext) as AuthContextType;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogIn = async () => {
    if (email === "" || password === "") {
      setError("Fill email and password fields");
      return;
    }
    await logIn(email, password);
    navigate("/home");
    setError("");
  };

  return (
    <div className="bg-unauth bg-cover bg-center bg-no-repeat h-screen bg-red-300 flex justify-center items-center">
      <div className="w-full max-w-96 shadow-lg p-6 m-4 sm:p-8 bg-white flex flex-col justify-center items-center">
        <h2 className="text-xl sm:text-2xl mb-4">Log In To Your Account</h2>
        <form className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-0.5"
          >
            Email Address:
          </label>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mb-3.5 w-full border-2 border-custom-orange bg-custom-light-orange p-2
            ${error && "border-red-500 bg-red-100"}`}
          />
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-0.5"
          >
            Password:
          </label>
          <div className="relative mb-2 w-full">
            <input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border-2 border-custom-orange bg-custom-light-orange py-2 px-4
              ${error && "border-red-500 bg-red-100"}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-1 px-2 py-1"
            >
              <FontAwesomeIcon
                color={error ? "#EF4444" : "#F4A448"}
                icon={!showPassword ? faEyeSlash : faEye}
              />
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-2">
              <FontAwesomeIcon icon={faCircleExclamation} className="mr-1" />
              {error}
            </p>
          )}
          <a className="text-custom-blue text-sm font-medium cursor-pointer">
            Forgot Your Password?
          </a>
        </form>
        <button
          onClick={handleLogIn}
          className="rounded text-xl my-4 bg-custom-blue w-full py-2.5 text-white hover:bg-custom-light-blue transition-all"
        >
          Log In
        </button>
        <p className="text-sm">
          Don't Have An Account?{" "}
          <Link to="/sign-up" className="text-custom-blue">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
