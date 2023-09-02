import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ApodData from "./components/ApodData";
import Header from "./components/Header";
import dummyData from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [apodData, setApodData] = useState(null);
  const [date, setDate] = useState("2020-08-31");
  const changeHandler = (event) => {
    const { value } = event.target;
    setApodData(null);
    setDate(value);
  };
  useEffect(() => {
    let startDate = date;
    let realDate = new Date(date);
    realDate.setDate(realDate.getDate() + 3);
    let endDate = realDate.toISOString().slice(0, 10);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${startDate}&end_date=${endDate}`
      )
      .then((response) => {
        setApodData(response.data);
      })
      .catch((error) => {
        console.log("apod data alınmadı".error);
      });
  }, [date]);

  return (
    <div>
      <Header date={date} changeHandler={changeHandler} />
      <div className="App">
        {apodData ? <ApodData apodData={apodData} /> : <h2>Yükleniyor....</h2>}
      </div>
    </div>
  );
}

export default App;
