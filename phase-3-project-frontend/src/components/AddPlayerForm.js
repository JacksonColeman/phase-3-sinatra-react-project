import React, {useState} from 'react'

function AddPlayerForm({team, onAddPlayer}){
    // get players

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        age: "",
        batting_average: "",
        position_id: "",
        team_id: team,
        image: "",
    });

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/teams/${team}/players/`, {
            method: 'POST',
            headers: {
            "Content-Type": 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(onAddPlayer)

        setFormData({
            first_name: "",
            last_name: "",
            age: "",
            batting_average: "",
            position_id: "",
            team_id: team,
            image: "",
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
        <div>
            <p>Add A Player To The Lineup</p>
            <form className="addPlayerForm" onSubmit={handleOnSubmit}>
            <input placeholder="First Name" name="first_name" value={formData.first_name} onChange={handleOnChange}/>
            <input placeholder="Last Name" name="last_name" value={formData.last_name} onChange={handleOnChange}/>
            <input placeholder="Age" name="age" value={formData.age} onChange={handleOnChange}/>
            <input placeholder="Batting Average" name="batting_average" value={formData.batting_average} onChange={handleOnChange}/>
            <input placeholder="Position (#)" name="position_id" value={formData.position_id} onChange={handleOnChange}/>
            <input placeholder="Image URL)" name="image" value={formData.image} onChange={handleOnChange}/>
            <input type="submit" value="Add Player" />
            </form>
        </div>
    );
}

export default AddPlayerForm