
import "./Banner.css"

import ImgBanner from "../../imagens/banner.png"

function Banner(){
    return(
        <header className="banner">
            <img src={ImgBanner} alt="Imagem do Banner" />

        </header>
    )
}

export default Banner