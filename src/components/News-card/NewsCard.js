import { Typography } from "@mui/material";
import React from "react";

const NewsCard = ({ newsitem }) => {
  console.log(newsitem);
  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        margin: "15px 10px 15px 10px",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <div>
        <img src={newsitem.urlToImage} height="250px" width="400px" />
      </div>
       
      <div style={{marginLeft:'15px'}}>
        <div>
          <div style={{marginBottom:'10px'}}>{newsitem.title}</div>
          <span >
            <a href={newsitem.url} target="_blank">
              <b style={{marginRight:'10px'}}>{newsitem.source.name}</b>
              by {newsitem.author ? newsitem.author : "unknown"}
            </a>
          </span>
        </div>
        <div style={{marginTop:'10px'}}>{newsitem.description}</div>
        <div style={{marginTop:'20px'}}><p>Read more .....</p></div>
      </div>
     
    </div>
  );
};

export default NewsCard;
