import React, { Component } from 'react';
import './App.css';

class App extends Component {


//RETURNS 10*10 MAT - WITH ALL THW MUL TABLE VALUES
  createMulTable() {

    let mat =[];

    for (let outer = 0; outer < 10;outer++){ 
      mat[outer]=[]
      for (let inner = 0; inner < 10; mat[outer][inner]=(inner+1) * (outer+1),inner++);
    }
    return mat;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Mul Table</h1>
        </header>
        <div className="App-intro">

          <table border="1">
            <tbody>
              {this.createMulTable().map((element, index) => {
                return <tr key={index}>
                {element.map(
                  (inner)=><td key={inner +","+index}>{inner}</td>
                )}
                </tr>
              })}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default App;
