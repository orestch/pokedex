import React from "react";
import Loading from "./layout/Loading";



export default class Pokeitems extends React.Component {

  constructor(props) {
    super();

    this.state = {
      objects: [],
      pokemon: {}
    }    
  }

  getPokemonInfo(e) {
    let id = e.target.getAttribute("data-id"),
        source = `http://pokeapi.co/api/v1/pokemon/${id}`;
    let th = this;
    this.serverRequest = axios.get(source).then(function (result) {
      th.props.updatePokemonInfo(result.data, "block", result.data.types, result.data.moves);
    });

  }

  componentDidMount() {
    var th = this;
    this.serverRequest = axios.get(this.props.source).then(function (result) {
      th.setState({
        objects: result.data.objects
      });
    });

  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  componentDidUpdate(prevProps, prevState) {
    var th = this;

    this.serverRequest = axios.get(this.props.source).then(function (result) {
      th.setState({
        objects: result.data.objects,
   
      });
    });
  }
  

  render() {
    if(this.state.objects.length == 0 ) {
      return (
          <Loading  />
        )
    }

    return (
        <div class="row pokeitems">
          <div class="col-md-12">
          {this.state.objects.map(function (obj, key) {
            
            return (
              
              <div class="col-sm-4" key={key}>
              <a href="#top" data-id={obj.pkdx_id} key={key+10}>
              <div class="pokeitem" key={key} onClick={this.getPokemonInfo.bind(this)} data-id={obj.pkdx_id}>
                  

                  <p class="avatar" key={key} data-id={obj.pkdx_id}><img key={key} data-id={obj.pkdx_id} src={"../../img/pokemon/" + obj.pkdx_id + ".png"} /></p>
                            
                    
                    <h3 class="name" key={key+10} data-id={obj.pkdx_id}>{obj.name}</h3>
                              
                            
                  <p class="types" key={key+100} data-id={obj.pkdx_id}>{obj.types.map(function(type, key){
                      return (
                        <span key={key} data-id={obj.pkdx_id} class={"label label-default " + type.name}>{type.name}</span>
                        )                
                    })}</p>
              </div>

              </a>
          
              </div>
          
          
              );
          }, this)}
          </div>

          <div class="row">
            <div class="btn-more">
              <div>        
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <button type="button" class="btn btn-primary" onClick={this.props.updateSource}>Load More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
  }
}




