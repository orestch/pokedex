import React from "react";


export default class Loading extends React.Component {
  render() {
    return (
      <div class="loader-wrapper">
        <div class="loader">
            <div class="loader-indicator" >
              <div>
                <span>loading pokemons</span>
                <span class="loader-wrapper" >
                  <span class="loader-dot">.</span>
                  <span class="loader-dot">.</span>
                  <span class="loader-dot">.</span>
                </span>
              </div>
            </div>
        </div>
      </div>
    );
  }
}




