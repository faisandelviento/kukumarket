'use client'
import Link from 'next/link';
import Image from 'next/image';
import styled , { css }from 'styled-components';
import styles from '@/app/ui/navbar.module.css'
import { theme } from './theme';

//TODO: hacer funcionar el boton de los link con clsx 
// .menu-toggle {
//     display: block;
//     }
// mas facil estilar con css que con styled components...


//Styled-componentes
const NavBarSpace = styled.div`
display: flex;
justify-content: center;
`

const Nav = styled.div`
width: 1250px;
background-color: ${theme.claro.background};
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);
border-radius: 0px 0px 15px 15px; 
display: flex;
padding: 5px 25px;
align-items: center;

@media screen and (max-width: 1260px) {
    padding: 5px 20px;
    width: 100vw;
    border-radius: 0px;
  }
`
const LinkNavbar = styled(Link)<{ $left?: boolean; }>`
color: ${theme.claro.text};
text-decoration: none;
margin-right: 15px;

&:hover {
    color: ${theme.claro.accent};
  }

  ${props => props.$left && css`
    margin-left: 15px;
  `}
`

const MenuButton = styled.button`
display: none;
font-size:large;
background-color: transparent;
color: ${theme.claro.text};
border: 0px solid transparent ;
border-radius: 50%;
&:hover{
    color: ${theme.claro.accent};
    }

@media screen and (max-width:1000px){
    display: block;
}
 `

export default function NavBar() {
    const toggleNavbar = () => {

      };

    return(
        <NavBarSpace>
            <Nav>
            <div className={styles.links}>
                <LinkNavbar $left href="/">Inicio</LinkNavbar>
                <LinkNavbar $left href="/Productos">Productos</LinkNavbar>
                <LinkNavbar $left href="/Servicios">Servicios</LinkNavbar>
                <LinkNavbar $left href="/Contacto">Contacto</LinkNavbar>
            </div>
            <div className={styles.logo}>
                <LinkNavbar href="/">
                    <Image
                        src="/logo.png"
                        width={100}
                        height={30}
                        alt="Picture of the author"
                    /> 
                </LinkNavbar>
            </div>
            <div className={styles.actions}>
                {/* TODO??: add teh svg as imported files*/}
                <LinkNavbar  href="/Cuenta">
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="#292D32"></path> <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="#292D32"></path> </g></svg>            
                </LinkNavbar>
                <LinkNavbar  href="/Carrito">
                    <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="25px" height="24px" viewBox="0 0 902.86 902.86"><g></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
                </LinkNavbar>
                {/* ESTE BOTON SE PUEDE HACER FUNCIONAR CON CLSX O TERNARIOS DE CSS?? */}
                <MenuButton onClick={toggleNavbar}>&#9776;</MenuButton>
            </div>
            </Nav>
        </NavBarSpace>
    )
}

