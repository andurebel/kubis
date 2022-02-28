import json from "../data.json";
import Card from "./Card";
import { useState } from "react";

export const OurWork = () => {
  const { data } = json;
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <main className="w-full bg-orange-100 flex ">
        <div className="container mx-auto py-10 flex flex-col  justify-center">
          <h1 className="text-2xl font-bold text-center py-10">
            Check out our products
          </h1>
          <div className="text-center">
            <input
              type="text"
              value={searchTerm}
              placeholder="Search..."
              className="p-2 w-3/4 shadow rounded  "
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <ul className="grid md:grid-cols-3 gap-8 p-10">
            {data
              .filter((article) => {
                return article.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              })
              .map((article) => (
                <Card
                  key={article.sku}
                  name={article.name}
                  description={article.description}
                  image={article.main_image}
                />
              ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default OurWork;
