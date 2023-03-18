// Search.jsx

import React from "react";
import styled from "styled-components";

function Search({ onSubmit }: any) {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="filter" />
      <Button>Search</Button>
    </Form>
  );
}
const Form = styled.form`
  display: flex;
  width: 200px;
  position: relative;
  left: 590px;
`;
const Button = styled.button`
  width: 58px;
  height: 32px;
  background: #1890ff;
  border: 1px solid #1890ff;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  margin-left: 10px;
`;
const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  width: 400px;
  height: 32px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
`;
export default Search;
