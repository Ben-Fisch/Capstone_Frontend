import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayLiftPR.css";
import jwtDecode from "jwt-decode";
import AddLiftPR from '../AddLiftPR/AddLiftPR'

const DisplayLiftingPR = (props) => {
    const [pr_lifts, setPRLifts] = useState([])

    const getPRLifts = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/prlift/prlifts/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        setPRLifts(response.data)
    }

    const deleteLiftPR = async (id) => {
        let response = await axios.delete('http://127.0.0.1:8000/api/prlift/prlifts/' + id + '/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        getPRLifts()
    }
    
    useEffect(async() => {
        getPRLifts()
    }, [])

    return (
        <div>
            <h1>Lifting Log</h1>

            <AddLiftPR getPRLifts={getPRLifts}/>
            <table className="table-container">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                {pr_lifts.map((lift) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{lift.date}</td>
                                <td>{lift.activity}</td>
                                <td>{lift.reps}</td>
                                <td>{lift.weight} lbs</td>
                                <td><button type="button" className="btn btn-danger" onClick={() => deleteLiftPR(lift.id)}>Delete</button></td>

                            </tr>              
                        </tbody>
                    )
                })}

            </table>
        </div>
    )

}

export default DisplayLiftingPR