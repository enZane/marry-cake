import { Link } from "@remix-run/react";

export default function BarraLinks() {
  return (
    <nav className="flex h-28 items-center justify-center bg-white ">
      <img src="/logoBlanco.png" alt="fdsa" className="w-24" />
      <Link to="/Pasteles" className="p-5 text-gray-500">Pasteles a Domicilio</Link>
      <p className="p-5 text-gray-500">Productos</p>
      <p className="p-5 text-gray-500">Pasteles para Eventos</p>
      <div className="flex divide-x-2 divide-gray-700">
        <p className="basis-1 pr-4">Contacto</p>
        <p className="pl-4">Carrito</p>
      </div>
    </nav>
  );
}
