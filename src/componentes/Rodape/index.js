import './Rodape.css'

import logo from "../../imagens/logo.png"
import instagram from "../../imagens/ig.png"
import twitter from "../../imagens/tw.png"
import facebook from "../../imagens/fb.png"

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src={facebook} />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src={twitter} />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src={instagram} />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src={logo} />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape