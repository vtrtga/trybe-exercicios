import React from "react";
import './index.css'

class Card extends React.Component {
    render() {
        const {pokeInfo} = this.props
        const {name, type, averageWeight, image} = pokeInfo
        return(
            <article className="Cards">
                <h3 className="content">{name}</h3>
                <h4 className="content">{type}</h4>
                <img className="imagem" src={image}/>
                <h5 className="content">{averageWeight.value} kg</h5>
            </article>
        );
    }
}

export default Card