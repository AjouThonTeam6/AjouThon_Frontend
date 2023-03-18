import React from "react";
import styled from "styled-components";
import { FiUser, FiAward, FiEdit } from "react-icons/fi";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

const NavigationArea = styled.div`
  display: flex;
`;

const NavigationButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 13px 20px;
  background-color: white;
  color: #8c8c8c;
`;

const NavigationText = styled.span`
  font-size: 18px;
  margin-left: 5px;
`;

const LogoutArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoutText = styled.span`
  color: #8c8c8c;
  margin-left: 5px;
`;

const AjouLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavigationArea>
        <NavigationButton>
          <FiUser size="18px" />
          <NavigationText>동아리원 관리</NavigationText>
        </NavigationButton>
        <NavigationButton>
          <FiAward size="18px" />

          <NavigationText>활동 관리</NavigationText>
        </NavigationButton>
        <NavigationButton>
          <FiEdit size="18px" />
          <NavigationText>기록</NavigationText>
        </NavigationButton>
      </NavigationArea>
      <LogoutArea>
        <AjouLogo src={require("../../imgs/ajouLogo.png")} />
        <LogoutText>로그아웃</LogoutText>
      </LogoutArea>
    </HeaderContainer>
  );
};

export default Header;
