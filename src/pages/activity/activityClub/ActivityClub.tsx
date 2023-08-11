import React from "react";
import { Link, Outlet } from "react-router-dom";
import InfoBox from "../../../components/infobox/InfoBox";
import styled from "styled-components";
import ClubTable from "../../../components/ClubTale";
import { ActivityModelColumn } from "../../../model/activityTableModel";

const MemberClub = () => {
  //동아리 회원 관리 페이지

  return (
    <OuterContainer>
      <InfoBoxContainer>
        <InfoBox title="활동 내역" value={`${dummyData.length} 건`}></InfoBox>
        <InfoBox
          title="임시저장 내역"
          value={`${dummyData.length} 건`}
        ></InfoBox>
      </InfoBoxContainer>
      <Link to="../write">
        <button style={buttonSytle}>활동내역 추가</button>
      </Link>

      <ClubTable
        columnData={ActivityModelColumn}
        datas={dummyData}
        needCheckBox={true}
      ></ClubTable>
      <Outlet></Outlet>
      <button style={buttonSytle}>학사서비스 업로드</button>
    </OuterContainer>
  );
};

export default MemberClub;

export const dummyData = [
  {
    활동명: "1",
    활동기간: "123~123",
    인원: "3",
    장소: "아주대",
    업로드_여부: "o",
  },
  {
    활동명: "2",
    활동기간: "123~123",
    인원: "3",
    장소: "어딘가",
    업로드_여부: "o",
  },
  {
    활동명: "3",
    활동기간: "123~123",
    인원: "3",
    장소: "아주대",
    업로드_여부: "x",
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

const buttonSytle = {
  backgroundColor: "#1890FF",
  color: "white",
  borderRadius: "5px",
  height: "2.5rem",
  width: "8rem",
  fontWeight: "bold",
};
