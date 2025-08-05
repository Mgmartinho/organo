import "./Formulario.css"
import TextForm from "../Form";
import ListaSuspensa from "../ListaSuspensa";
import Buttom from "../ButtomForms";
import { useState } from "react";

const BodyFormulario = (props) => {

 

    const salvar = (e) => {
        e.preventDefault()
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");       
    }


    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");


    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha o formulário para criar o card!</h2>
                <TextForm
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    valor={nome}
                    alterado={setNome}
                />
                <TextForm
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o Cargo"
                    valor={cargo}
                    alterado={setCargo}
                />
                <TextForm
                    label="Image"
                    placeholder="Carregue a imagem ou digite a URL"
                    valor={imagem}
                    alterado={setImagem}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    alterado={valor => setTime(valor)}
                />
                <Buttom>
                    Criar Card
                </Buttom>
            </form>
        </section>
    )
}

export default BodyFormulario;