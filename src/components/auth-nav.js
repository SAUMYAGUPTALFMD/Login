import React from "react";
import AuthenticationButton from "./authentication-button";
import { Form } from "react-bootstrap";

const AuthNav = () => (
  <>
    <Form inline>
      <AuthenticationButton />
    </Form>
  </>
);

export default AuthNav;
