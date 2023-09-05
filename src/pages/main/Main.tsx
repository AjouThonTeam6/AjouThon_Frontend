import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../../components/container/Container";
import Header from "../../components/header/Header";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") === undefined) {
      navigate("/login");
    } else {
      navigate("/member-club");
    }
  }, []);

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
