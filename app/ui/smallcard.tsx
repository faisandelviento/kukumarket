'use client' ;
import styled from 'styled-components';
import { StyledImage, RelativeCont } from './generalComponents';


// Estilo del texto que estará encima de la imagen
const TextContainer = styled.div`
text-align: center;
    position: absolute;
    color: black; 
    z-index: 1;
    padding: 10px;
    top: 0%;
    left: 50%;  /* Colocar el punto de referencia en el centro horizontal */
    transform: translateX(-50%);
`;



// Componente SmallCard
export default function SmallCard() {
    return (
        <RelativeCont>
            <StyledImage
                src="/ejemplo1.png"
                alt="hoa"
                layout="responsive"
                width={300}
                height={200}
            />
            <TextContainer>
                <h2>TITULO</h2>
                <p>Texto</p>
            </TextContainer>
        </RelativeCont>
    );
}
