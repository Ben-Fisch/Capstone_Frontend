import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayWeight.css";
import jwtDecode from "jwt-decode";
import AddWeight from '../AddWeight/AddWeight'

const DisplayWeight = (props) => {
    const [weights, setWeights] = useState([])

    const getWeight = async () => {
        let response2 = await axios.get('http://127.0.0.1:8000/api/weight/weight/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        setWeights(response2.data)
    }

    const deleteWeight = async (id) => {
        let response = await axios.delete('http://127.0.0.1:8000/api/weight/weight/' + id + '/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        getWeight()
    }

    useEffect(async() => {
        getWeight()
    }, [])

    return (
        <div >
            <h1>Weight Log</h1>

            <AddWeight getWeight={getWeight}/>
            <table className="table-container">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                {weights.map((weight) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{weight.date}</td>
                                <td>{weight.weight} lbs</td>
                                <td><button type="button" className="btn btn-danger" onClick={() => deleteWeight(weight.id)}>Delete</button></td>
                            </tr>              
                        </tbody>
                    )
                })}

            </table>
        </div>
    )

}

export default DisplayWeight