import React, { useState, useEffect } from "react";
// import {  } from "d3";
import useData from "./useData";
import Marks from "./Marks";

const width = 960;
const height = 500;

const App = () => {
  const data = useData();
  console.log(data);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  );
};

export default App;
