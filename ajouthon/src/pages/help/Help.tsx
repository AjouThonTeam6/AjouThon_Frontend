import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
import styled from "styled-components";

const headers = [
  { label: "직책", key: "role" },
  { label: "학번", key: "studentNum" },
  { label: "성명", key: "name" },
  { label: "학부", key: "department" },
  { label: "전공", key: "major" },
  { label: "핸드폰번호", key: "phoneNum" },
  { label: "이메일", key: "email" },
];

const data = [
  {
    role: "",
    student: "",
    name: "",
    department: "",
    major: "",
    phoneNum: "",
    email: "",
  },
];

const HelpOuterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1440px;
  padding: 30px;
  margin: 50px;
  margin: 0 auto;
`;

const HelpTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const HelpInnerContainer = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding: 30px;
  border-radius: 40px;
  background-color: #c1e1ff;
  width: 650px;
  height: 500px;
  margin: 0 auto;
`;

const CSVForm = styled(CSVLink)`
  padding: 20px;
  border-radius: 40px;
  width: 150px;
  color: white;
  background-color: #1890ff;
  text-align: center;
  font-weight: bolder;
  margin: 0 auto;
`;

const HelpCommandContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HelpCommand = styled.div`
  margin: 20px;
  font-weight: bold;
  line-height: 25px;
`;
const Help = () => {
  return (
    <HelpOuterContainer>
      <HelpInnerContainer>
        <HelpTitle>부원 자동 업로드 하는 법</HelpTitle>
        <CSVForm data={data} headers={headers} filename={"CSV_양식"}>
          양식 다운로드
        </CSVForm>
        <HelpCommandContainer>
          <HelpCommand>1. 위 양식 파일을 다운로드 한다.</HelpCommand>
          <HelpCommand>2. 파일의 라벨에 따라 정보를 기입한다.</HelpCommand>
          <HelpCommand>
            {" "}
            (직책을 표기할 시 회장은 1, 부회장은 2, 총무는 3, 회원은 4로
            기입한다.)
          </HelpCommand>
          <HelpCommand>
            3. 모든 정보를 기입한 csv파일을 부원 관리 페이지에 업로드 한다.
          </HelpCommand>
          <HelpCommand>4. '학사서비스 등록' 버튼을 클릭한다.</HelpCommand>
        </HelpCommandContainer>
      </HelpInnerContainer>

      <HelpInnerContainer>
        <HelpTitle>동아리 활동 관리 업로드 하는 법</HelpTitle>
        <HelpCommandContainer>
          <HelpCommand>
            {" "}
            1. 활동관리 페이지에서 활동내역추가 버튼을 클릭한다.{" "}
          </HelpCommand>
          <HelpCommand>
            {" "}
            2. 정보를 기입하고 활동보고서 자동작성을 클릭한다.{" "}
          </HelpCommand>
          <HelpCommand>
            {" "}
            3. AI가 작성한 보고서를 확인하고 저장 또는 저장 후 업로드 한다.{" "}
          </HelpCommand>
          <HelpCommand>
            4. 임시저장 후 업로드 할 시에는 원하는 활동을 선택하고<br></br>
            '학사서비스 등록' 버튼을 클릭한다.
          </HelpCommand>
        </HelpCommandContainer>
      </HelpInnerContainer>
    </HelpOuterContainer>
  );
};

export default Help;
