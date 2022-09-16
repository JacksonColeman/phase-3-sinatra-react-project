import React, {useState, useEffect} from 'react'
import AddPlayerForm from './AddPlayerForm';
import PlayerItem from './PlayerItem';
import PlayerInfo from './PlayerInfo';

function Lineup({team, updateCurrentPlayer, currentPlayer}){
    const [players, setPlayers] = useState([]);
    const [stadium, setStadium] = useState();

    // get players
    useEffect(() => {
        fetch(`http://localhost:9292/teams/${team}/players/`)
        .then(res => res.json())
        .then(setPlayers)
      },[team])

      const deletePlayer = (deletedPlayer) => {
        setPlayers(players => players.filter(player => {
          return player.id != deletedPlayer.id;
        }))
    }

    const onAddPlayer = (newPlayer) => {
        setPlayers(players => [...players, newPlayer])
      }

    useEffect(() => {
    fetch(`http://localhost:9292/teams/${team}/stadium`)
    .then(res => res.json())
    .then(setStadium)
    }, [team])


    return(
        <div>
            {stadium ? <img src={stadium.image} width="1240px" height="410px"></img> : null}
            <p>Select A Player</p>
            {currentPlayer ? <PlayerInfo player={currentPlayer}/> : null}
            {players.map(player => <PlayerItem key={player.id} player={player} team={team} updateCurrentPlayer={updateCurrentPlayer} deletePlayer={deletePlayer}/>)}
            <AddPlayerForm team={team} onAddPlayer={onAddPlayer}/>
        </div>
    )
}

export default Lineup