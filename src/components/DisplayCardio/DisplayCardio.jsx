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
    
    useEffect(async() => {
        getCardio()
    }, [])

    return (
        <div>
            <AddCardio getCardio={getCardio}/>
            <table className="table-container">
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
                                
                                {/* <td><button class="btn btn-outline-light btn-lg" type="button" onClick={() => handleChange(product.id)}>Add to Cart</button></td> */}

                            </tr>              
                        </tbody>
                    )
                })}

            </table>
        </div>
    )

}

export default DisplayCardio