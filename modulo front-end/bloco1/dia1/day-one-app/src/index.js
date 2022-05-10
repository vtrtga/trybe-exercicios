import React from "react";
import ReactDOM from "react-dom";
import './index.css'

// import Primeiro from './components/Primeiro'
// import ComParametro from './components/ComParametro'
// import ComFilhos from './components/ComFilhos'

// import Card from './components/Card'
import Task from './components/Task'
import Header from './components/Header'
import Content from './components/Content'

ReactDOM.render(
    <div>
        <Header/>
        <Task/>
        <Content/>
        {/* <Card titulo='Primeiro Componente'>
            <Primeiro />
        </Card>
        <Card titulo='Exercicio X'>
            Conteudo
        </Card> */}

    {/*</Primeiro>,
    <ComParametro titulo='Opa'
    subtitulo='Epa'/>,
     */}
     {/* <ul>
         <li>Ana</li>
         <li>Carol</li>
         <li>Carlos</li>
         <li>Daniel</li>
     </ul> */}
    </div>,
    document.getElementById('root')
)