import React from "react";
import styled from "styled-components";
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

const OptionForm = (props) => {
  return (
    <FormContainer>
    <FormElement>
      <div>활동명 :</div>
      <StyledInput
        name="topic"
        onChange={props.onChange}
        placeholder="활동명을 입력해주세요"
      ></StyledInput>
    </FormElement>
    <FormElement>
      <div>활동기간 :</div>
      <StyledDateInput
        name="startdate"
        onChange={props.onChange}
        data-placeholder="Start Date"
        type="date"
      />
      ~
      <StyledDateInput
        name="enddate"
        onChange={props.onChange}
        data-placeholder="End Date"
        type="date"
      />
    </FormElement>
    <FormElement>
      <div>인원 :</div>
      <StyledInput
        name="participants"
        onChange={props.onChange}
        placeholder="인원을 입력해주세요"
      ></StyledInput>
    </FormElement>
    <FormElement>
      <div>장소 :</div>
      <StyledInput
        name="place"
        onChange={props.onChange}
        placeholder="장소를 입력해주세요"
      ></StyledInput>
    </FormElement>
  </FormContainer>
  );
};

export default OptionForm;
