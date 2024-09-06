import aprender from "../assets/aprender.jpg"
import "../style/Experience.css"

const Experience = () => {
    return(
        <div>
            <h3>Experiencia</h3>
            <div>
                <p>Mi experiencia en lenguajes de programacion es corta pero siempre estoy dispuesta a aprender y divertirme.</p>                
            </div>
            <div>
                <img src={aprender} className="aprender" alt="aprender"/>
            </div>
        </div>
    );
}

export default Experience;