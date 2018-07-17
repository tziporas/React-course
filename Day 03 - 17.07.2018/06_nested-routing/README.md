# Steps to create a react project using routing:
* Create react app with this command:
```bash
create-react-app proj
```
* change the cmd path to the new project that you created:
```bash
cd proj
```
* install local to the project a package that will give the routing options:
```bash
npm i -s react-router-dom
```

* use `BrowserRouter` from `react-router-dom` to craete a section that contains all the routing parts

* insert into `BrowserRouter` the links to navigate the SPA page:
```html
<Link to='[[LINK ADDRESS]]'>[[LINK CONTENT]]</Link>
```

* insert into `BrowserRouter` the options of the comonents that will be displayed according to the current url in the browser:
```html
<Route path='[[MATCHING URL]]' component={[[COMPONENT-NAME]]} />
```


# For more information:
https://reacttraining.com/react-router/web
