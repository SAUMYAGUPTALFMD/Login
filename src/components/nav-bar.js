import React from "react";
import { Navbar } from "react-bootstrap";
import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
    <>
      <Navbar
        bg="custom dark"
        variant="dark"
        expand="lg"
        style={{ backgroundColor: "rgb(14, 14, 14)" }}
      >
        <Navbar.Brand href="/">Team Rocket</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <MainNav />
          <AuthNav />
        </Navbar.Collapse>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;
