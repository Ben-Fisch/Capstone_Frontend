import { Line } from "react-chartjs-2";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

export default function Home(props) {
  const [weights, setWeights] = useState([]);
  const [dates, setDates] = useState([]);
  const [cdates, setCDates] = useState([]);
  const [cdistance, setCDistance] = useState([]);
  const [ctime, setCTime] = useState([]);
  

  const getCardioPR = async () => {
    let cdatesArray = [];
    let cdistanceArray = [];
    let ctimeArray = [];
    

    props.pr_cardios.map((cardio) => {
      cdatesArray.push(cardio.date)
      cdistanceArray.push(cardio.distance)
      ctimeArray.push(cardio.time)
      
    })
    setCDates(cdatesArray);
    setCTime(ctimeArray);
    setCDistance(cdistanceArray);
  }


  const getWeight = async () => {
    let weightsArray = [];
    let datesArray = [];
    // let response = await axios.get('http://127.0.0.1:8000/api/weight/weight/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
    props.weights.map((thing) => {
      weightsArray.push(thing.weight)
      datesArray.push(thing.date)
    })
    setWeights(weightsArray);
    setDates(datesArray);
    // console.log(response.data)
  }

  useEffect(() => {
    getWeight()
    getCardioPR()
  },[])


  const data = {
    labels:dates,
    datasets: [
      {
        label: "Weight Over Time",
        data: weights,
        fill: false,
        backgroundColor: "rgb(100, 99, 132)",
        borderColor: "rgba(200, 5, 200, 0.2)"
      }
    ]
  };
  
 const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const data2 = {
    labels:cdates,
    datasets: [
      {
        label: "Cardio Time",
        data: ctime,
        fill: false,
        backgroundColor: "rgb(100, 99, 132)",
        borderColor: "rgba(200, 5, 200, 0.2)"
      },
      {
        label: "Cardio distance",
        data: cdistance,
        fill: false,
        backgroundColor: "rgb(5, 99, 132)",
        borderColor: "rgba(5, 5, 200, 0.2)"
      }
    ]
  };
  
 const options2 = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  return (
    <div className="App">
      <h1>Weight Tracker</h1>
      <button onClick={getWeight}>click for data</button>
      <Line data={data} options={options} />
      <h1>Cardio Record Tracker</h1>
      <Line data={data2} options={options2}/>
    </div>
  );
}
