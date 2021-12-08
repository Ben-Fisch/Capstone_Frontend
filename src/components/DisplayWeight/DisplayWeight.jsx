import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayWeight.css";
import jwtDecode from "jwt-decode";
import AddWeight from '../AddWeight/AddWeight'

const DisplayWeight = (props) => {
    const [weights, setWeights] = useState(props.weights)


    const deleteWeight = async (id) => {
        let response = await axios.delete('http://127.0.0.1:8000/api/weight/weight/' + id + '/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        props.getWeight()
    }

    useEffect(async () => {
        // rerender if props change
       setWeights(props.weights)
        console.log(weights)
    }, [props])

    return (
        <div className="container display-weight" >
            <h1 className="weight-title">Your Daily Weight Log</h1>
            <p className="weight-para">Enter data below to log your weight!</p>

            <AddWeight getWeight={props.getWeight}/>
            <table className="table weight-table" >
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
                                <td><button type="button" className="btn btn-danger delete-button" onClick={() => deleteWeight(weight.id)}>Delete</button></td>
                            </tr>              
                        </tbody>
                    )
                })}

            </table>
        </div>
    )

}

export default DisplayWeight