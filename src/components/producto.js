import { Component, Fragment } from "react";
import React from "react";

class Producto extends Component {

    constructor() {
        super();
        this.state = { 
            done: false,
            autor:{
                name: "Christian",
                lastname: "Medina",
            },
            item:{
                id: String,
                title: String,
                price:{
                    currency: String,
                    amount: Number,
                    decimals: Number,
                },
                picture: String,
                condition: String,
                free_shipping: Boolean,
                sold_quantity: String,
                descripcion: String,
            }
        };
    }

    
    componentDidMount() {

        let busqueda3 = window.location.pathname;
        let url = 'https://api.mercadolibre.com'+busqueda3;

        let url2 = 'https://api.mercadolibre.com'+busqueda3+"/description";
        
        fetch(url)
        .then(JS=>JS.json())
        .then((JS) => {
            this.setState({ 
                id: JS.id,
                title: JS.title,
                currency: JS.currency_id,
                amount: JS.price,
                pictures: JS.pictures[0].url,
                condition: JS.condition,
                free_shipping: JS.shipping.free_shipping,
                sold_quantity: JS.sold_quantity,
                category_id: JS.category_id,
             })
        })

        fetch(url2)
        .then(JS2=>JS2.json())
        .then((JS2) => {
            this.setState({ 
                descripcion: JS2.plain_text,
             })
        })

    }
    
 
    render() {

        // let categoria_name = "";
        // let url3 = 'https://api.mercadolibre.com/sites/MLA/search?category='+this.state.category_id;
        // fetch(url3)
        // .then(JS3=>JS3.json())
        // .then((JS3) => {
        //     categoria_name = JS3.filters[0].values[0].name
        // })

        let condicion = this.state.condition
        if(condicion === "new"){
            condicion = "Nuevo"
        } else if (condicion === "used"){
            condicion = "Usado"
        }

        return(
            <Fragment>
            <div className='container box-breadcrumb'>
                <ol>
                    <li>{}</li>
                </ol>
            </div>
            <div className='container box-product'>
                <div className="big-section solo-pc">
                    <img  src={this.state.pictures} alt={this.state.title}></img>

                    <h2>Descripcion del Producto</h2>
                    <p>{this.state.descripcion}</p>
                </div>
                <div className="small-section">
                    <img className="solo-mobile" src={this.state.pictures} alt={this.state.title}></img>
                    <span className="condicion">{condicion} - {this.state.sold_quantity} vendidos</span>
                    <h1>{this.state.title}</h1>
                    <span className="precio">$ {this.state.amount}</span>
                    <button>Comprar</button>
                    <p className="solo-mobile">{this.state.descripcion}</p>
                </div>
            </div>
            </Fragment>
        )
    }
}


export default Producto;
