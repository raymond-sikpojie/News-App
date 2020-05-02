import React, { Component } from "react";
import "../App.css";
import NewsDetail from "./NewsDetail";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

// import NewsDescription from "./NewsDescription";

class App extends Component {
  // render() {
  //   return (
  //     <div>
  //       <NavBar />
  //       <SideBar />
  //       <NewsDetail />
  //     </div>
  //   );
  // }
  state = {
    news: null,
    searchTerm: "",
    weatherData: null,
    dailyWeather: [],
  };

  componentDidMount() {
    // Getting the news data
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}http://newsapi.org/v2/top-headlines?country=us&apiKey=ad1db6960259412ab5e8326d56f6ac71`;

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          news: data,
        });
      })
      .catch((err) => console.log(err));

    // Getting the weather data
    const getWeather = (lat, lon) => {
      const api = `${proxy}http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=da1c9acfac0a6440fe94733904919962`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            weatherData: data,
          });
        })
        .catch((err) => {
          return err;
        });
    };

    // Get geolocation data and call getWeather function
    const url =
      "https://api.ipgeolocation.io/ipgeo?apiKey=b87af68decb94ba1b78bd2cc01f274e4&fields=geo";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let { latitude, longitude } = data;
        getWeather(latitude, longitude);
      })
      .catch((error) => {
        console.log(error);
      });

    // Get daily weather by creating a function which loops through the weather list array and select every 8th item, since thats when the data for a new day begins. (it shows a 3 hourly weather info for 5 days)
    const getDailyWeather = () => {
      // Did not wrap the below code block in an if statement because of the 3 secs delay from setTimeout
      let result = this.state.weatherData.list;
      for (let i = 0; i < result.length; i = i + 8) {
        let weather = [...this.state.dailyWeather];
        weather.push(result[i]);
        this.setState({
          dailyWeather: weather,
        });
      }
    };
    setTimeout(getDailyWeather, 3000);
  }

  searchBarChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  searchBarSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchTerm !== "") {
      // const api = `http://newsapi.org/v2/top-headlines?country=us&q=${this.state.searchTerm}&apiKey=ad1db6960259412ab5e8326d56f6ac71`;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}http://newsapi.org/v2/everything?q=${this.state.searchTerm}&language=en&apiKey=ad1db6960259412ab5e8326d56f6ac71`;
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            news: data,
            searchTerm: "",
          });
        })
        .catch((err) => {
          return err;
        });
    }
  };

  render() {
    // console.log(this.state.news);
    return (
      <div className="main-app">
        <NavBar
          value={this.state.searchTerm}
          searchBarChange={this.searchBarChange}
          searchBarSubmit={this.searchBarSubmit}
        />

        <div className="sidebar-newsdetail-container">
          <div className="heading-sidebar-container">
            <h2 className="heading">Weekly Forecast</h2>

            {/* Display the city name */}
            <i className="fas fa-map-marker-alt"></i>
            {this.state.weatherData !== null ? (
              <h3>{this.state.weatherData.city.name}</h3>
            ) : null}

            {/* Looping through the dailyWeather data */}
            <div className="side-bar-container">
              {this.state.dailyWeather.map((arr) => {
                return <SideBar dailyWeather={arr} key={1 + Math.random()} />;
              })}
            </div>
          </div>

          {/* Looping through the received news data */}
          <div className="news-detail-container">
            {this.state.news !== null
              ? this.state.news.articles.map((arr, index) => {
                  return <NewsDetail news={arr} key={1 + Math.random()} />;
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
