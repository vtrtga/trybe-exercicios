import React from "react";
import './Content.css'

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render() {
        return (
          <div>
            {
              conteudos.map((cont) => {
                return ( <div key={cont.conteudo}>
                  <h4>O conteúdo é: {cont.conteudo}</h4>
                  <p>Status: {cont.status}</p>
                  <p>Bloco: {cont.bloco}</p>
                </div>
                  )
              } 
              )
              
              }
          </div>
        )
    }
}

export default Content