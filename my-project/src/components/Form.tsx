const Form = () => {
  return (
    <form className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <label className="text-gray-700">
        Name:
        <input
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="text-gray-700">
        Email:
        <input
          type="email"
          className="mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
