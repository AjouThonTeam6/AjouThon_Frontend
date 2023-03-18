import React from "react";
import styled from "styled-components";

const DetailInput = styled.input.attrs({ required: true })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  width: 30rem;
  height: 10rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;
const WriteDetailForm = () => {
  return (
    <div>
      <DetailInput></DetailInput>
    </div>
  );
};

export default WriteDetailForm;
