import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

const Marks = ({
  worldAtlas: { countries, interiors },
  cities,
  sizeScale,
  sizeValue,
}) => (
  <g className="marks">
    <path className="sphere" d={path({ type: "Sphere" })}></path>
    <path className="graticule" d={path(graticule())} />
    {countries.features.map((feature) => (
      <path className="country" d={path(feature)} key={feature.id} />
    ))}
    <path className="interiors" d={path(interiors)} />
    {cities.map((d) => {
      const [x, y] = projection([d.lng, d.lat]);

      return <circle cx={x} cy={y} r={sizeScale(sizeValue(d))} />;
    })}
  </g>
);

export default Marks;
