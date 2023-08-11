import React, { useState } from "react";
import styled from "styled-components";
import WriteDetailForm from "./DetailForm";
import OptionForm from "./OptionForm";
const Container = styled.div`
  width: 60rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StlyedButton = styled.button`
  background: #1890ff;
  border: 1px solid #1890ff;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  color: #ffffff;
  margin: 0.5rem 0 1.5rem 0.5rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  padding: 0.3rem 1rem;
`;
const StyledForm = styled.form.attrs({ onsubmit: false })`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const FormbuttonContainer = styled.div`
  display: flex;
`;

const ActivityWriteForm = () => {
  const [Inputs, setInputs] = useState({
    topic: "",
    startdate: "",
    enddate: "",
    participants: 0,
    place: "",
    content: "",
  });

  const onChange = (e) => {
    setInputs({
      ...Inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <StyledForm
        action="/"
        method="post"
        name="activity-form"
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault(); // 제출 폼 백엔드 연동 필요
          console.log(Inputs);
          await fetch("http://localhost:8000/activity", {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Inputs),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setInputs({ ...Inputs, content: data.message });
              console.log(Inputs);
            });
        }}
      >
        <OptionForm onChange={onChange}></OptionForm>
        <StlyedButton>활동보고서 자동작성</StlyedButton>
        <WriteDetailForm
          value={Inputs.content}
          onChange={onChange}
        ></WriteDetailForm>
        <FormbuttonContainer>
          {/* <StlyedButton>저장</StlyedButton> */}
          <StlyedButton
            onClick={async () => {
              await fetch("http://localhost:8000/activity/upload", {
                method: "POST",

                body: JSON.stringify({
                  topic: Inputs.topic,
                  content: Inputs.content,
                }),
              });
            }}
          >
            학사서비스 등록
          </StlyedButton>
        </FormbuttonContainer>
      </StyledForm>
    </Container>
  );
};

export default ActivityWriteForm;
