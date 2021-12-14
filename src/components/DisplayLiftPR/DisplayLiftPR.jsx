import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayLiftPR.css";
import jwtDecode from "jwt-decode";
import AddLiftPR from '../AddLiftPR/AddLiftPR'

const DisplayLiftingPR = (props) => {
    const [pr_lifts, setPRLifts] = useState(props.pr_lifts)

    

    const deleteLiftPR = async (id) => {
        let response = await axios.delete('http://127.0.0.1:8000/api/prlift/prlifts/' + id + '/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        props.getPRLifts()
    }
    
    useEffect(async() => {
        setPRLifts(props.pr_lifts)
    }, [props])

    return (
        <div className="container display-lift-pr">
            <h1 className="lift-pr-header">Lifting Personal Record Log</h1>
            <p className="lift-pr-para">Set a lifting record? Log it!</p>

            <AddLiftPR getPRLifts={props.getPRLifts}/>
            <table className="table pr-lift-table">
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