import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

const Marks = ({ data: { countries, interiors } }) => (
  <g className="marks">
    <path className="sphere" d={path({ type: "Sphere" })}></path>
    <path className="graticule" d={path(graticule())} />
    {countries.features.map((feature) => (
      <path className="country" d={path(feature)} key={feature.id} />
    ))}
    <path className="interior" d={path(interiors)} />
  </g>
);

export default Marks;
