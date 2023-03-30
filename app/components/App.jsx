import BarraNav from "./BarraNav";
import BarraLinks from "./BarraLinks";
import BarraImg from "./BarraImg";
import Button from "./Button";
import BarraSeccion3 from "./BarraSeccion3";
import EspacioImgCatalogo from "./EspacioImgCatalogo";
import Input from "./Input";


import {BsFillBagFill} from "react-icons/bs"
import {AiOutlineGift} from "react-icons/AI"

export default function App() {
  return (    

    <>    
    <BarraNav></BarraNav>
    <BarraLinks></BarraLinks>
    <BarraImg className="mb-3"></BarraImg>
    <div className="flex justify-center gap-16">
      <Button className="flex items-center gap-4" >      
        <span>
          SERVICIO A DOMICILIO
        </span>
        <BsFillBagFill></BsFillBagFill>
      </Button>

      <Button className="flex items-center gap-4">
        <span>
          NEWSLETTER
        </span>  
        <AiOutlineGift></AiOutlineGift>
      </Button>
    </div>
    <BarraSeccion3 className="mt-4">Paste - Repostería - Pay - Gelatina</BarraSeccion3>    
    <div className="flex  justify-center pt-3 pr-3 pl-3 pb-3 gap-32">
      <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>    
      <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
      <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
      <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
      <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
    </div>
    <BarraSeccion3 className="mt-4">DESTACADOS DE LA SEMANA</BarraSeccion3>    
      <div className="flex  justify-center pt-3 pr-3 pl-3 pb-3 gap-32">
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>    
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
      </div>      
    <BarraSeccion3 className="mt-4">PASTELES PARA EVENTOS</BarraSeccion3>    
      <div className="flex  justify-center pt-3 pr-3 pl-3 pb-3 gap-32">
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>    
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700" >Imagen</EspacioImgCatalogo>
      </div>
    <BarraSeccion3 className="mt-4">CONTACTO</BarraSeccion3>    
    <div className="pl-40 pr-40">
      <form className="flex flex-col justify-center">      
        <Input className="mb-3 py-5 px-3 w-30 h-10" placeholder="Nombre"></Input>
        <Input className="mb-3 py-5 px-3 w-30 h-10" placeholder="Apellido"></Input>
        <Input className="mb-3 py-5 px-3 w-30 h-10" placeholder="Número de Teléfono"></Input>
        <Button className="mb-3 self-center justify-self-start">Enviar</Button>
      </form>      
    </div>
    
    <footer className="flex flex-col justify-center items-center bg-red-400 h-40 text-gray-600 text-sm">
      <p>PASTEL CON CAUSA - SUCURSALES PASTELERIA MARRY CAKE- DECLARACIÓN NUTRIMENTAL - FACTURACIÓN MARRY CAKE - </p>
      <p>AVISO DE PRIVACIDAD - POLÍTICAS DE COOKIES - FAQ - CONTACTO</p>
    </footer>
            
    </>
    

  );
}


