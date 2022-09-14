import React, {useState, useEffect} from 'react'
import PlayerItem from './PlayerItem';

function Lineup({team, updateCurrentPlayer}){
    const [players, setPlayers] = useState([]);

    // get players
    useEffect(() => {
        fetch(`http://localhost:9292/teams/${team}/players`)
        .then(res => res.json())
        .then(setPlayers)
      },[team])

    return(
        <div>
            <p>Select A Player</p>
            {players.map(player => <PlayerItem player={player} updateCurrentPlayer={updateCurrentPlayer}/>)}
        </div>
    )
}

export default Lineup