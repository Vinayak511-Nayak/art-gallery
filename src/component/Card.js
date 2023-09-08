import axios from "axios";
import React, { useState } from "react";
import "./Card.css";

// Inside Card component
function Card({ combinedData }) {
  return (
    <div className="image-container">
      {combinedData.map((data, index) => {
        return (
          <div key={index} className="card">
            <h1>{data.title}</h1>
            {data.imageUrl && (
              <a href={`/object/${data.objectid}`}>
                <img
                  className="image"
                  src={data.imageUrl}
                  alt={`Art ${index}`}
                />
              </a>
            )}
            {data.artists && <h2>{data.artists}</h2>}
          </div>
        );
      })}
    </div>
  );
}

export default Card;
