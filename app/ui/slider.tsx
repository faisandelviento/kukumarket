'use client' 
import Image from "next/image";
import styled from "styled-components";
import { StyledImage, RelativeCont } from "./generalComponents";

//TODO: hacer botones para los controles del slider
// Estilo del texto que estará encima de la imagen
const TextContainer = styled.div`
    position: absolute;
    color: black; 
    top: 40%;
    left: 5%;
    transform: translate(0,-55%);
    z-index: 1;
`;
const StyledButton = styled.button`
background-color: transparent;
border: 1px solid black;
border-radius: 32px;
padding: 8px 15px;
transition: background-color 0.4s ease, color 0.3s ease;

&:hover{
    background-color: black;
    color: white;
}
`

export default function Slider(){
    return(<RelativeCont>
        <StyledImage 
        src="/ejemplo2.png"
        width={400}
        height={300}
        layout="responsive"
        alt="reloj rojo"
        />
        <TextContainer>
            <h1>TITULO ITEM</h1>
            <p>texto texto texto texto</p>
            <StyledButton>Ver Mas</StyledButton>
        </TextContainer>
        <div className="contBotones">
            <span className="dot"/>
            <span className="dot"/>
            <span className="dot"/>
        </div>

    </RelativeCont>);
}