import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 900px;
`

const inputBoxStyle={
  color: 'black',
  border: '1px solid rgba(217, 217, 217, 1)',
  marginTop: '10px',
  marginBottom: '20px',
  paddingLeft: '5px',
  width: '50rem',
  height: '2.5rem'
}

const buttonSytle={
  backgroundColor:'#1890FF',
  color: 'white',
  borderRadius: '5px',
  height: '2.5rem',
  width: '5rem',
  fontWeight: 'bold'
}

const TextLogo = styled.img``;


const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginContainer>
        <TextLogo src={require("../../../imgs/textLogo.png")}/>
        <div>
        
          <div> 학사서비스 ID</div>
          <input 
            style={inputBoxStyle}
            type="text" 
            placeholder=" ID를 입력하세요" 
            id="id" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
          />
        </div>
        <div>
          <div> 학사서비스 PW</div>
          <input 
            style={inputBoxStyle}
            type="password" 
            placeholder=" PW를 입력하세요" 
            id='pw' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> 
        <div>
          <button style={buttonSytle}>로그인</button>
        </div> 
      </LoginContainer>
  );
};

export default Login;
