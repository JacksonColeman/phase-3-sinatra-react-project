import React, {useState} from 'react'
import PlayBall from './PlayBall'

function PlayerInfo({player}){
    // get players
    
    return(
        <div>
            <div className="playerInfo">
                <img src={player.image} alt="player image"></img>
                <h3>{player.first_name} {player.last_name}</h3>
                <h4>Age: {player.age}</h4>
                <h4>Batting Average: {player.batting_average}</h4>
            </div>
            <PlayBall player={player}/>
        </div>
    )
}

export default PlayerInfo