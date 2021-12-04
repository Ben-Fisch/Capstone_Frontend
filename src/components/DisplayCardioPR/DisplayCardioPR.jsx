import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayCardioPR.css";
import jwtDecode from "jwt-decode";
import AddCardioPR from '../AddCardioPR/AddCardioPR'

const DisplayCardioPR = (props) => {
    const [pr_cardios, setPRCardios] = useState([])

    const getCardioPR = async () => {
        let response2 = await axios.get('http://127.0.0.1:8000/api/prcardio/prcardio/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        setPRCardios(response2.data)
        
    }
    
    const deleteCardioPR = async (id) => {
        let response = await axios.delete('http://127.0.0.1:8000/api/prcardio/prcardio/' + id + '/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        getCardioPR()
    }

    useEffect(async() => {
        getCardioPR()
    }, [])

    return (
        <div>
            <h1>Cardio PR Log</h1>

            <AddCardioPR getCardioPR={getCardioPR}/>
            <table className="table-container">
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
                                <td>{cardio.distance} miles</td>
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