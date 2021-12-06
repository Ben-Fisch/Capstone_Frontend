import axios from 'axios'
import jwtDecode from 'jwt-decode'
import react, { useState } from 'react'
import './AddLiftPR.css'


const AddLiftPR = (props) => {
    const [date, setDate] = useState("")
    const [activity, setActivity] = useState("")
    const [reps, setReps] = useState("")
    const [weight, setWeight] = useState("")
    
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        let userId = jwtDecode(localStorage.getItem('token')).user_id
        let newLiftPR = {
            "date": date,
            "activity": activity,
            "reps": reps,
            "weight": weight,
            "user": userId
        }
        console.log(newLiftPR)
        let response = await axios.post('http://127.0.0.1:8000/api/prlift/prlifts/',newLiftPR,{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        console.log(response)
        props.getPRLifts()
        window.location = ('/LiftingPR')
    }    

    return (
        <div className="container lift-pr-form">
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
                <button type="submit" className="log-lift-pr">Log it!</button>
            </form>
        </div>
    )
}
export default AddLiftPR