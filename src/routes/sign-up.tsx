import { useContext, useState } from "react";
import { AuthContext, AuthContextType } from "../context/authContext";
import {
  faEyeSlash,
  faEye,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { signUp } = useContext(AuthContext) as AuthContextType;
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordMatch = () => password === confirmPassword;
  const isPasswordValid = () => /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  const handleSignUp = async () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!isEmailValid()) {
      setEmailError("Invalid email address");
      return;
    }

    if (!isPasswordMatch()) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    if (!isPasswordValid()) {
      setPasswordError(
        "Password should be at least 6 characters, include 1 number, and start with an uppercase letter"
      );
      return;
    }

    await signUp(email, password);
  };
  return (
    <div className="bg-unauth bg-cover bg-center bg-no-repeat h-screen  bg-red-300 flex justify-center items-center">
      <div className="min-w-96 shadow-lg w-1/3 p-11 bg-white flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-4">Create An Account</h2>
        <form className="w-full flex flex-col gap-2.5">
          <div>
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
              className={`w-full border-2 border-custom-inputBorder bg-custom-inputBackground py-2 px-4
              ${emailError && "border-red-500 bg-red-100"}`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faCircleExclamation} className="mr-1" />
                {emailError}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full border-2 border-custom-inputBorder bg-custom-inputBackground py-2 px-4 
                ${passwordError && "border-red-500 bg-red-100"}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-1 px-2 py-1"
              >
                <FontAwesomeIcon
                  color={passwordError ? "red" : "#F4A448"}
                  icon={!showPassword ? faEyeSlash : faEye}
                />
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm leading-4 mt-1">
                <FontAwesomeIcon icon={faCircleExclamation} className="mr-1" />
                {passwordError}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password:
            </label>
            <div className="relative w-full">
              <input
                required
                type={showRepPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full border-2 border-custom-inputBorder bg-custom-inputBackground py-2 px-4
                ${confirmPasswordError && "border-red-500 bg-red-100"}`}
              />
              <button
                type="button"
                onClick={() => setShowRepPassword(!showRepPassword)}
                className="absolute inset-y-0 right-1 px-2 py-1"
              >
                <FontAwesomeIcon
                  color={confirmPasswordError ? "red" : "#F4A448"}
                  icon={!showRepPassword ? faEyeSlash : faEye}
                />
              </button>
            </div>
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faCircleExclamation} className="mr-1" />
                {confirmPasswordError}
              </p>
            )}
          </div>
        </form>
        <button
          onClick={handleSignUp}
          className="rounded text-2xl my-6 bg-custom-main w-72 py-2.5 text-white hover:bg-[#194A6C] transition-all"
        >
          Sign Up
        </button>
        <p>
          Already Have An Account?{" "}
          <Link to="/sign-in" className="text-custom-main">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
