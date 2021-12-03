import axios from 'axios'
import jwtDecode from 'jwt-decode'
import react, { useState } from 'react'
import './AddCardio.css'


const AddCardio = (props) => {
    const [date, setDate] = useState("")
    const [activity, setActivity] = useState("")
    const [distance, setDistance] = useState("")
    const [time, setTime] = useState("")
    
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        let userId = jwtDecode(localStorage.getItem('token')).user_id
        let newCardio = {
            "date": date,
            "activity": activity,
            "distance": distance,
            "time": time,
            "user": userId
        }
        console.log(newCardio)
        let response = await axios.post('http://127.0.0.1:8000/api/cardio/cardio/',newCardio,{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        console.log(response)
        props.getCardio()
        window.location = ('/Cardio')
    }    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Date</label>
                <input type="date" onChange={(e)=>setDate(e.target.value) }></input>
            
                <label>Activity</label>
                <input type="text" onChange={(e)=>setActivity(e.target.value) }></input>
                <label>Distance</label>
                <input type="number" onChange={(e)=>setDistance(e.target.value) }></input>
                <label>Time</label>
                <input type="number" onChange={(e)=>setTime(e.target.value) }></input>
                <button type="submit">Log it!</button>
            </div>
        </form>
    )
}
export default AddCardio