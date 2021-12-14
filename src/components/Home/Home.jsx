import { Line } from "react-chartjs-2";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import './Home.css'

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
  
    props.weights.map((thing) => {
      weightsArray.push(thing.weight)
      datesArray.push(thing.date)
    })
    setWeights(weightsArray);
    setDates(datesArray);
    
  }

  useEffect(() => {
    getWeight()
    getCardioPR()
  },[])


  const data = {
    labels:dates,
    datasets: [
      {
        label: "Weight",
        data: weights,
        fill: false,
        backgroundColor: "rgb(255, 0, 255)",
        borderColor: "rgba(255, 0, 255, 0.3)"
      }
    ]
  };
  
 const options = {
    scales: {
      y: {
        beginAtZero: false
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
        backgroundColor: "rgb(50, 50, 200)",
        borderColor: "rgba(50, 50, 200, 0.3)"
      },
      {
        label: "Cardio Distance",
        data: cdistance,
        fill: false,
        backgroundColor: "rgb(200, 50, 90)",
        borderColor: "rgba(200, 50, 50, 0.3)"
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
    <div className="container home-display">
      <h1 className="home-header">Welcome to Move Fitness!</h1>
      <p className="home-para">The best place to track your workouts and progression</p>
      
      <div className="row chart-container">
        <div className="col">
          <h3>Weight Tracker</h3>
          <Line data={data} options={options} />
        </div>
        <div className="col">
          <h3>Cardio Record Tracker</h3>
          <Line data={data2} options={options2} />
        </div>
      </div>
    </div>
  );
}
