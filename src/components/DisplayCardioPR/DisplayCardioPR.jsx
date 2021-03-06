import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayCardioPR.css";
import jwtDecode from "jwt-decode";
import AddCardioPR from '../AddCardioPR/AddCardioPR'

const DisplayCardioPR = (props) => {
    const [pr_cardios, setPRCardios] = useState(props.pr_cardios)

    
    
    const deleteCardioPR = async (id) => {
        let response = await axios.delete('http://127.0.0.1:8000/api/prcardio/prcardio/' + id + '/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        props.getCardioPR()
    }

    useEffect(async() => {
        setPRCardios(props.pr_cardios)
        console.log(props.pr_cardios)
    }, [props])

    return (
        <div className="container display-cardio-pr">
            <h1 className="cardio-pr-header">Cardio Personal Record Log</h1>
            <p className="cardio-pr-para">Set a cardio record? Log it!</p>

            <AddCardioPR getCardioPR={props.getCardioPR}/>
            <table className="table cardio-pr-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Distance</th>
                        <th>Time</th>
                    </tr>
                </thead>
                {pr_cardios.map((cardio) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{cardio.date}</td>
                                <td>{cardio.activity}</td>
                                <td>{cardio.distance} mi</td>
                                <td>{cardio.time} min</td>
                                <td><button type="button" className="btn btn-danger" onClick={() => deleteCardioPR(cardio.id)}>Delete</button></td>

                            </tr>              
                        </tbody>
                    )
                })}

            </table>
        </div>
    )

}

export default DisplayCardioPR