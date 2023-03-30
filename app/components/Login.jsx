import Input from "./Input";
import LogoBlanco from "./img/logoBlanco.png"
import Button from "./Button";

export default function Login(){
    return(
        <>
        <div className="h-screen flex items-center justify-center bg-red-400">
            {/* Voy a dividir con 2 <div> la pantalla*/}
            {/* Lado Izquierdo */}
            <div className="flex flex-col items-center justify-center m-10 bg-white p-20 rounded-2xl">
                <img src={LogoBlanco} className="w-48"/>
                <h1 className="text-2xl m-2">Login</h1>
                <label className="text-lg m-5">User Name:</label>
                <Input className="mt-1 w-64"></Input>
                <label className="text-lg mt-1 ">Password:</label>
                <Input className="mt-1 w-64"></Input>
                <div className="flex justify-center gap-16 mt-3 mb-3">
                    <Button className="h-10 w-20 rounded-3xl p-0">Login</Button>
                    <Button className="h-10 w-20 rounded-3xl p-0">Sig in</Button>
                </div> 
                <a>Registrarse</a>
            </div>  
                
        </div>
        
        
        </>
    );    
}