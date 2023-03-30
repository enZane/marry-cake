import Button from "./Button";

const basicStyle = "pl-20 pb-10 pt-10 text-white"

const divStyles = {
    backgroundImage: `url(${'fondo.jpg'})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
  }

export default function BarraImg({className = ""}) {
    return(
        <>
        <div className={`${className} ${basicStyle}`} style={divStyles}>                        
            <p className="text-2xl">EL MEJOR SABOR ES AYUDAR</p>
            <p className="text-lg">Te queremos invitar a formar parte de esta deliciosa</p>
            <p className="text-lg">causa y juntos comprometernos en apoyar a la fundación</p>
            <p className="text-lg pb-5">Un Techito Más.</p>
            <Button className="p-1 rounded-full">Conoce Más</Button>
            {/* <div >
                <img src={Funda}/>
            </div> */}
        </div>
        
        
        </>        
    );
}