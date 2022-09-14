import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import Lineup from './components/Lineup';
import PlayerInfo from './components/PlayerInfo';

function App() {
  const [teams, setTeams] = useState([]);
  const [stadium, setStadium] = useState();
  const [currentTeam, setCurrentTeam] = useState();
  const [currentPlayer, setCurrentPlayer] = useState();

  useEffect(() => {
    fetch('http://localhost:9292/teams/')
    .then(res => res.json())
    .then(setTeams)
  },[])

  const getStadium = (team_id) => {
    fetch(`http://localhost:9292/teams/${team_id}/stadium`)
    .then(res => res.json())
    .then(setStadium)
  }

  const handleTeamSelect = (e) => {
    setCurrentTeam(e.target.value)
    getStadium(e.target.value)
  }

  const updateCurrentPlayer = (player) => {
    setCurrentPlayer(player);
  }

  return (
    <div className="App">
      <h1>Let's Play Ball!</h1>
      <select id="teamdropdown" onChange={handleTeamSelect}>
        <option value="default">Select A Team</option>
        {teams.map(team => <option value={team.id}>{team.name}</option>)}
      </select>
      <br></br>
      {stadium ? <img src={stadium.image} width="1240px" height="410px"></img> : null}
      {currentPlayer ? <PlayerInfo player={currentPlayer}/> : null}
      {currentTeam ? <Lineup team={currentTeam} updateCurrentPlayer={updateCurrentPlayer}/> : null}
    </div>
  );
}

export default App;
