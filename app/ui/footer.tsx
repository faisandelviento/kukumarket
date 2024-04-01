'use client' 
import styles from "../page.module.css";
import styled from 'styled-components'

const FooterSpace = styled.div`
background-color: lightcoral;
color: #fff;
padding: 70px;
`
const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
max-width: 1200px;
margin: 0 auto;`

const FooterSection = styled.div`
margin-right: 20px;
flex: 1;
h3 {
    font-weight: bold;
    font-size: 18px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
  }

  ul li a:hover {
    color: darkcyan;
    text-decoration: none;
    cursor: pointer;
  }

  &.logo img {
    width: px;
  }
`
const FooterDivider = styled.div`
  border-left: 1px solid #fff;
  margin: 0 20px;
`;

const SocialIcons = styled.div`
  a {
    margin: 0px 10px 0px 0px;
    text-decoration: none;
  }

  svg {
    fill: #333; 
  }

  #whatsappIcon:hover svg {
    fill: #26b050; 
  }

  #facebookIcon:hover svg {
    fill: #007bff;
  }
`;

export default function Footer() {
  return (
    <FooterSpace>
    <FooterContainer>
      <FooterSection>
        {/* <img src=".." alt="Logo de Kukumarket"> */}
        <h3>LOGO</h3>
        <p>C/ Sant Pau 53, <br/>Barcelona 08001</p>
        <p>rexmon.tech@gmail.com</p>
        <p>632360550</p>
      </FooterSection>
      <FooterSection>
        <h3>CATEGORIAS</h3>
        <ul>
          <li><a href="#">Categoría 1</a></li>
          <li><a href="#">Categoría 2</a></li>
          <li><a href="#">Categoría 3</a></li>
          <li><a href="#">Categoría 4</a></li>
        </ul>
      </FooterSection>
      <FooterSection>
        <h3>LINKS</h3>
        <ul>
          <li><a href="#">Enlace 1</a></li>
          <li><a href="#">Enlace 2</a></li>
          <li><a href="#">Enlace 3</a></li>
        </ul>
      </FooterSection>
      <FooterDivider>
    {/* Aquí se agrega la línea vertical */}
    </FooterDivider> 

      <FooterSection>
        <h3>HORARIO</h3>
        <p>Lunes - Sabado 10am - 9pm</p>
        <p>Domingos cerrados</p>
        <SocialIcons>
          <a id="whatsappIcon" href="https://wa.me/34632360550" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
            </svg>
          </a>
          <a id="facebookIcon" href="https://www.facebook.com/kuku.repairs" target="_blank"> 
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>  
          </a>
        </SocialIcons>
      </FooterSection>
    </FooterContainer>
    </FooterSpace>
  );
}
