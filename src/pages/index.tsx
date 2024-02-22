import { useAuthentication } from "@/lib/hooks/use-authentication";
import Login from "@/components/Login";

import LoggedIn from "@/components/LoggedIn";
import Navbar from "@/components/NavBar";

const Home = () => {
  const { isAuthenticated } = useAuthentication();

  if (!isAuthenticated)
    return (
      <div>
        <Navbar username=""/>
        <Login />
      </div>
    );

  return <LoggedIn />;
};

export default Home;
