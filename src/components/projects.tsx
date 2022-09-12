import * as React from "react";

const projects = [
  {
    name: "die-abolical",
    year: "2022",
    description:
      "a puzzle game where the die with the highest face crushes the other. made using pico-8 in under two days for the 2022 gmtk game jam.",
    url: "https://itch.io/jam/gmtk-jam-2022/rate/1624361",
    image: [],
  },
  {
    name: "adblockchain",
    year: "2020",
    description:
      "a proof of concept for an alterative payment model of the web.",
    url: "https://github.com/mjsamuel/adblockchain",
    image: [],
  },
];

const Projects = () => {
  return (
    <section>
      {projects.map((p) => {
        return (
          <div className="flex flex-col md:grid gap-1 md:gap-8 grid-cols-3 mb-4">
            <h1 className="col-span-1 text-gray">{p.year}</h1>
            <div className="col-span-2">
              <h1>
                <a href={p.url} target="_blank">
                  {p.name} →
                </a>
              </h1>
              <p className="text-gray">{p.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
