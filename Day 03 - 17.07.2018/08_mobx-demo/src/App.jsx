import React, { Component } from "react";
import styled, { css } from "styled-components";
import { inject, observer } from "mobx-react";

@inject("UiStore")
@observer
class App extends Component {
  render() {
    console.log("render now");
    return (
      <div onClick={e => { this.props.UiStore.incrementCounter(); }}>
        <h1>{this.props.UiStore.counter}</h1>
      </div>
    );
  }
}

export default App;
