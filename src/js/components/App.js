import React from "react";
import Loading from "./layout/Loading";
import Header from "./layout/Header";
import Pokeitems from "./Pokeitems";
import Pokemon from "./Pokemon";



export default class App extends React.Component {
  constructor() {
    super();
    this.limit = 12
    this.state = {    
      pokemon: {},
      display: "none",
      source: `http://pokeapi.co/api/v1/pokemon/?limit=` + this.limit,
      types: []
    }
  }

  updateSource() {
    let limit = this.limit + 12;
    const source = "http://pokeapi.co/api/v1/pokemon/?limit=" + limit;
    this.setState({source}, function() {

    });    
    this.limit = limit;

  }  

  updatePokemonInfo(data, display, types, moves) {
    this.setState({
      pokemon: data,
      display,
      types,
      moves: moves.length
    });
    
  }

  render() {    
    return (
      <div class="container-fluid">    
      <span id="top"></span>  
        <div class="row">
          <div class="col-md-12">
            <Header />
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 col-lg-6">
            <Pokeitems updatePokemonInfo={this.updatePokemonInfo.bind(this)} source={this.state.source} updateSource={this.updateSource.bind(this)} />        
          </div>
          <div class="col-md-5">
            <Pokemon pokemon={this.state.pokemon} display={this.state.display} types={this.state.types} moves={this.state.moves} />
          </div>
        </div>
        
      </div>
    );
  }
}




