#
## every class that extends Component has the folowing life cycle hooks:


* `constructor`
<br>
by default - if we dont have a constructor - all the props are injected to the `this.props` property.
<br>
If we implement the constructor - we have to take a parameter to the constructor (to this parameter react will inject all the props)
<br>
This parameter must be sent to the super calss (`Component`)
---

* `componentWillMount`

* `render`

* `componentDidMount`

* `shouldComponentUpdate` - can cancel the update by returning "false" value

* `componentWillUpdate`

* `render`

* `componentDidUpdate`

* `componentWillUnmount`








