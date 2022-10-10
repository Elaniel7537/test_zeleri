import React from "react";

const SearchBox: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="mb-4">
        <input
          className="font-Montserrat font-lightshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Buscardor de Ciudad.."
        />
      </div>
    </div>
  );
};

export default SearchBox;
