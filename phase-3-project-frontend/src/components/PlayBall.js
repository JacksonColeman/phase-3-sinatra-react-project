import React, {useState} from 'react'

function PlayBall({player}){
    // get players
    const [atBatResult, setAtBatResult] = useState("");
    
    const takeAtBat = () => {
        let hit_roll = Math.random();
        let output = "";
        if (hit_roll > player.batting_average){
            output = "You're out!"
        } else if (hit_roll < .05){
            output = "Home Run!!!"
        } else {
            output = "It's a hit!"
        }
        setAtBatResult(output);
    }

    return(
        <div>
            <button onClick={takeAtBat}>Take At Bat</button>
            {atBatResult ? <h3>{atBatResult}</h3> : null}
        </div>
    )
}

export default PlayBall