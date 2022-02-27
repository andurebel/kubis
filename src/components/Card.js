import { useState } from "react";

export const Card = ({ id, name, description, image }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDescription = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <li className="border border-gray-400 text-center p-8 rounded-xl shadow-xl bg-gradient-to-tr from-orange-500 to-purple-700">
        <h1 className="text-xl text-white ">{name}</h1>

        <div className="pt-8">
          <img src={image} alt="alt img" className="rounded" />
        </div>
        <div className="h-80 flex flex-col gap-8 items-center justify-center">
          {isVisible ? (
            <>
              <p className="mt-8">{description}</p>
              <button
                className="text-white bg-purple-700 p-4 rounded-xl shadow-xl "
                onClick={toggleDescription}
              >
                Hide Details
              </button>
            </>
          ) : (
            <button
              className="text-white bg-purple-700 p-8 rounded-xl shadow-xl "
              onClick={toggleDescription}
            >
              Show more
            </button>
          )}
        </div>
      </li>
    </>
  );
};

export default Card;
