import React from 'react';

const home = () => (
  <div>
    <div className="text-center">
      <h1 className="margin">Products</h1>
      <h3 className="margin">Kosher store</h3>
    </div>

    <hr />

    <div className="row">

      <div className="col-sm-offset-2 col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <p>
              <span className="glyphicon glyphicon-map-marker"></span>&nbsp;Kfar saba</p>
            <p>
              <span className="glyphicon glyphicon-phone"></span>&nbsp;05444444444</p>
            <p>
              <span className="glyphicon glyphicon-envelope"></span>&nbsp;food@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default home;
