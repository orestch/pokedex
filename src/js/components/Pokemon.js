import React from "react";


export default class Pokemon extends React.Component {

  constructor(props) {
    super();
    this.props = props;
   
  }

  render() {   
    return (
      <section class="pokemon" style={{display: this.props.display}}>
        <p class="avatar-big">
          <img src={"../../img/pokemon/" + this.props.pokemon.pkdx_id + ".png"} height="96" width="96" />
        </p>
        <h2 class="pokemon-name">{this.props.pokemon.name}</h2>
        <table class="table table-hover skills">
          <tbody>
            <tr>
              <td>Type</td>
              <td class="type">
                {this.props.types.map(function(key) {
                  return key.name + "  ";
                })}
              </td>
            </tr>
            <tr>
              <td>Attack</td><td>{this.props.pokemon.attack}</td>
            </tr>
            <tr>
              <td>Defense</td><td>{this.props.pokemon.defense}</td>
            </tr>
            <tr>
              <td>HP</td><td>{this.props.pokemon.hp}</td>
            </tr>
            <tr>
              <td>SP Attack</td><td>{this.props.pokemon.sp_atk}</td>
            </tr>
            <tr>
              <td>SP Defense</td><td>{this.props.pokemon.sp_def}</td>
            </tr>
            <tr>
              <td>Speed</td><td>{this.props.pokemon.speed}</td>
            </tr>
            <tr>
              <td>Weight</td><td>{this.props.pokemon.weight}</td>
            </tr>
            <tr>
              <td>Total moves</td>
              <td>{this.props.moves}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}




