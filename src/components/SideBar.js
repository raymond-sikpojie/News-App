import React from "react";
import { Consumer } from "./Context";
const SideBar = ({ dailyWeather }) => {
  // for (let i = 0; i < 40; i = i + 7) {
  //   console.log(i);
  // }

  // let days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday"
  // ];
  let iconUrl = `http://openweathermap.org/img/wn/${dailyWeather.weather[0].icon}.png`;

  return (
    <div className="sidebar-content">
      <p className="weather-date">{dailyWeather.dt_txt.split(" ").shift()}</p>

      <div className="icons-description-container">
        <i className="icons">
          <img src={iconUrl}></img>
        </i>
        <p>{dailyWeather.weather[0].description}</p>
      </div>

      <p>
        {Math.floor(dailyWeather.main.temp)} <span>&#8451;</span>
      </p>
    </div>
  );
};

export default SideBar;
