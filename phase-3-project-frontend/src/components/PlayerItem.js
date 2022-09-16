import React, {useState} from 'react'

function PlayerItem({player, team, updateCurrentPlayer, deletePlayer}){
    // get players
    const [selected, setSelected] = useState(false);

    const toggleSelected = () => {
        if (selected == true){
            setSelected(false)
            updateCurrentPlayer()
        } else {
            setSelected(true)
            updateCurrentPlayer(player)
        }
    }

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/teams/${team}/players/${player.id}`, {
            method: 'DELETE'})
        .then(deletePlayer(player))
    }
    
    return(
        <div>
            <button className={selected ? "SelectedPlayer" : "PlayerItem"} onClick={toggleSelected}>
                <p>{player.first_name} {player.last_name}</p>
                <p>Batting Average: {player.batting_average}</p>
            </button>

            <button onClick={handleDeleteClick}><strong>X</strong></button>
        </div>
    )
}

export default PlayerItem