import React from "react";
import memesData from "../src/memesData.js";

export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(randomNumber)
        setMemeImage(memesArray[randomNumber].url);  
    }

    return (
        <div>
            <div className="Form">
                <div className="Inputs">
                    <input 
                    type="text" 
                    className="InputTag"
                    placeholder="Top text"
                    
                    />
                    <input 
                    type="text" 
                    className="InputTag"
                    placeholder="Bottom text"
                    
                    />
                </div>
                <button onClick={getMemeImage}>
                Get a new meme image  🖼
                </button>
            </div>
            <img src={memeImage} alt="meme image"/>
        </div>    
    )
}