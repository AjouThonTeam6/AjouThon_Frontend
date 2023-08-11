import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/container/Container";
import Header from "../../components/header/Header";

const Main = () => {
  return (
    <>
      {/* <MenuBar /> */}
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

export default Main;
