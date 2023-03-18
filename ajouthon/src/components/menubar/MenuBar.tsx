import React from "react";
import styled from "styled-components";

import { AiOutlineRight } from "react-icons/ai";

const MenuBarContainer = styled.div`
  height: 100%;
  width: 240px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid black;
`;

const MenuArea = styled.div`
  width: 100%;
`;

const Menu = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  height: 60px;
  border: 1px solid black;
  width: 100%;
`;

const MenuText = styled.span``;
const ChitoImage = styled.img`
  height: 150px;
  width: 150px;
`;

const MenuBar = () => {
  return (
    <MenuBarContainer>
      <MenuArea>
        <Menu>
          <MenuText>동아리 선택</MenuText>
          <AiOutlineRight size="18px" />
        </Menu>
        <Menu>
          <MenuText>소학회 선택</MenuText>
          <AiOutlineRight size="18px" />
        </Menu>
        <Menu>
          <MenuText>학사서비스 바로가기</MenuText>
          <AiOutlineRight size="18px" />
        </Menu>
      </MenuArea>
      <ChitoImage src={require("../../imgs/chito.png")} />
    </MenuBarContainer>
  );
};

export default MenuBar;
