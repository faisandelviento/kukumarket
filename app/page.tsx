import Header from "./ui/header";
import { Categorias } from "./ui/categorias";
import { SellingProducts } from "./ui/products";
import { ContainerGeneral } from "./ui/generalComponents";
import InfoContainer from "./ui/infoCont";
export default function Home() {
  //TODO: hacer el header y las categorias 
  // TODO: cpmenzar landing page acabar el slide

  const categoriasList = ["PC", "Telefonos", "Tablets", "Accesorios", "Arreglos"];

  return (
    <main>
      <Header/> 
      <ContainerGeneral>
        <Categorias categorias={categoriasList} />
        <SellingProducts></SellingProducts>
      </ContainerGeneral>
      <InfoContainer/>
     </main>
  );
}
