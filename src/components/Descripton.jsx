import luffy from "../assets/sombreroPaja.jpg"
import "../style/Description.css"

const Description = () =>{
    return(
        <>
        <img src={luffy} className="sombrero" alt="sombrero"/>
        <div className="nombre">
            <h1>Daniela Janneth Tapia Sandoval</h1>
        </div>
        <h3>Descripcion</h3>
        <div className="contenido">     
            <p>Holas jeje</p>       
            <p>Soy estudiante de ultimo año de la Universidad Mayor de San Simon.</p>
            <p>Actualmente trabajo en mi proyecto de grado, para salir de la universidad.</p>
            
        </div>  
        </>        
    );
}

export default Description;