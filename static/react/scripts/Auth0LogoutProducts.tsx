import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButtonProducts = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: "http://localhost:8888/shop" } })}>
      Log Out
    </button>
  );
};

export default LogoutButtonProducts;