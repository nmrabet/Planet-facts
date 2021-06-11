import React from "react";
import data from "../data/data.json";
import Planet from "./PlanetDetails";

const loadedData = JSON.stringify(data);
const json = JSON.parse(loadedData);

export default function Planets() {
  return (
    <div>
      {json.map((detail) => (
        <Planet
          name={detail.name}
          content={detail.overview.content}
          source={detail.overview.source}
          structureOverview={detail.structure.overview}
          structureSource={detail.structure.source}
          geologyContent={detail.geology.content}
          geologySource={detail.geology.source}
          rotation={detail.rotation}
          revolution={detail.revolution}
          radius={detail.radius}
          temperature={detail.temperature}
          planetImg={detail.images.planet}
          internal={detail.images.internal}
          geologyImg={detail.images.geology}
        />
      ))}
    </div>
  );
}
