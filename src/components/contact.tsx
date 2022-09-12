import * as React from "react";

const links = [
  {
    name: "github",
    username: "mjsamuel",
    url: "https://github.com/mjsamuel",
  },
  {
    name: "email",
    username: "hi@mjsamuel.com",
    url: "mailto:hi@mjsamuel.com",
  },
];

const Contact = () => {
  return (
    <section>
      {links.map((l) => {
        return (
          <div className="flex flex-col md:grid gap-1 md:gap-8 grid-cols-3 mb-4">
            <h1 className="col-span-1 text-gray">{l.name}</h1>
            <div className="col-span-2">
              <h1>
                <a href={l.url} target="_blank">
                  {l.username} →
                </a>
              </h1>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Contact;
