import React from "react";
import { Consumer } from "./Context";

// This component contains the title, photo, author and other information.

const NewsDetail = props => {
  return (
    //   the content is wrapped by a link tag to make it clickable
    <Consumer>
      {context => (
        <a className="news-detail-link" href={props.news.url} target="_blank">
          {props.news !== null ? (
            // this container below contains the title and image to make positioning easier

            <div className="news-info-container">
              <div className="news-title">
                <h3>{props.news.title}</h3>
              </div>
              <div className="image-container">
                <img src={props.news.urlToImage} alt={props.news.title}></img>
              </div>
            </div>
          ) : null}
        </a>
      )}
    </Consumer>
  );
};
export default NewsDetail;
