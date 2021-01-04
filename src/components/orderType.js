import React from 'react';
import Card from 'react-bootstrap/Card';

export class OrderType extends React.Component {
    render() {
        return (
            <div>
                {/* Here i used code from bootstrap to make the orders page of my app look nicer, and the card is imported at the top of this file.*/}
                <Card>
                    <Card.Header>{this.props.order.Name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.order.Picture} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.order.Flavor}</p>
                                <p>{this.props.order.Size}</p>
                                <p>{this.props.order.Toppings}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}


export default OrderType;