import "./index.css"

const TextForm = (Props) => {

    const placeholderModificada =`${Props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>{Props.label}</label>
            <input required={Props.obrigatorio} placeholder={placeholderModificada} />
            
        </div>
    )
}
export default TextForm;