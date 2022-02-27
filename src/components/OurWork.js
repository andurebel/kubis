import json from "../data.json";
import Card from "./Card";
import Form from "./Form";

export const OurWork = () => {
  const { data } = json;

  return (
    <>
      <main className="w-full bg-orange-100">
        <div className="container mx-auto py-10 ">
          <h1 className="text-2xl font-bold text-center py-10">
            Check out our products
          </h1>
          <Form data={data} />
          <ul className="grid md:grid-cols-3 gap-8 p-10">
            {data.map((article) => (
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
