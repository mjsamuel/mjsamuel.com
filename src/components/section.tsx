import * as React from "react";

const Section = ({
  title = "",
  items = [],
}: {
  title: string;
  items: {
    heading1: string;
    heading2: string;
    description?: string;
    url: string;
    images?: string[];
  }[];
}) => {
  return (
    <section className="p-6 md:px-24 md:mb-4">
      <h1 className="text-2xl font-bold mb-5">{title}</h1>
      {items.map((i) => {
        return (
          <div className="flex flex-col md:grid gap-1 md:gap-8 grid-cols-3 mb-4">
            <h1 className="col-span-1 text-gray">{i.heading1}</h1>
            <div className="col-span-2">
              <h1>
                <a href={i.url} target="_blank">
                  {i.heading2} →
                </a>
              </h1>
              {i.description && <p className="text-gray">{i.description}</p>}
              {i.images?.map(() => {})}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Section;
