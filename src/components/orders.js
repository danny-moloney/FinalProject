import React from 'react';
import '../App.css';
import { OrderType } from './orderType';

export class Orders extends React.Component{
    // new orders that are entered here are displayed on the orders page
    render(){
        return this.props.orders.map( (order) => {
            return <OrderType order={order}></OrderType>;
        });
    }
}


export default Orders;