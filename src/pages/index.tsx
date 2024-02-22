import { useAuthentication } from "@/lib/hooks/use-authentication";
import Login from "@/components/Login";
// import { useLocalContent } from "src/lib/hooks/use-local-content";

import LoggedIn from "@/components/LoggedIn";
import Navbar from "@/components/NavBar";

const Home = () => {
  const { isAuthenticated } = useAuthentication();
  // const { country } = useLocalContent();

  if (!isAuthenticated)
    return (
      <div>
        <Navbar username=""/>
        <Login />
      </div>
    );

  // return (
  //   <Wrapper>
  //     <LocalLandingPage />
  //   </Wrapper>
  // );
  return <LoggedIn />;
};

export default Home;
