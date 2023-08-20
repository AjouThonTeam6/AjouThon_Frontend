import React from "react";
import { Outlet } from "react-router-dom";
import InfoBox from "../../../components/infobox/InfoBox";
import styled from "styled-components";
import ClubTable from "../../../components/ClubTale";
import { studentClubColumn } from "../../../model/tableModel";
import { useState } from "react";
import { json } from "stream/consumers";

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = handleFileRead;
      reader.readAsText(file);
    }
  };

  const handleFileRead = (event: ProgressEvent<FileReader>) => {
    if (event.target && event.target.result) {
      const content = event.target.result as string;
      const jsonData = parseCSVToJSON(content);
      console.log(parseCSVToJSONstudentID(content));
      console.log(jsonData);
    }
  };

  const parseCSVToJSON = (csvContent:string) => {
    const lines = csvContent.split('\n');
    const headers = lines[0].split(',');

    const jsonData = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const entry = {};

      for (let j = 0; j < headers.length; j++) {
        const header = headers[j].trim().replace(/"/g, '');
        const data = values[j].trim().replace(/"/g, '');
        entry[header] = data;
      }
      jsonData.push(entry);
    }

    return jsonData;
  };

  const parseCSVToJSONstudentID = (csvContent:string) => {
    const lines = csvContent.split('\n');
    const headers = lines[0].split(',').map((item)=>item.trim().replace(/"/g, ''));
    const studentIDarr:string[]=[];
    const jsonData = {}

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map((item)=>item.trim().replace(/"/g, ''));
      // const entry = {};

      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        const data = values[j];
        // entry[header] = data;
        if (header==="학번"){studentIDarr.push(data)}
      }
    }
    jsonData["학번"]=studentIDarr;
    return jsonData;
  };

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
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </OuterContainer>
  );
};

export default MemberClub;
