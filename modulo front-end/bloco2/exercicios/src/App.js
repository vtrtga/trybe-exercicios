import React from 'react';
import Card from './Cards'
import pokemons from './data';
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          pokemons.map(pokemon => {
          return(
            <Card key={pokemon.name} pokeInfo={pokemon}/>
            ) 

          })
        }
    </div>
  );
}
}

export default App;
