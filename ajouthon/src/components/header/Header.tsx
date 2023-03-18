import React from "react";
import styled from "styled-components";
import { FiUser, FiAward, FiEdit } from "react-icons/fi";
import { IoSchoolOutline, IoFlagOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountAtom } from "../../atoms/accountAtom";
import { IAccount } from "../../interfaces/loginInterface";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0;
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
  margin-right: 10px;
  cursor: pointer;
`;

const NavigationText = styled.span`
  font-size: 18px;
  margin-left: 5px;
`;

const LogoutArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
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
  const [account, setAccount] = useRecoilState<IAccount>(accountAtom);
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <NavigationArea>
        <Link to="/member-club">
          <NavigationButton>
            <FiUser size="18px" />
            <NavigationText>동아리원 관리</NavigationText>
          </NavigationButton>
        </Link>
        <Link to="/activity-club/main">
          <NavigationButton>
            <FiAward size="18px" />
            <NavigationText>동아리 활동 관리</NavigationText>
          </NavigationButton>
        </Link>
        <Link to="/member-society">
          <NavigationButton>
            <IoSchoolOutline size="18px" />
            <NavigationText>소학회원 관리</NavigationText>
          </NavigationButton>
        </Link>
        <Link to="/activity-society/main">
          <NavigationButton>
            <IoFlagOutline size="18px" />
            <NavigationText>소학회 활동 관리</NavigationText>
          </NavigationButton>
        </Link>
        <Link to="/">
          <NavigationButton>
            <FiEdit size="18px" />
            <NavigationText>기록</NavigationText>
          </NavigationButton>
        </Link>
      </NavigationArea>
      <LogoutArea
        onClick={() => {
          setAccount({ id: "", pw: "" });
          navigate("/login");
        }}
      >
        <AjouLogo src={require("../../imgs/ajouLogo.png")} />
        <LogoutText>로그아웃</LogoutText>
      </LogoutArea>
    </HeaderContainer>
  );
};

export default Header;
