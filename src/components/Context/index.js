import React, { Component } from "react";

const NewsHeadlineContext = React.createContext();

//export const { Provider, Consumer } = NewsHeadlineContext;

//export const Provider = NewsHeadlineContext.Provider;
// export const Consumer = NewsHeadlineContext.Consumer;

// export class Provider extends Component {
//   state = {
//     news: null,
//     searchTerm: "",
//     weatherData: null,
//     dailyWeather: []
//   };

//   componentDidMount() {
//     // Getting the news data
//     const api =
//       "http://newsapi.org/v2/top-headlines?country=us&apiKey=ad1db6960259412ab5e8326d56f6ac71";

//     fetch(api)
//       .then(response => response.json())
//       .then(data => {
//         //const newNews = this.state.news.push(data);
//         this.setState({
//           news: data
//         });
//       })
//       .catch(err => console.log(err));

//     // Getting the weather data
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         let { latitude, longitude } = position.coords;
//         const api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=da1c9acfac0a6440fe94733904919962`;
//         fetch(api)
//           .then(response => {
//             return response.json();
//           })
//           .then(data => {
//             this.setState({
//               weatherData: data
//             });
//           })
//           .catch(err => {
//             return err;
//           });
//       });
//     }

//     // Get daily weather by creating a function which loops through the weather list array and select every 8th item, since thats when the data for a new day begins. (it shows a 3 hourly weather info for 5 days)
//     const getDailyWeather = () => {
//       // Did not wrap the below code block in an if statement because of the 3 secs delay from setTimeout
//       let result = this.state.weatherData.list;
//       for (let i = 0; i < result.length; i = i + 8) {
//         let weather = [...this.state.dailyWeather];
//         weather.push(result[i]);
//         this.setState({
//           dailyWeather: weather
//         });
//       }
//     };
//     setTimeout(getDailyWeather, 4000);
//   }

//   searchBarChange = e => {
//     this.setState({
//       searchTerm: e.target.value
//     });
//   };

//   searchBarSubmit = e => {
//     e.preventDefault();
//     if (this.state.searchTerm !== "") {
//       // const api = `http://newsapi.org/v2/top-headlines?country=us&q=${this.state.searchTerm}&apiKey=ad1db6960259412ab5e8326d56f6ac71`;
//       const api = `http://newsapi.org/v2/everything?q=${this.state.searchTerm}&language=en&apiKey=ad1db6960259412ab5e8326d56f6ac71`;
//       fetch(api)
//         .then(response => response.json())
//         .then(data => {
//           this.setState({
//             news: data,
//             searchTerm: ""
//           });
//         })
//         .catch(err => {
//           return err;
//         });
//     }
//   };
//   render() {
//     return (
//       <NewsHeadlineContext.Provider
//         value={{
//           value: this.state.searchTerm,
//           changeEvents: {
//             searchBarChange: this.searchBarChange,
//             searchBarSubmit: this.searchBarSubmit
//           },
//           dailyWeather: this.state.dailyWeather.map(arr => {
//             return arr;
//           }),
//           news:
//             this.state.news !== null
//               ? this.state.news.articles.map((arr, index) => {
//                   return arr;
//                 })
//               : null
//         }}
//       >
//         {this.props.children}
//       </NewsHeadlineContext.Provider>
//     );
//   }
// }

export const Consumer = NewsHeadlineContext.Consumer;
