import React, { useState, useEffect } from "react";
import { scaleSqrt, max } from "d3";
import useWorldAtlas from "./hooks/useWorldAtlas";
import useCities from "./hooks/useCities";
import Marks from "./Marks";

const width = 960;
const height = 500;

const App = () => {
  const worldAtlas = useWorldAtlas();
  const cities = useCities();

  if (!worldAtlas || !cities) {
    return <pre>Loading...</pre>;
  }

  console.log(cities);
  const sizeValue = (d) => d.population;
  const maxRadius = 13;

  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius]);

  console.log(sizeScale());
  return (
    <>
      <h1>World Population Density</h1>
      <svg width={width} height={height}>
        <Marks
          worldAtlas={worldAtlas}
          cities={cities}
          sizeScale={sizeScale}
          sizeValue={sizeValue}
        />
      </svg>
    </>
  );
};

export default App;
