export const Form = ({ data }) => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <form className="flex items-center justify-around " onSubmit={submitForm}>
      <input className="w-1/2 p-2" placeholder="Search" type="text" />
      <button
        type="submit"
        className="px-8 py-4 bg-gradient-to-tr from-orange-500 to-purple-700 rounded-full"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
