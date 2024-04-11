'use client';
import styled from "styled-components";
import Image from "next/image";

export const  ContainerGeneral = styled.div`
padding:20px 10vw;
`

export const StyledImage = styled(Image)`
width: 100%; 
height: auto;
border-radius:10px;
`;

export const HeaderImage = styled(Image)`
width: 100vw;
height: 100vh;
`
export const RelativeCont = styled.div`
    margin: 0px;
    position: relative;
    width: 100%;
`;