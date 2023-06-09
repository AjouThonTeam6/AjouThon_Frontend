// Search.jsx

import React, { useState } from "react";
import styled from "styled-components";
import Papa from "papaparse";
import { useRecoilState } from "recoil";
import { infoAtom } from "../../atoms/infoAtom";

const allowedExtensions = ["csv"];

function Search({ onSubmit }: any) {
  const [data, setData] = useRecoilState(infoAtom);

  const [error, setError] = useState("");

  const [file, setFile] = useState<any>("");

  const handleFileChange = (e: any) => {
    setError("");
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFile(inputFile);
    }
  };

  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(
        target.result as any,
        {
          header: true,
        } as any
      );
      const parsedData = (csv as any).data;
      // const columns = Object.keys(parsedData[0]);
      const columns = parsedData;
      setData(columns);
    };
    reader.readAsText(file, "CP949");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  console.log(data);

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="filter" />

      <Button>Search</Button>
      <FileLabel htmlFor="file">
        <FileContainer>File Upload</FileContainer>
      </FileLabel>
      <FileInput
        onChange={handleFileChange}
        type="file"
        name="file"
        id="file"
        accept=".csv"
      />
      <Button onClick={handleParse}>Parse</Button>
    </Form>
  );
}
const FileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 38px;
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
const FileLabel = styled.label``;
const FileInput = styled.input``;
const Form = styled.form`
  display: flex;
  width: 200px;
  position: relative;
  left: 150px;
  top: 30px;
`;
const Button = styled.button`
  width: 58px;
  height: 38px;
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
  height: 38px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
`;

export default Search;
