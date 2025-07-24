import "./Formulario.css"
import TextForm from "../Form";
import ListaSuspensa from "../ListaSuspensa";
import Buttom from "../../ButtomForms";

const BodyFormulario = () => {

    const times = [
        '',
        'Programação',
        'Front-End',
        'Data-Scienc',
        'Devops',
        'UX Design',
        'Mobile',
    ];

    return (
        <section className="formulario">
            <form>
                <h2>Preencha o formulário para criar o card!</h2>
                <TextForm label="Nome" placeholder="Digite o nome" />
                <TextForm label="Cargo" placeholder="Digite o Cargo" />
                <TextForm label="Image" placeholder="Carregue a imagem ou digite a URL" />
                <ListaSuspensa label="Time" itens={times}/>
                <Buttom>
                    Criar Card
                </Buttom>
            </form>
        </section>
    )
}

export default BodyFormulario;