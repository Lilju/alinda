import React, {useState} from "react";

function Navbar() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
  return (
    <>
    <nav>
    <ul className="navbar">
            <li><a href="#apropos">À propos</a></li>
            <li><a href="#musique">Musique</a></li>
            <li><a href="#galerie">Galerie</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
        </div>
    </nav>
    <div className={menu_class}>
    <ul>
            <li><a href="#apropos">À propos</a></li>
            <li><a href="#musique">Musique</a></li>
            <li><a href="#galerie">Galerie</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar