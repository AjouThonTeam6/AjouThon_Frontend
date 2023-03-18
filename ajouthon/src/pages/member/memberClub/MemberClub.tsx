import React from "react";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../../atoms/accountAtom";
import Header from "../../../components/header/Header";
import InfoBox from "../../../components/infobox/InfoBox";
import { IAccount } from "../../../interfaces/loginInterface";
import styled from "styled-components";

const InfoBoxContainer=styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
`

const MemberClub = () => {
  const { id } = useRecoilValue<IAccount>(accountAtom);
  return (
    <div>
      <InfoBoxContainer>
        <InfoBox title='전체 구성원' value='?명'></InfoBox>
        <InfoBox title='입부 대기중' value='?명'></InfoBox>
      </InfoBoxContainer>
      <div>
        검색창
      </div>
      <div>
        표
      </div>
    </div>
  );
};

export default MemberClub;
