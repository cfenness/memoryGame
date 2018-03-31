import React, { Component } from "react";
import "../styles/Body.css";

class Body extends Component {

    constructor(props) {
    	super(props);
    	this.state = {clicks: 0}
    }
    
    handleClick() {
    	this.setState((prevState) => ({
      	   clicks: prevState.clicks + 1
        }));
    }

    render() {

        let array = ["blueFish", "Cartoon-Fish-extracted", "cartoonFish", "yellowFish", "blowfish", "blowfish2", "cartoon", "goldfish", "happyFish", "tropicalFish", "cart-2", "angel"];



        
        let images = array.map(image => {
           return <div className="col-sm-3 imageCards"><div class="card"><div class="card-body"><button key={image} onClick={this.handleClick.bind(this)} alt=""><img className="game-images" src={require(`../images/${image}.png`)} /></button></div></div></div>
        });

        return (
            <div>
            <div className="row">
            { images }
            </div>
            <div className="footer">
                <div className="col"> 
                <h4 className="score">Score: {this.state.clicks}</h4>
                </div>
            </div>
            </div>
        );
    
        function shuffle(array) {
            let counter = array.length;
        
            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                let index = Math.floor(Math.random() * counter);
        
                // Decrease counter by 1
                counter--;
        
                // And swap the last element with it
                let temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
        
            return array;
        }
    
    }

}
export default Body;
