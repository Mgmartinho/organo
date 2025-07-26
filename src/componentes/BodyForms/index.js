import "./Formulario.css"
import TextForm from "../Form";
import ListaSuspensa from "../ListaSuspensa";
import Buttom from "../ButtomForms";

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

    const salvar =(e) => {
        e.preventDefault()
        console.log("Salvou")
    }



    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha o formulário para criar o card!</h2>
                <TextForm obrigatorio={true} label="Nome" placeholder="Digite o nome" />
                <TextForm obrigatorio={true} label="Cargo" placeholder="Digite o Cargo" />
                <TextForm label="Image" placeholder="Carregue a imagem ou digite a URL" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Buttom>
                    Criar Card
                </Buttom>
            </form>
        </section>
    )
}

export default BodyFormulario;