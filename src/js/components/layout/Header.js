import React from "react";


export default class Header extends React.Component {
  render() {
    return (
      <header class="page-header" id="logo">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h1 class="logo">              
              <img src="../../../img/logo.png" alt="logo" />
            </h1>
          </div>
        </div>
      </header>
    );
  }
}
