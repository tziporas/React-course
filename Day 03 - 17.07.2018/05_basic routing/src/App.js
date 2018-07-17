import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Pizza from './Pizza/Pizza';
import Chips from './Chips/Chips';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/mypizza'>Pizza</Link>
          &nbsp; | &nbsp;
          <Link to='/mychips'>Chips</Link>
          <hr />
          <Route exact path='/' component={Pizza} />
          <Route path='/mypizza' component={Pizza} />
          <Route path='/mychips' component={Chips} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
