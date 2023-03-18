import React from "react";
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  padding-top: 1rem;
`;

const StyledInput = styled.input.attrs({ required: true })`
  width: 25rem;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;
const StyledDateInput = styled.input.attrs({ required: true })`
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  width: 11rem;
`;
const ActivityWriteForm = () => {
  return (
    <Container>
      <StyledForm
        action="/"
        method="post"
        name="activity-form"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault(); // 제출 폼 백엔드 연동 필요
        }}
      >
        <OptionForm></OptionForm>
        <StlyedButton>활동보고서 자동작성</StlyedButton>
        <WriteDetailForm></WriteDetailForm>
        <FormbuttonContainer>
          <StlyedButton>저장</StlyedButton>
          <StlyedButton>저장 후 업로드</StlyedButton>
        </FormbuttonContainer>
      </StyledForm>
    </Container>
  );
};

export default ActivityWriteForm;
