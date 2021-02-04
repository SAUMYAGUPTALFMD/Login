import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="outline-success" onClick={() => loginWithRedirect()}>
      Log In{' '}
      <i className="fa fa-sign-in-alt"></i>
    </Button>
  );
};

export default LoginButton;
