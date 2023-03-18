import React from "react";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../../atoms/accountAtom";
import Header from "../../../components/header/Header";
import InfoBox from "../../../components/infobox/InfoBox";
import { IAccount } from "../../../interfaces/loginInterface";

const MemberClub = () => {
  const { id } = useRecoilValue<IAccount>(accountAtom);
  return (
    <div>
      <div>
        <InfoBox title={`${id}님`} value={"안녕하세요 :)"}></InfoBox>
        {/* <InfoBox title={} value={"안녕하세요 :)"}></InfoBox>
        <InfoBox title={`${id}님`} value={"안녕하세요 :)"}></InfoBox> */}
      </div>
    </div>
  );
};

export default MemberClub;
