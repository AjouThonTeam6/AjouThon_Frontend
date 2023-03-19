import React from "react";
import { Outlet } from "react-router-dom";
import InfoBox from "../../../components/infobox/InfoBox";
import styled from "styled-components";
import ClubTable from "../../../components/ClubTale";
import { studentClubColumn } from "../../../model/tableModel";

export const dummyData = [
  {
    학번: "202220791",
    성명: "강민수",
    가입일자: "2021-08-03 01:14:47",
    학부: "소프트웨어융합대학",
    전공: "소프트웨어학과",
    핸드폰번호: "010-4244-7765",
    이메일: "minsookang03@ajou.ac.kr",
  },
  {
    학번: "202220799",
    성명: "강수빈",
    가입일자: "2021-08-03 01:14:47",
    학부: "소프트웨어융합대학",
    전공: "소프트웨어학과",
    핸드폰번호: "010-3902-6789",
    이메일: "emma030209@ajou.ac.kr",
  },
  {
    학번: "202322051",
    성명: "곽민서",
    가입일자: "2021-08-03 01:14:47",
    학부: "소프트웨어융합대학",
    전공: "소프트웨어학과",
    핸드폰번호: "010-9062-8436",
    이메일: "mkms0222@ajou.ac.kr",
  },
  {
    학번: "202322054",
    성명: "권민재",
    가입일자: "2021-08-03 01:14:47",
    학부: "소프트웨어융합대학",
    전공: "소프트웨어학과",
    핸드폰번호: "010-9973-3661",
    이메일: "minjaekwon@ajou.ac.kr",
  },
  {
    학번: "202220781",
    성명: "권세빈",
    가입일자: "2021-08-03 01:14:47",
    학부: "소프트웨어융합대학",
    전공: "소프트웨어학과",
    핸드폰번호: "010-8727-8413",
    이메일: "a856412@ajou.ac.kr",
  },
];

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
`;

const InfoBoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  width: 90%;
`;

const Button = styled.button`
  background-color: #ff1818;
  color: white;
  border-radius: 5px;
  height: 3rem;
  width: 8rem;
  margin: 0 10px;
  font-size: 15px;
  font-weight: bold;
`;

const SubmitButton = styled(Button)`
  background-color: #1890ff;
`;

const ButtonArea = styled.div`
  display: flex;
`;

const MemberClub = () => {
  //동아리 회원 관리 페이지
  return (
    <OuterContainer>
      <InfoBoxContainer>
        <InfoBox title="전체 구성원" value={`${dummyData.length} 건`}></InfoBox>
        <InfoBox title="입부 대기중" value={`${dummyData.length} 건`}></InfoBox>
      </InfoBoxContainer>
      <ClubTable
        columnData={studentClubColumn}
        datas={dummyData}
        needCheckBox={true}
      ></ClubTable>
      <Outlet></Outlet>
      <ButtonArea>
        <SubmitButton
          onClick={async () => {
            await fetch("http://localhost:8000/upload/sheet", {
              method: "POST",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          }}
        >
          학사서비스 등록
        </SubmitButton>
        <Button>삭제</Button>
      </ButtonArea>
    </OuterContainer>
  );
};

export default MemberClub;
