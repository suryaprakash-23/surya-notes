import React from "react";
import { useParams } from "react-router-dom";

export default function Subject() {
  const { name } = useParams();

  const units = [
    { title: "Unit 1", file: `/pdfs/${name}/unit1.pdf` },
    { title: "Unit 2", file: `/pdfs/${name}/unit2.pdf` },
    { title: "Unit 3", file: `/pdfs/${name}/unit3.pdf` },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{name.toUpperCase()}</h1>

      {units.map((unit, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <a href={unit.file} target="_blank">
            {unit.title}
          </a>
        </div>
      ))}
    </div>
  );
}
