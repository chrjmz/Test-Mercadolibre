import { Component, Fragment } from "react";
import React from "react";

class Busqueda extends Component {

    constructor() {
        super();
        this.state = { 
            done: false,
            autor:{
                name: "Christian",
                lastname: "Medina",
            },
            categories: [],
            items:{
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
            },
            result: [], 
        };
    }

    componentDidMount() {
        let busqueda2 = window.location;
        let url = 'https://api.mercadolibre.com/sites/MLA/search?q='+busqueda2;
        
        fetch(url)
        .then(JS=>JS.json())
        .then((JS) => {
            this.setState({ 
                categories: JS.available_filters[0].values,
                result: JS.results,
                id: JS.site_id,
            })
        }) 
    }
    
    render() {
        let i = 0;
        return(
            <Fragment>
            <div className='container box-breadcrumb'>
                <ol>
                {this.state.categories.map((task) => {
                    return <li> <span className="flecha-right">&nbsp; &gt; &nbsp; </span> {task.name}</li>
                })}
                </ol>
            </div>
            <div className='container box-search-product'>
                <div className="container-box">
                    {this.state.result.map((task) => {
                        if(i < 4){
                            i++
                            return <div className="box-produc">
                            <a href={"/items/"+task.id}>
                                <div className="box-image">
                                    <img src={task.thumbnail} />
                                </div>
                                <div className="box-content">
                                    <span className="price">$ {task.price}</span>
                                    <h3>{task.title}</h3>
                                </div>
                                <div className="box-city">
                                    <h5>{task.address.city_name}</h5>
                                </div>
                            </a>
                        </div>
                        }
                        
                    })} 
                </div>
            </div>
            </Fragment>
        )
    }
}


export default Busqueda;
