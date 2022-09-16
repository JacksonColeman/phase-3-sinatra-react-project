import React, {useState} from 'react'

function AddTeamForm({onAddTeam}){
    // get players

    const [formData, setFormData] = useState({
        teamname: "",
        location: "",
        founded: "",
        division_id: 1,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const newTeam = {
            name: formData.teamname,
            location: formData.location,
            founded: formData.founded,
            division_id: formData.division_id,
        }
        console.log(newTeam)
        fetch("http://localhost:9292/divisions/1/teams/", {
            method: 'POST',
            headers: {
            "Content-Type": 'application/json',
            },
            body: JSON.stringify(newTeam)
        })
        .then(resp => resp.json())
        .then(onAddTeam)

        setFormData({teamname: "",
            location: "",
            founded: "",
            division_id: 1
        })
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => {
            return{
                ...formData,
                [name]: value
            }
        })
    }

    return (
        <form className="addTeamForm" onSubmit={handleOnSubmit}>
          <input placeholder="Location" name="location" value={formData.location} onChange={handleOnChange}/>
          <input placeholder="Team Name" name="teamname" value={formData.teamname} onChange={handleOnChange}/>
          <input placeholder="Founded" name="founded" value={formData.founded} onChange={handleOnChange}/>
          <input type="submit" value="Add Team" />
        </form>
    );
}

export default AddTeamForm