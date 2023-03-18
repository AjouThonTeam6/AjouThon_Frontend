import React from 'react';
import styled from 'styled-components';

const DetailInput = styled.textarea.attrs({ required: true })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  width: 30rem;
  height: 10rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  white-space: normal;
  margin-left: 530px;
`;
const WriteDetailForm = (props) => {
  return (
    <div>
      <DetailInput
        value={props.value}
        name="content"
        onChange={props.onChange}
      ></DetailInput>
    </div>
  );
};

export default WriteDetailForm;
