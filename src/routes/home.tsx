import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/authContext";

const Home = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;
  return (
    <div>
      <h1>home page</h1>
      <button onClick={() => logout()}>log out</button>
    </div>
  );
};

export default Home;
