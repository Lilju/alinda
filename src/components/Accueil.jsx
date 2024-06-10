import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense, useState } from 'react'
import { Handpan } from "./Handpan"
import pochette_alinda from "../assets/images/pochette_alinda.jpg"
import pochette_verso from "../assets/images/Alinda_verso.jpg"

export const Accueil = () => {

    const [activeCard, setActiveCard] = useState(false)

    const handleFlip = () => {
        setActiveCard(!activeCard)
    }
    return (<>
    <div className="hero_container">
        <div onClick={handleFlip} className={`pochette_container ${activeCard? 'card-flip':''}`}>
            <div className="recto">
            <img src={pochette_alinda} className="pochette" alt="pochette alinda" title="Cliquez pour me retourner!"></img>
            </div>
            <div className="verso">
            <img src={pochette_verso}  className="pochette" alt="pochette alinda verso" title="Cliquez pour me retourner!"></img>
            </div>
        </div>
    <div className="description">
        <h2 id="apropos">À propos</h2>
        <p>Âlinda, qui signifie «l'endroit où on fait la sieste» en sanscrit, est un duo de musiciens. Voyage sonore né de la rencontre entre le handpan et le violoncelle, Léandre et Flavien y mêlent leurs univers musicaux entre influences celtiques et méditatives, percussives et mélodiques, autour de compositions pensées pour la relaxation. Dans le cadre de représentations  prenant la forme de siestes musicales, ils offrent au public confortablement installé dans des transats un moment propice à la détente.
            </p>
    </div>
    </div>
    
    {/* <Canvas>
        <OrbitControls/>
        <Suspense><Handpan /></Suspense>
    </Canvas> */}
    </>
    );
};