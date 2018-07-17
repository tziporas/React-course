import React, { Component } from 'react';


class App extends Component {

  loginHandler = () => {
    console.log(`name: ${this.refs.fname.value}, pass: ${this.refs.pass.value}`)
  }

  render() {
    return (
      <div>
        <h1>Login form</h1>
        <label>first name:</label>
        <input ref="fname" />
        <br />
        <label>password:</label>
        <input type="password" ref="pass" />
        <br />
        <button onClick={this.loginHandler}>login</button>
      </div>
    );
  }
}

export default App;
