import React, { useState, useEffect } from "react";
import { json } from "d3";
import { feature, mesh } from "topojson";

const jsonUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then((topology) => {
      const { countries } = topology.objects;
      setData({
        countries: feature(topology, countries),
        interior: mesh(topology, countries, (a, b) => a != b),
      });
    });
  }, []);

  return data;
};

export default useData;
