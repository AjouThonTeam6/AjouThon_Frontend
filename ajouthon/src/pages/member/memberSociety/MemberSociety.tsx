import React from "react";
import styled from "styled-components";
import InfoBox from "../../../components/infobox/InfoBox";

const InfoBoxContainer=styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
`

const MemberSociety = () => {
  return (
    <div>
      <InfoBoxContainer>
        <InfoBox title='전체 구성원' value='?명'></InfoBox>
        <InfoBox title='입부 대기중' value='?명'></InfoBox>
      </InfoBoxContainer>
    </div>
  );
};

export default MemberSociety;
