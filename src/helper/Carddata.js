import axios from "axios";
import { useEffect, useState } from "react";

const Card_data = () => {
  const [artworks, setArtworks] = useState([]);
  useEffect(() => {
    async function fetchCardData() {
      try {
        const response = await axios.get(
          "https://api.harvardartmuseums.org/object?culture=Uzbek&apikey=8d1c8a53-95e9-43d2-aee5-2bf8403468ce"
        );

        if (response.data && response.data.records) {
          const records = response.data.records;
          const extractedData = records
            .filter((record) => record.primaryimageurl)
            .map((record) => ({
              imageUrl: record.primaryimageurl,
              title: record.title,
              objectid: record.objectid,
              artists:
                (record.people &&
                  record.people.find((arts) => arts.role === "Artist")?.name) ||
                "Unknown Artist",
            }));
          setArtworks(extractedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCardData();
  }, []);
  const extractArtists = (people) => {
    const artists = people
      .filter(
        (person) => person.role === "Artist" || person.role === "Artist after"
      )
      .map((person) => person.displayname)
      .join(", ");
    return artists;
  };

  return artworks;
};

export default Card_data;
