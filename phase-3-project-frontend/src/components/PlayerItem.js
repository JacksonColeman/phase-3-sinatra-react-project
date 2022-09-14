import React, {useState} from 'react'

function PlayerItem({player, updateCurrentPlayer}){
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
    
    return(
        <button class={selected ? "SelectedPlayer" : "PlayerItem"} onClick={toggleSelected}>
            <p>{player.first_name} {player.last_name}</p>
            <p>Batting Average: {player.batting_average}</p>
        </button>
    )
}

export default PlayerItem