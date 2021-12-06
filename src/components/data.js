export const data = {
    labels: ["Date1", "Date2", "Date3", "Date4", "Date5"],
    datasets: [
      {
        label: "Weight",
        data: [150, 140, 147, 148, 157],
        fill: false,
        backgroundColor: "rgb(100, 99, 132)",
        borderColor: "rgba(200, 5, 200, 0.2)"
      }
    ]
  };
  
  export const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };