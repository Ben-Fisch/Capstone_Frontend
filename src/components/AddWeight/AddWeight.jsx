import axios from 'axios'
import jwtDecode from 'jwt-decode'
import react, { useState } from 'react'


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
    }    

    return (
        <form onSubmit={ handleSubmit}>
            <label>Date</label>
            <input type="date" onChange={(e)=>setDate(e.target.value) }></input>
            <label>Weight</label>
            <input type="number" onChange={(e)=>setWeight(e.target.value) }></input>
            <button type="submit">Submit</button>
        </form>
    )
}
export default AddWeight