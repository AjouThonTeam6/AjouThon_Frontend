import React from 'react';
import styled from "styled-components";

const Box=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 280px;
    height: 180px;
    border: 1px solid rgba(217, 217, 217, 1);
    border-radius: 3px;
`
const Title=styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top:15px;
`
const Value=styled.div`
    font-size: 16px;
    margin-bottom:15px;
`

interface Props{
    title: string;
    value: string;
}

const InfoBox=({title, value}: Props)=>{
    return (
        <Box>
            <Title>{title}</Title>
            <Value>{value}</Value>
        </Box>
    );
};
export default InfoBox;