import axios from 'axios'
import jwtDecode from 'jwt-decode'
import react, { useState } from 'react'
import './AddWeight.css'


const AddWeight = (props) => {
    const [date, setDate] = useState("")
    const [weight, setWeight] = useState("")
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        let userId = jwtDecode(localStorage.getItem('token')).user_id
        let newWeight = {
            "weight": weight,
            "date": date,
            "user": userId
        }
        console.log(newWeight)
        let response = await axios.post('http://127.0.0.1:8000/api/weight/weight/',newWeight,{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        console.log(response)
        props.getWeight()
        window.location = ('/Weight')
    }    

    return (
        <div className="container weight-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label className="form-label" for="date">Date</label>
                    <input type="date" className="form-control" id="date" onChange={(e)=>setDate(e.target.value) }></input>
                </div>
                <div className="form-group">
                    <label className="form-label" for="weight">Weight</label>
                    <input type="number" className="form-control" id="weight" onChange={(e)=>setWeight(e.target.value) }></input>
                </div>
                <div className="form-group">
                    <button type="submit" className="weight-button">Log it!</button> 
                </div>
                
            </form>
        </div>
    )
}
export default AddWeight