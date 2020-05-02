import React from "react";
import { Consumer } from "./Context";
const NavBar = ({ value, searchBarChange, searchBarSubmit }) => {
  //   return (
  //     <div>
  //       <div className="search-bar">
  //         <form onSubmit={props.searchBarSubmit}>
  //           <input
  //             type="text"
  //             value={props.value}
  //             placeholder="Searchbar Here"
  //             onChange={props.searchBarChange}
  //           />
  //           <button>Search</button>
  //         </form>
  //       </div>
  //     </div>
  //   );

  return (
    <Consumer>
      {context => (
        <div>
          <div className="topnav">
            <div className="nav-links">
              {/* <a className="active" href="#home">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a> */}
              <div className="title-container">
                <h2 className="heading">NEWS BREAKER</h2>
                <p className="sub-heading">
                  Breaking news from around the world
                </p>
              </div>
            </div>

            <div className="search-container">
              <form onSubmit={searchBarSubmit}>
                <input
                  type="text"
                  placeholder="Search latest news"
                  value={value}
                  onChange={searchBarChange}
                />
                <button className="button" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Consumer>
  );
};

export default NavBar;
