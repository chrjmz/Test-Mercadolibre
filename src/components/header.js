import React from "react";
import logo from "../Assets/image/Logo_ML-2x.png";
import lupa from "../Assets/image/ic_Search.png"

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="box-logo">
                        <a href="/"><img src={logo} alt="Logo"/></a>
                    </div>
                    <div className="box-search">
                        <form method="get" action="/items" >
                            <input id="busca" type="search" name="search" placeholder="Nunca dejes de buscar" required></input>
                            <button type="submit"><div><img src={lupa} alt="buscar" /></div></button>
                        </form>   
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;