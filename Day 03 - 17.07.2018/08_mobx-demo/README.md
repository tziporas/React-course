
* create a new project with the follwing command:
```bash
 create-react-app mobx-demo
```
* move local path to the new project
```bash
cd mobx-demo
```
* run in the cli:
```bash
   npm i -s babel-plugin-styled-components mobx mobx-react prettier react-app-rewire-mobx react-app-rewired styled-components
```

* change in `package.json` the `scripts` part to:
```json
 "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
  }
```
* add to `mobx-demo` a file, named `config-overrides.js`, with the follwing content:
```javascript
const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");

module.exports = function override(config, env) {
  config = injectBabelPlugin("babel-plugin-styled-components", config);
  config = rewireMobX(config, env);

  return config;
};

```
* create the `mobx` class (will export a singleton),
<br/>
add `\mobx-demo\src\stores` folder, and inside add `UiStore.js` file, with the following content:

```javascript
import { action, observable } from "mobx";

class UiStore {
  @observable counter = 1;

  @action
  incrementCounter = () => {
    this.counter++;
  };
}

export default new UiStore();
```


* go to `index.js`and change the file to the following content:
```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "mobx-react";
import UiStore from "./stores/UiStore";


ReactDOM.render(
  <Provider UiStore={UiStore}>
    <App />
  </Provider>
  , document.getElementById("root"));
registerServiceWorker();

```

* update `app.js` file `app.jsx`, and add into it the following content:
```javascript
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
```
