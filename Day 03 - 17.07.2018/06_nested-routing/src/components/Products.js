import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import products from './../models/products';

class Products extends Component {
    render() {
        return (
            <div>

                <div className="container-fluid bg-2 text-center">
                    <h1 className="margin">Product list</h1>
                    <h3>All products in one store </h3>

                    <div className="container text-center">
                        <div>
                            {products.map(({ name, id },index) => (
                                <Link key={id} type="button" className="col-sm-4 btn btn-default btn-lg" to={`${this.props.match.url}/${id}/${10*(index+1)}`}>{name}</Link>
                            ))}
                        </div>
                    </div>

                </div>

                <hr />


                {/*EVERY PARAM IN THE URL THAT HAS THE PREFIX : IS A DINAMYC PARAMETER*/}
                <Route path={`${this.props.match.path}/:x/:y`}
                    component={SingleProduct} />
            </div>
        )
    }
}

export default Products;