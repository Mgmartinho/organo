import "./Formulario.css"
import TextForm from "../Form";

const BodyFormulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha o formulário para criar o card!</h2>
                <TextForm label="Nome" placeholder="Digite o nome" />
                <TextForm label="Cargo" placeholder="Digite o Cargo" />
                <TextForm label="Image" placeholder="Carregue a imagem ou digite a URL" />

            </form>
        </section>
    )
}

export default BodyFormulario;