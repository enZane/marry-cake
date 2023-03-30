
export default function BarraNav() {
    return (
        <nav className="flex items-center justify-center bg-red-400 h-12" >          
          <p className="text-white p-20 ">
            Productos
          </p>           
          <input className="w-96 h-7 bg-gray-100 bg-opacity-50 rounded-2xl text-lg pl-4 py-1 border-none" placeholder="Buscar" >            
          </input>         
        </nav>        
    );
  }