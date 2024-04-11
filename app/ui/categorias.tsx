'use client';
import Image from "next/image";
import style from "@/app/ui/categorias.module.css"

interface CategoriasProps {
    categorias: string[]; // Definimos que prop es un array de strings
  }

function CategoriaItem(props:{nombre:string}){
    return(
        <div className={style.categoria}>
            <Image
                src={`/iconos/${props.nombre}.svg`}
                width={60}
                height={60}
                alt={`imagen ${props.nombre}`}            
                />
            <p className={style.nombreCategoria}>{props.nombre}</p>
        </div>
    )
}

export function Categorias(props: CategoriasProps){
    const { categorias } = props;
    return (
        <>
            <div className={style.titulo}>
                <h2>Categorias</h2>
            </div>
            <div className={style.categorias}>
                {categorias.map((categoria, index) =>(
                <CategoriaItem key={`${categoria}-${index}`} nombre={categoria} />
            ))}
            </div>
        </>
    )
}