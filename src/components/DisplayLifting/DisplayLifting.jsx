import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayLifting.css";
import jwtDecode from "jwt-decode";
import AddLift from '../AddLift/AddLift'

const DisplayLifting = (props) => {
    const [lifts, setLifts] = useState(props.lifts)

    const deleteLift = async (id) => {
        let response = await axios.delete('http://127.0.0.1:8000/api/lift/lifts/' + id + '/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        props.getLifts()
    }
    
    useEffect(async() => {
        setLifts(props.lifts)
    }, [props])

    return (
        <div className="container display-lift">
            <h1 className="lift-header">Daily Lift Log</h1>
            <p className="lift-para">Enter data below to log your lifts!</p>

            <AddLift getLifts={props.getLifts}/>
            <table className="table lift-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                {lifts.map((lift) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{lift.date}</td>
                                <td>{lift.activity}</td>
                                <td>{lift.reps}</td>
                                <td>{lift.weight} lbs</td>
                                <td><button type="button" className="btn btn-danger delete-lift-button" onClick={() => deleteLift(lift.id)}>Delete</button></td>

                            </tr>              
                        </tbody>
                    )
                })}

            </table>
        </div>
    )

}

export default DisplayLifting