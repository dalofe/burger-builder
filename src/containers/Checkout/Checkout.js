import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
    //We get this through Redux too
    // state = {
    //     ingredients: null,
    //     price: 0
    // }

    //We no longer need to get the Ingredients parameters from the query string
    //but we will get them from the Store
    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;

    //     for (let param of query.entries()) {
    //         // ['salad', '1']
    //         if(param[0] === 'price'){
    //             price = param[1]
    //         }
    //         else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ingredients: ingredients, price: price});
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    price={this.props.price}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}

                    //We do not need any more tricks to pass the Price to the ContactData component
                    //now we will get the price in ContactData through Redux
                    // render={(props) => (<ContactData 
                    //                         ingredients={this.props.ings} 
                    //                         price={this.props.price}
                    //                         {...props} />
                    //                     )}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);