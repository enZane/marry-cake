import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { prisma } from "~/db.server";
import BarraNav from "~/components/BarraNav";
import BarraLinks from "~/components/BarraLinks";
import BarraImg from "~/components/BarraImg";
import Button from "~/components/Button";
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import BarraSeccion3 from "~/components/BarraSeccion3";
import EspacioImgCatalogo from "~/components/EspacioImgCatalogo";
import Input from "~/components/Input";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export async function loader() {
  const categories = await prisma.category.findMany({});

  return { categories };
}

export default function Index() {
  const { categories } = useLoaderData<typeof loader>();
  return (
    <>
      <BarraNav />
      <BarraLinks />
      <BarraImg />
      <div className="flex justify-center gap-16">
        <Button className="flex items-center gap-4">
          <span>SERVICIO A DOMICILIO</span>
          <BsFillBagFill></BsFillBagFill>
        </Button>

        <Button className="flex items-center gap-4">
          <span>NEWSLETTER</span>
          <AiOutlineGift></AiOutlineGift>
        </Button>
      </div>
      <BarraSeccion3 className="mt-4">
        Paste - Repostería - Pay - Gelatina
      </BarraSeccion3>
      <div className="flex justify-center gap-32 pb-3 pl-3 pr-3 pt-3">
        {categories.map((category) => (
          <EspacioImgCatalogo key={category.id} className="border-red-700">
            {category.name}
          </EspacioImgCatalogo>
        ))}
      </div>
      <BarraSeccion3 className="mt-4">DESTACADOS DE LA SEMANA</BarraSeccion3>
      <div className="flex  justify-center gap-32 pb-3 pl-3 pr-3 pt-3">
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
      </div>
      <BarraSeccion3 className="mt-4">PASTELES PARA EVENTOS</BarraSeccion3>
      <div className="flex  justify-center gap-32 pb-3 pl-3 pr-3 pt-3">
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
        <EspacioImgCatalogo className="border-red-700">
          Imagen
        </EspacioImgCatalogo>
      </div>
      <BarraSeccion3 className="mt-4">CONTACTO</BarraSeccion3>
      <div className="pl-40 pr-40">
        <form className="flex flex-col justify-center">
          <Input
            className="w-30 mb-3 h-10 px-3 py-5"
            placeholder="Nombre"
          ></Input>
          <Input
            className="w-30 mb-3 h-10 px-3 py-5"
            placeholder="Apellido"
          ></Input>
          <Input
            className="w-30 mb-3 h-10 px-3 py-5"
            placeholder="Número de Teléfono"
          ></Input>
          <Button className="mb-3 self-center justify-self-start">
            Enviar
          </Button>
        </form>
      </div>

      <footer className="flex h-40 flex-col items-center justify-center bg-red-400 text-sm text-gray-600">
        <p>
          PASTEL CON CAUSA - SUCURSALES PASTELERIA MARRY CAKE- DECLARACIÓN
          NUTRIMENTAL - FACTURACIÓN MARRY CAKE -{" "}
        </p>
        <p>AVISO DE PRIVACIDAD - POLÍTICAS DE COOKIES - FAQ - CONTACTO</p>
      </footer>
    </>
  );
}
