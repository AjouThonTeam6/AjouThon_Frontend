import React from "react";
import { Outlet } from "react-router-dom";
import ClubTable from "../../../components/ClubTale";
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

const ActivityClub = () => {
  return (
    <div>
      {/* <h1>This is ActivityClub page !</h1> */}
      <ClubTable
        columnData={studentClubColumn}
        datas={dummyData}
        needCheckBox={true}
      ></ClubTable>
      <Outlet></Outlet>
    </div>
  );
};

export default ActivityClub;
