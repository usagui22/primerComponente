import "../style/Button.css"

export const Aceptar = () =>{
    function saludar(){
        console.log("Hola a Todos jeje !!")
        alert("Hola a Todos, jeje!!!")
    }
    return(
        <button className="aceptar" 
            onClick={saludar}
            type="submit">
            Aceptar
        </button>
    );
}
export const Cerrar = () =>{
    function despedir(){
        console.log("Adios >.<")
        alert("Adios >.<")
    }
    return(
        <button className="cerrar" 
            onClick={despedir}
        type="reset">
            Cerrar
        </button>
    );
}
