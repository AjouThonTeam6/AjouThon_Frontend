import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ClubTable from "../../../components/ClubTale";
import InfoBox from "../../../components/infobox/InfoBox";
import { studentClubColumn } from "../../../model/tableModel";

//해당 데이터는 추후에 csv로 파일을 가져올거기 때문에 단순 테스트용이지, 이후 삭제해야합니다.
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
];

const OuterContainer=styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const InfoBoxContainer=styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
`

const ActivityClub = () => {
  return (
    <OuterContainer>
      <InfoBoxContainer>
        <InfoBox title='전체 구성원' value='?명'></InfoBox>
        <InfoBox title='입부 대기중' value='?명'></InfoBox>
      </InfoBoxContainer>
      {/* <h1>This is ActivityClub page !</h1> */}
      <ClubTable
        columnData={studentClubColumn}
        datas={dummyData}
        needCheckBox={true}
      ></ClubTable>
      <Outlet></Outlet>
    </OuterContainer>
  );
};

export default ActivityClub;
