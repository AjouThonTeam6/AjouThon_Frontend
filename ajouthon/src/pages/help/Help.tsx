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

const CSVForm = styled(CSVLink)`
  padding: 20px;
  border-radius: 40px;
  background-color: #69f479;
`;

const HelpContainer = styled.div`
  margin: 50px 20px;
`;

const Help = () => {
  return (
    <HelpContainer>
      <CSVForm data={data} headers={headers} filename={"CSV_양식"}>
        양식 다운로드
      </CSVForm>
    </HelpContainer>
  );
};

export default Help;
