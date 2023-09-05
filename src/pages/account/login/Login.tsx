import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { accountAtom } from "../../../atoms/accountAtom";
import axios from "axios";
import {
  studentAcademyListAtom,
  studentCircleListAtom,
} from "../../../atoms/memberAtom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [academyList, setAcademyList] = useRecoilState(studentAcademyListAtom);
  const [circleList, setCircleList] = useRecoilState(studentCircleListAtom);
  const navigate = useNavigate();

  const loginPost = async (id: string, password: string, studentId: string) => {
    const response = await axios.post(
      "/login",
      {
        id: id,
        password: password,
        studentNumber: studentId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    sessionStorage.setItem("token", response.data.accessToken);
    setAcademyList(response.data.studentAcademyInfo);
    setCircleList(response.data.studentCircleInfo);

    navigate("/member-club");
  };

  const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id, password, studentId);
    loginPost(id, password, studentId);
  };

  return (
    <LoginContainer>
      <TextLogo src={require("../../../imgs/textLogo.png")} />
      <LoginForm onSubmit={onSumbit}>
        <InputBox>
          <InputTitle> 학사서비스 ID</InputTitle>
          <Input
            type="text"
            placeholder=" ID를 입력하세요"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputTitle> 학사서비스 PW</InputTitle>
          <Input
            type="password"
            placeholder=" PW를 입력하세요"
            id="pw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputTitle> 학번</InputTitle>
          <Input
            type="text"
            placeholder=" 학번을 입력하세요"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </InputBox>
        <LoginButton>로그인</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const TextLogo = styled.img``;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 900px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  background-color: #1890ff;
  color: white;
  border-radius: 5px;
  height: 2.5rem;
  width: 5rem;
  font-weight: bold;
`;

const InputBox = styled.div``;

const InputTitle = styled.div``;

const Input = styled.input`
  color: black;
  border: 1px solid rgba(217, 217, 217, 1);
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 5px;
  width: 50rem;
  height: 2.5rem;
`;
// "autoLogin=Y&SAMLRequest=3A65828FF982B8FF0105D06ED6791B72782655586BFE69341E49E861FDB70B1C0652AD672B8419D0E855F11C1DE485DB0B778FB784B60D31BB212970AF0786B8D693543DB7790BB8C77C6D3EA1D3CDCAF71E19C00251B0540F5F0EB66D41F13E4A7E5666097E5183FFADE84A1898659AB7BC874C63594E5C75DCF47B32E92A6744F31B6536C4DDD532C84635A7405F6F93DB005B8BF320257ECE49AC8CCA34C463BDD8E66990A97C95898931310C6841037538D0607333C41F01FB8880223EE637ED54AD713CEBB163E302386CF48EE151200953A7AA1C5676E5A7ED6A1937F0B0A873E124D1930B812E6649FE9DD9E9FF8C1BFE78EE9B751DE0FFE37D95905D14A92297E301F5BE299E3B019A74747020F0D5C57837A80CA877130F656F786E&returnPage=%2Fjsp%2Fsso%2Fip%2Flogin_form.jsp&userAgent=PC%7CMACINTEL%7CCHROME%7C114&relogin=N"
