import Card from "./Card";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Input from "./Input";

export const OurWork = () => {
  const { data, searchTerm, setSelected } = useContext(AppContext);

  const filteredData = data.filter((article) =>
    article.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <main className="w-full bg-orange-100 flex ">
        <div className="container mx-auto py-10 flex flex-col  justify-center">
          <h1 className="text-2xl font-bold text-center py-10">
            Check out our products
          </h1>

          <div className="mb-6 w-3/4 group mx-auto ">
            <Input filteredData={filteredData} />
          </div>
          {filteredData.length === 0 && (
            <>
              <h1 className="text-center text-xl mb-6">No matches found</h1>
              <div>
                Try some sugestions:
                {data.map((article) => (
                  <>
                    <p
                      key={article.sku}
                      onClick={() => {
                        setSelected(true);
                      }}
                      className="bg-red-200 inline-block m-2 py-2 px-4 rounded-full cursor-pointer hover:bg-purple-700 hover:text-white hover:shadow-xl"
                    >
                      {article.name}
                    </p>
                  </>
                ))}
              </div>
            </>
          )}
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
            {filteredData.map((article) => (
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
