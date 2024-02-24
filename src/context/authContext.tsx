import {
  createContext,
  //   useContext,
  useState,
  //   useEffect,
  ReactNode,
} from "react";

type Props = {
  children: ReactNode;
};
type User = {
  id: number;
  username: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  logIn: (username: string, password: string) => Promise<void>;
  //   logout: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await fetch(`http://188.169.35.136:8080/registration`, {
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

  const logIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await fetch(`http://188.169.35.136:8080/login`, {
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

  const contextValue: AuthContextType = {
    user,
    logIn,
    // logout,
    signUp,
    loading,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
