(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),s=t.n(c),l=t(6),i=t(3),o=t(4),m=t(7),h=t(5),u=t(8),p=(t(14),r.a.createContext().Consumer),d=function(e){return r.a.createElement(p,null,(function(a){return r.a.createElement("a",{className:"news-detail-link",href:e.news.url,target:"_blank"},null!==e.news?r.a.createElement("div",{className:"news-info-container"},r.a.createElement("div",{className:"news-title"},r.a.createElement("h3",null,e.news.title)),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:e.news.urlToImage,alt:e.news.title}))):null)}))},f=function(e){var a=e.value,t=e.searchBarChange,n=e.searchBarSubmit;return r.a.createElement(p,null,(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"topnav"},r.a.createElement("div",{className:"nav-links"},r.a.createElement("div",{className:"title-container"},r.a.createElement("h2",{className:"heading"},"NEWS BREAKER"),r.a.createElement("p",{className:"sub-heading"},"Latest news from around the world"))),r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{onSubmit:n},r.a.createElement("input",{type:"text",placeholder:"Search latest news",value:a,onChange:t}),r.a.createElement("button",{className:"button",type:"submit"},r.a.createElement("i",{className:"fas fa-search"}))))))}))},E=function(e){var a=e.dailyWeather,t="http://openweathermap.org/img/wn/".concat(a.weather[0].icon,".png");return r.a.createElement("div",{className:"sidebar-content"},r.a.createElement("p",{className:"weather-date"},a.dt_txt.split(" ").shift()),r.a.createElement("div",{className:"icons-description-container"},r.a.createElement("i",{className:"icons"},r.a.createElement("img",{src:t})),r.a.createElement("p",null,a.weather[0].description)),r.a.createElement("p",null,Math.floor(a.main.temp)," ",r.a.createElement("span",null,"\u2103")))},w=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={news:null,searchTerm:"",weatherData:null,dailyWeather:[]},t.searchBarChange=function(e){t.setState({searchTerm:e.target.value})},t.searchBarSubmit=function(e){if(e.preventDefault(),""!==t.state.searchTerm){var a="".concat("https://cors-anywhere.herokuapp.com/","http://newsapi.org/v2/everything?q=").concat(t.state.searchTerm,"&language=en&apiKey=ad1db6960259412ab5e8326d56f6ac71");fetch(a).then((function(e){return e.json()})).then((function(e){t.setState({news:e,searchTerm:""})})).catch((function(e){return e}))}},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="https://cors-anywhere.herokuapp.com/",t="".concat(a,"http://newsapi.org/v2/top-headlines?country=us&apiKey=ad1db6960259412ab5e8326d56f6ac71");fetch(t).then((function(e){return e.json()})).then((function(a){e.setState({news:a})})).catch((function(e){return console.log(e)}));fetch("https://api.ipgeolocation.io/ipgeo?apiKey=b87af68decb94ba1b78bd2cc01f274e4&fields=geo").then((function(e){return e.json()})).then((function(t){!function(t,n){var r="".concat(a,"http://api.openweathermap.org/data/2.5/forecast?lat=").concat(t,"&lon=").concat(n,"&units=metric&appid=da1c9acfac0a6440fe94733904919962");fetch(r).then((function(e){return e.json()})).then((function(a){e.setState({weatherData:a})})).catch((function(e){return e}))}(t.latitude,t.longitude)})).catch((function(e){console.log(e)}));setTimeout((function(){for(var a=e.state.weatherData.list,t=0;t<a.length;t+=8){var n=Object(l.a)(e.state.dailyWeather);n.push(a[t]),e.setState({dailyWeather:n})}}),3e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-app"},r.a.createElement(f,{value:this.state.searchTerm,searchBarChange:this.searchBarChange,searchBarSubmit:this.searchBarSubmit}),r.a.createElement("div",{className:"sidebar-newsdetail-container"},r.a.createElement("div",{className:"heading-sidebar-container"},r.a.createElement("h2",{className:"heading"},"Weekly Forecast"),r.a.createElement("i",{className:"fas fa-map-marker-alt"}),null!==this.state.weatherData?r.a.createElement("h3",null,this.state.weatherData.city.name):null,r.a.createElement("div",{className:"side-bar-container"},this.state.dailyWeather.map((function(e){return r.a.createElement(E,{dailyWeather:e,key:1+Math.random()})})))),r.a.createElement("div",{className:"news-detail-container"},null!==this.state.news?this.state.news.articles.map((function(e,a){return r.a.createElement(d,{news:e,key:1+Math.random()})})):null)))}}]),a}(n.Component);s.a.render(r.a.createElement(w,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.98d88295.chunk.js.map