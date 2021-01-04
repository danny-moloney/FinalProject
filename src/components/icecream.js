import React from 'react';
import { Orders } from "./orders";


// Here is the data that i have created myself in a word document and then pasted in here.
export class Icecream extends React.Component{

    state = {
        orders: [
            {
                "Type": "order",
                "Name": "Sarah Ryan",
                "Flavor": "Chocolate",
                "Size": "Large",
                "Toppings": "Sprinkles",
                "Picture": "https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg",
            },
            {
                "Type": "order",
                "Name": "Aisling Ryan",
                "Flavor": "Strawberry",
                "Size": "Medium",
                "Toppings": "Chocolate Flakes",
                "Picture": "https://bakingamoment.com/wp-content/uploads/2018/06/IMG_8185-homemade-strawberry-ice-cream-square.jpg",
            },
            {
                "Type": "order",
                "Name": "Angela Heffernan",
                "Flavor": "Vanilla",
                "Size": "Large",
                "Toppings": "No Toppings",
                "Picture": "https://joyfoodsunshine.com/wp-content/uploads/2020/07/homemade-vanilla-ice-cream-recipe-6.jpg",
            },
            {
                "Type": "order",
                "Name": "Darragh Long",
                "Flavor": "Mint",
                "Size": "Medium",
                "Toppings": "Choco Chunks",
                "Picture": "https://www.chewoutloud.com/wp-content/uploads/2020/04/Mint-Chip-Ice-Cream-Vertical.jpg",
            },
            {
                "Type": "order",
                "Name": "Ciara O Grady",
                "Flavor": "Caramel",
                "Size": "Medium",
                "Toppings": "No Toppings",
                "Picture": "https://www.handletheheat.com/wp-content/uploads/2011/04/Light-Salted-Caramel-Ice-Cream.jpg",
            }
        ]
    };


    // Any new order created in the order page will appear here too because of the order tags
    render(){
        return (
            <div className="App">
                <h1>this is the Ice-cream component</h1>
                <Orders orders={this.state.orders}></Orders>
            </div>
        );
    }
   
        
    }

