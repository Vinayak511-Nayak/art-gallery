import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Object.css";
const Object = () => {
  const { objectid } = useParams();
  const [objectData, setObjectData] = useState({});

  useEffect(() => {
    async function Objectlist() {
      console.log(objectid);
      const responsed = await axios.get(
        `https://api.harvardartmuseums.org/object/${objectid}?apikey=8d1c8a53-95e9-43d2-aee5-2bf8403468ce`
      );
      const response = responsed.data;

      const display = {
        id: response.id,
        classification: response.classification || "Unknown",
        medium: response.medium || "Unknown",
        technique: response.technique || "Unknown",
        culture: response.culture || "Unknown",
        period: response.period || "Unknown",
        century: response.century || "Unknown",
        dimensions: response.dimensions || "Unknown",
        department: response.department || "Unknown",
        division: response.division || "Unknown",
        contact: response.contact || "Unknown",
      };
      setObjectData(display);
    }
    Objectlist();
  }, [objectid]);

  return (
    <div className="objectbody">
      <p className="objectdata">
        <span className="bold-label">Object ID:</span> {objectData.id}
        <span className="bold-label">classification:</span>{" "}
        {objectData.classification}
        <span className="bold-label">Medium:</span> {objectData.medium}
        <span className="bold-label">Technique:</span> {objectData.technique}
        <span className="bold-label">Culture:</span> {objectData.culture}
        <span className="bold-label">Period:</span> {objectData.period}
        <span className="bold-label">Century:</span> {objectData.century}
        <span className="bold-label">Technique:</span> {objectData.technique}
        <span className="bold-label">Dimensions:</span> {objectData.dimensions}
        <span className="bold-label">Department:</span> {objectData.department}
        <span className="bold-label">Division:</span> {objectData.division}
        <span className="bold-label">Contact:</span> {objectData.contact}
      </p>
    </div>
  );
};
export default Object;
