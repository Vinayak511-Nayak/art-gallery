import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Culture.css";
const Place = (props) => {
  const { placeName } = useParams();
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    async function placeData() {
      try {
        const response = await axios.get(
          `https://api.harvardartmuseums.org/object?place=${placeName}&apikey=8d1c8a53-95e9-43d2-aee5-2bf8403468ce`
        );

        if (response.data && response.data.records) {
          const records = response.data.records;
          const extractedData = records
            .filter((record) => record.primaryimageurl)
            .map((record) => ({
              objectid: record.objectid,
              imageUrl: record.primaryimageurl,
              title: record.title,
              artists:
                (record.people &&
                  record.people.find((arts) => arts.role === "Artist")?.name) ||
                "Unknown Artist",
            }));
          setCombinedData(extractedData);
        }
      } catch (error) {
        console.error(error);
      }
    }

    placeData();
  }, [placeName]); // Run effect whenever culturename changes

  return (
    <div className="artwork-container">
      {combinedData.map((data, index) => (
        <div key={index} className="card">
          {data.title && <h1>{data.title}</h1>}
          {data.imageUrl && (
            <a href={`/object/${data.objectid}`}>
              <img className="image" src={data.imageUrl} alt={`Art ${index}`} />
            </a>
          )}
          {data.artists && <h2>{data.artists}</h2>}
        </div>
      ))}
    </div>
  );
};

export default Place;
