import "./index.css"

const TextForm = (Props) => {

    const placeholderModificada =`${Props.placeholder}...`

    const digitado = (e) => {
        Props.alterado(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{Props.label}</label>
            <input value={Props.valor} onChange={digitado} required={Props.obrigatorio} placeholder={placeholderModificada} />
            
        </div>
    )
}
export default TextForm;