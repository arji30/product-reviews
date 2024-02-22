import React from "react";
import { useAuthentication } from "@/lib/hooks/use-authentication";
import Navbar from "./NavBar";
import ProductList from "./ProductList";

function LoggedIn() {
  
  const { user } = useAuthentication();

  return (
    <>
      <Navbar username={user?.givenName}/>
      <ProductList/>
    </>
  );
}

export default LoggedIn;
