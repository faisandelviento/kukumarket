'use client';
import Image from "next/image";
import styled from "styled-components";

//STYLES GENERAL

//TODO: PARA HACERLO RESPONSIVE TAL VEZ GRID ES MAS ADEQUADO

const ContainerProductos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 3%;
max-width: 1000px;
`
const Cabecera = styled.div`
padding: 60px 0px 30px 0;
display: flex;
flex-direction: row;
align-items: center;
max-width: 1000px;
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
background-color: grey;
`
const ResponsiveImage = styled(Image)`
border-radius:4px;
`

interface ProductoProps {
    nombre: string;
    precio: number;
  }

function Producto (props: ProductoProps){
    const { nombre, precio  } = props;
    return (
        <div>
            <div>
                {/* ESTILAR PARA QUE SEA ABSOLUTE Y RELATIVE Y AÑADIR ICONO */}
                <ResponsiveImage 
                src="/productos/producto1.png"
                width={200}
                height={200}
                alt={`Imagen de ${nombre}`}/>
            </div>
            <h5>{nombre}</h5>
            <p>{precio} €</p>
        </div>
    )
}

//datos inventad
const productos = [
    { id: "LP product1", nombre: 'Producto 1', precio:30 },
    { id: "LP product2", nombre: 'Producto 2', precio:66.8},
    { id: "LP product3", nombre: 'Producto 3',precio:80 },
    { id: "LP product4", nombre: 'Producto 4', precio:30 }
  ];

export function SellingProducts(){
    
    return(
        <>
            <Cabecera>
                <h2>Best Selling Products</h2>
                <BottonMas>Ver Todo</BottonMas>
            </Cabecera>
            <ContainerProductos>
            {productos.map(producto => (
          <Producto 
          key={producto.id} 
          nombre={producto.nombre} 
          precio={producto.precio} />
        ))}
            </ContainerProductos>
        </>
    )
}