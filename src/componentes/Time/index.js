import Colaborador from "../Colaborador";
import "./Time.css"

const Time = (props) => {

    const corSec = { backgroundColor: props.corSecundaria }

    return (
        <section className="time" style={corSec}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            
            <div className="colaboradores">
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />

                )}
            </div>

        </section>
    )
}

export default Time;