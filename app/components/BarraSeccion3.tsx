export default function BarraSeccion3({className, label="",children}) {
    return (
        
        <p className={`flex items-center justify-center text-gray-500 text-2xl ${className}`}>
            {children}
        </p>
    );
}