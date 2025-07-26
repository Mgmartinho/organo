import "./Buttom.css"

const Buttom = (props) => {
    return(
        <button className="botao">
            {props.children}
        </button>
    )

}

export default Buttom