const configBasicImgCatalogo =
  "w-40 h-40 border flex flex-col justify-center items-center";

export default function EspacioImgCatalogo({
  className = "",
  src = "",
  children,
}) {
  return (
    <div className={`${className} ${configBasicImgCatalogo}`}>
      <img className={`${src}`}></img>
      {children}
    </div>
  );
}
// {
//   /* <div className="w-64 h-64 bg-gray-200 flex flex-col justify-center items-center">
//   <img
//   className="w-full h-auto object-contain"
//   src="ruta-a-la-imagen.jpg"
//   alt="Descripción de la imagen"
// />
// <p className="text-center mt-4">Texto descriptivo del contenido</p>
// </div> */
// }
