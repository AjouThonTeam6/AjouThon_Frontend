import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../../atoms/accountAtom";
import Header from "../../../components/header/Header";
import InfoBox from "../../../components/infobox/InfoBox";
import { IAccount } from "../../../interfaces/loginInterface";
import styled from "styled-components";
import ClubTable from "../../../components/ClubTale";
import { studentClubColumn } from "../../../model/tableModel";

export const dummyData = [
  {
    학번: "201820951",
    성명: "강재민",
    가입일자: "2021-08-03 01:14:47",
    학부: "전자공학과",
    전공: "전자공학과",
    핸드폰번호: "01089325180",
    이메일: "rkdwoals159@gmail.com",
  },
  {
    학번: "201820951",
    성명: "강재민",
    가입일자: "2021-08-03 01:14:47",
    학부: "전자공학과",
    전공: "전자공학과",
    핸드폰번호: "01089325180",
    이메일: "rkdwoals159@gmail.com",
  },
  {
    학번: "201820951",
    성명: "강재민",
    가입일자: "2021-08-03 01:14:47",
    학부: "전자공학과",
    전공: "전자공학과",
    핸드폰번호: "01089325180",
    이메일: "rkdwoals159@gmail.com",
  },
  {
    학번: "201820951",
    성명: "강재민",
    가입일자: "2021-08-03 01:14:47",
    학부: "전자공학과",
    전공: "전자공학과",
    핸드폰번호: "01089325180",
    이메일: "rkdwoals159@gmail.com",
  },
  {
    학번: "201820951",
    성명: "강재민",
    가입일자: "2021-08-03 01:14:47",
    학부: "전자공학과",
    전공: "전자공학과",
    핸드폰번호: "01089325180",
    이메일: "rkdwoals159@gmail.com",
  },
];

const OuterContainer=styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
`

const InfoBoxContainer=styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  width: 90%;
`

const buttonSytle = {
  backgroundColor: "#ff1818",
  color: "white",
  borderRadius: "5px",
  height: "2.5rem",
  width: "5rem",
  fontWeight: "bold"
};

const MemberClub = () => {//동아리 회원 관리 페이지
  return (
    <OuterContainer>
    <InfoBoxContainer>
      <InfoBox title='전체 구성원' value={`${dummyData.length} 건`}></InfoBox>
      <InfoBox title='입부 대기중' value={`${dummyData.length} 건`}></InfoBox>
    </InfoBoxContainer>
    <ClubTable
      columnData={studentClubColumn}
      datas={dummyData}
      needCheckBox={true}
    ></ClubTable>
    <Outlet></Outlet>
    <button style={buttonSytle}>삭제</button>
  </OuterContainer>
  );
};

export default MemberClub;
