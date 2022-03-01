import Card from "./Card";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Input from "./Input";

export const OurWork = () => {
  const { data, searchTerm } = useContext(AppContext);

  return (
    <>
      <main className="w-full bg-orange-100 flex ">
        <div className="container mx-auto py-10 flex flex-col  justify-center">
          <h1 className="text-2xl font-bold text-center py-10">
            Check out our products
          </h1>

          <div className="mb-6 w-3/4 group mx-auto ">
            <Input />
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
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
