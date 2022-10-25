import React from "react";


export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length);
        const url = allMeme[randomNumber].url
        setMeme(prevState => ({
                ...prevState,
                randomImage: url
        }));  
    }

    function handleChange(event){
        setMeme(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    console.log(meme)

    return (
        <div>
            <div className="Form">
                <div className="Inputs">

                    <input 
                    type="text" 
                    className="InputTag"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange= {handleChange}
                    />
                    
                    <input 
                    type="text" 
                    className="InputTag"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange= {handleChange}
                    />

                </div>

                <button onClick={getMemeImage}>
                Get a new meme image  🖼
                </button>

            </div>
            <div className = "Meme">
                <img src={meme.randomImage} className="memeImage"/>
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
            
        </div>    
    )
}