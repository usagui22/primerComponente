import minecraf from "../assets/minecraf.jpg"
import pizza from "../assets/pizza.jpg"
import duo from "../assets/duo.png"
import "../style/Pastime.css"

const Pastime = () =>{
    return(
        <>
        <h3>Pasatiempos</h3>
        <div className="container">
        <p>Me gusta la pizza</p>
        <img src={pizza} className="pizza" alt="pizza"/>
        </div>
        <div className="container">
        <p>Me gusta escuchar musica , jugar minecraf.</p>
        <img src={minecraf} className="minecraf" alt="minecraf"/>
        </div>        
        <div className="container">
        <p> Aunque diariamente estoy duolingando, jeje</p>                                
        <img src={duo} className="duo" alt="duo"/>
        </div>        
        </>        
    );
}

export default Pastime