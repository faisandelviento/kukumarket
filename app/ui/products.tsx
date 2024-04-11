'use client';
import Image from "next/image";
import styled from "styled-components";

//STYLES GENERAL

//padding de arriba y abajo pagina

const ContainerProductos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 3%;
`
const Cabecera = styled.div`
padding: 60px 0px 30px 0;
display: flex;
flex-direction: row;
align-items: center;
`
//TO DO: estilar boton
const BottonMas = styled.button`
margin-left: auto;
background-color: transparent;
border: solid 1px #a5dfdf;
border-radius: 4px;
height: 100%;
padding: 10px 30px;

&:hover{
    background-color: #a5dfdf;
}
`
const ContainerItem = styled.div`

`
const ResponsiveImage = styled(Image)`
border-radius:4px;
`

function Producto (){
    return (
        <ContainerItem>
            <ResponsiveImage 
            src="/productos/producto1.png"
            width={250}
            height={200}
            alt=""/>
            <h5>Nombre del Producto</h5>
            <p>precio</p>
        </ContainerItem>
    )
}

export function SellingProducts(){
    return(
        <>
            <Cabecera>
                <h2>Best Selling Products</h2>
                <BottonMas>Ver Todo</BottonMas>
            </Cabecera>
            <ContainerProductos>
                <Producto/>
                <Producto/>
                <Producto/>
                <Producto/>
            </ContainerProductos>
        </>
    )
}