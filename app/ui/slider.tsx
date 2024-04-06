'use client' 
import Image from "next/image";
import styled from "styled-components";
import { StyledImage, RelativeCont } from "./generalComponents";

// Estilo del texto que estará encima de la imagen
const TextContainer = styled.div`
    position: absolute;
    color: black; 
    top: 50%;
    left: 20px;
    transform: translate(0,-55%);
    z-index: 1;

`;

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
            <h1>TITULO</h1>
            <p>texto texto texto</p>
            <button>CLick Me</button>
        </TextContainer>
        <div className="contBotones">
            <span className="dot"/>
            <span className="dot"/>
            <span className="dot"/>
        </div>

    </RelativeCont>);
}