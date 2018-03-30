import React, { Component } from "react";
import "../styles/Body.css";

class Body extends Component {
    render() {

        let array = ["blueFish", "Cartoon-Fish-extracted", "cartoonFish", "yellowFish", "blowfish", "blowfish2", "cartoon", "goldfish", "happyFish", "tropicalFish", "cart-2", "angel"];



        
        let images = array.map(image => {
           return <div className="col-sm-3 imageCards"><div class="card"><div class="card-body"><img key={image} src={require(`../images/${image}.png`)} alt="" className="game-images" /></div></div></div>
        });

        return (
            <div className="row">
            { images }
            </div>
        );
    }
}
export default Body;
