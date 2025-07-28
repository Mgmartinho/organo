import { useState } from 'react';
import Banner from './componentes/Banner/index';
import BodyFormulario from './componentes/BodyForms';
import Time from './componentes/Time';

function App() {

  const [colaboradores,setColaboradores] = useState([]);

  const novoColaboradorAdicionado = (colaborador) => {
    console.log("novo colaborador: ", colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
 
  return (
    <div className="App">
      <Banner />
     <BodyFormulario colaboradorCadastrado={colaborador => novoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação"/>
      <Time nome="Front End"/>
      <Time nome="Data Science"/>
      <Time nome="DevOps"/>
    </div>
  );
}

export default App;
