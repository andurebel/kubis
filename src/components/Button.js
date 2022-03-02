export const Button = (props) => {
  return (
    <button
      className="text-white bg-purple-700 hover:bg-purple-600 mt-8  px-4 py-2 mr-4 text-xl rounded-xl hover:shadow "
      onClick={props.handleFilter}
    >
      {props.name}
    </button>
  );
};

export default Button;
