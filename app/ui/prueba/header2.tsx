'use client'
import styled from "styled-components";
import Image from "next/image";

const StyleImage = styled(Image)`
    width: 100%; 
    height: auto;
`

export default function Header2 (){
    return (
    <div>
        <StyleImage 
        src="/ejemplo2.png"
        width={400}
        height={300}
        layout="responsive"
        alt="reloj rojo"
        />

    </div>);
}