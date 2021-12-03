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
    
    useEffect(async() => {
        getWeight()
    }, [])

    return (
        <div>
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
                                
                                {/* <td><button class="btn btn-outline-light btn-lg" type="button" onClick={() => handleChange(product.id)}>Add to Cart</button></td> */}

                            </tr>              
                        </tbody>
                    )
                })}

            </table>
        </div>
    )

}

export default DisplayWeight