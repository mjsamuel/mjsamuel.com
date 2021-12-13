import * as React from "react";

const projects = [
  {
    name: "1",
    url: "",
  },
  {
    name: "2",
    url: "",
  },
  {
    name: "3",
    url: "",
  },
];

// markup
const Projects = () => {
  return (
    <section>
      <div class="grid grid-cols-3 gap-4 text-center">
        {projects.map((p) => {
          return (
            <a href={p.url}>
              <div className="bg-green text-white rounded">{p.name}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
