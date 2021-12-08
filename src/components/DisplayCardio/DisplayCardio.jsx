import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayCardio.css";
import jwtDecode from "jwt-decode";
import AddCardio from '../AddCardio/AddCardio'

const DisplayCardio = (props) => {
    const [cardios, setCardios] = useState([])

    const getCardio = async () => {
        let response2 = await axios.get('http://127.0.0.1:8000/api/cardio/cardio/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        setCardios(response2.data)
        
    }
    
    const deleteCardio = async (id) => {
        let response = await axios.delete('http://127.0.0.1:8000/api/cardio/cardio/' + id + '/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        getCardio()
    }

    useEffect(async() => {
        getCardio()
    }, [])

    return (
        <div className="container display-cardio">
            <h1 className="cardio-header">Daily Cardio Log</h1>
            <p className="cardio-para">Enter data below to log your cardio Workout!</p>

            <AddCardio getCardio={getCardio}/>
            <table className="table cardio-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Distance</th>
                        <th>Time</th>
                    </tr>
                </thead>
                {cardios.map((cardio) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{cardio.date}</td>
                                <td>{cardio.activity}</td>
                                <td>{cardio.distance} miles</td>
                                <td>{cardio.time} min</td>
                                <td><button type="button" className="btn btn-danger delete-cardio-button" onClick={() => deleteCardio(cardio.id)}>Delete</button></td>

                            </tr>              
                        </tbody>
                    )
                })}

            </table>
        </div>
    )

}

export default DisplayCardio