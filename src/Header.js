import React, { useEffect } from 'react';
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 130px;
    margin-bottom: 20px;
    flex-direction: row;
    font-size: 60px;
    border: 2px solid #1253FA;
    background-color: white;
    align-items: center;
    justify-content: center;
    color: #1253FA;
`

const ImgContainer = styled.img`
    position: absolute;
    top: 5px;
    left: 5px

`

export function Header(){
    return <HeaderContainer>
           <ImgContainer src="https://www.mybites.io/wp-content/themes/bites/assets/img/svg/logo.svg"
           ></ImgContainer>
            JSON Path Evaluator
        </HeaderContainer>

}