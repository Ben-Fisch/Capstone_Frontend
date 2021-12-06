import axios from 'axios'
import jwtDecode from 'jwt-decode'
import react, { useState } from 'react'
import './AddLift.css'


const AddLift = (props) => {
    const [date, setDate] = useState("")
    const [activity, setActivity] = useState("")
    const [reps, setReps] = useState("")
    const [weight, setWeight] = useState("")
    
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        let userId = jwtDecode(localStorage.getItem('token')).user_id
        let newLift = {
            "date": date,
            "activity": activity,
            "reps": reps,
            "weight": weight,
            "user": userId
        }
        console.log(newLift)
        let response = await axios.post('http://127.0.0.1:8000/api/lift/lifts/',newLift,{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        console.log(response)
        props.getLifts()
        window.location = ('/Lifting')
    }    

    return (
        <div className="container lift-form">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <label >Date</label>
                        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
                    </div>
                    <div className="col">
                        <label>Activity</label>
                        <input type="text" onChange={(e)=>setActivity(e.target.value) }></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Reps</label>
                        <input type="number" onChange={(e) => setReps(e.target.value)}></input>
                    </div>
                    <div className="col">
                        <label>Weight</label>
                        <input type="number" onChange={(e)=>setWeight(e.target.value) }></input>
                    </div>
                </div>
                <button type="submit" className="log-lift">Log it!</button>
            </form>
        </div>
    )
}
export default AddLift