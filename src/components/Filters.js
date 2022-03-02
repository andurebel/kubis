import { useContext, useState } from "react";

import { AppContext } from "../context/AppContext";
import Button from "./Button";

export const Filters = () => {
  const { data } = useContext(AppContext);
  const categoriesList = data
    .map((item) => item.categories)
    .map((item) => item[0].name);
  const [categoryData, setCategoryData] = useState([...categoriesList]);

  const filteredCategories = data.filter((article) =>
    article.categories[0].name.includes("Hoodie" || "Eco"),
  );

  console.log(categoryData);

  const filterResult = (categoryItem) => {
    const result = filteredCategories.filter((currentData) => {
      return currentData.categories[0].name === categoryItem;
    });
    setCategoryData(result);
    console.log(result);
  };

  return (
    <>
      <div className="container mx-auto w-3/4 py-10 flex flex-col  justify-center">
        <h2>Filter by:</h2>
        <div>
          <Button
            name="Hoodies & Sweatshirts"
            handleFilter={() => filterResult("Hoodies")}
          />
          <Button
            name="Eco Friendly"
            handleFilter={() => filterResult("Eco Friendly")}
          />
        </div>
        <div>{categoryData.map((category) => category.name)}</div>
      </div>
    </>
  );
};

export default Filters;
