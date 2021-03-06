import { useContext } from "react";

import { AppContext } from "../context/AppContext";

export const Input = ({ filteredData }) => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className={`block ${
          filteredData.length === 0
            ? "focus:border-red-600"
            : "focus:border-blue-600"
        } py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer`}
        placeholder="Enter Search here"
      />
      {searchTerm && (
        <button
          className="text-white bg-purple-700 hover:bg-purple-600 mt-8  px-4 py-2 text-xl rounded-xl hover:shadow "
          onClick={() => setSearchTerm("")}
        >
          Clear Search
        </button>
      )}
    </>
  );
};

export default Input;
