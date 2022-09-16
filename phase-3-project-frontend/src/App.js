import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import Lineup from './components/Lineup';
import PlayerInfo from './components/PlayerInfo';
import AddTeamForm from './components/AddTeamForm';

function App() {
  const [teams, setTeams] = useState([]);
  const [currentTeam, setCurrentTeam] = useState();
  const [currentPlayer, setCurrentPlayer] = useState();
  const [showAddTeam, setShowAddTeam] = useState(false);

  useEffect(() => {
    fetch('http://localhost:9292/teams/')
    .then(res => res.json())
    .then(setTeams)
  },[])

  const handleTeamSelect = (e) => {
    setCurrentTeam(e.target.value)
    // getStadium(e.target.value)
  }

  const updateCurrentPlayer = (player) => {
    setCurrentPlayer(player);
  }

  const onAddTeam = (newTeam) => {
    setTeams(teams => [...teams, newTeam]);
  }

  const handleShowOnTeamClick = () => {
    setShowAddTeam(!showAddTeam)
  }

  return (
    <div className="App">
      <h1>⚾ Let's Play Ball! ⚾</h1>
      <select id="teamdropdown" onChange={handleTeamSelect}>
        <option value="">Select A Team</option>
        {teams.map(team => <option value={team.id} key={team.id}>{team.name}</option>)}
      </select>
      <br></br>
      <button onClick={handleShowOnTeamClick}>Add Team</button>
      {showAddTeam ? <AddTeamForm onAddTeam={onAddTeam}/> : null}
      {(currentTeam) ? 
      <Lineup team={currentTeam} updateCurrentPlayer={updateCurrentPlayer} currentPlayer={currentPlayer}/> : null}
    </div>
  );
}

export default App;
