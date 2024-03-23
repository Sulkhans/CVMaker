import {
  createContext,
  //   useContext,
  useState,
  //   useEffect,
  ReactNode,
} from "react";
import { useCookies } from "react-cookie";

type Props = {
  children: ReactNode;
};

export type AuthContextType = {
  logIn: (username: string, password: string, apiBaseUrl: string) => Promise<void>;
  logout: () => void;
  signUp: (email: string, password: string, apiBaseUrl: string) => Promise<void>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const [, setCookie, removeCookie] = useCookies(["authToken"]);

  const signUp = async (email: string, password: string, apiBaseUrl: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${apiBaseUrl}/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setLoading(false);
      } else if (response.status === 400) {
        const errorData = await response.json();
        console.error(`Signup failed: ${errorData.message}`);
        setLoading(false);
      } else {
        console.error(`Unexpected status code: ${response.status}`);
        setLoading(false);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
      setLoading(false);
    }
  };

  const logIn = async (email: string, password: string, apiBaseUrl: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${apiBaseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setCookie("authToken", data.token, { path: "/" });
        setLoading(false);
      } else if (response.status === 401) {
        const errorData = await response.json();
        console.error(`Login failed: ${errorData.message}`);
        setLoading(false);
      } else {
        console.error(`Unexpected status code: ${response.status}`);
        setLoading(false);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setLoading(false);
    }
  };

  const logout = () => removeCookie("authToken");

  const contextValue: AuthContextType = {
    logIn,
    logout,
    signUp,
    loading,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
