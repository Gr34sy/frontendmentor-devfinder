import searchIcon from "../assets/icon-search.svg";
import { useState } from "react";

export function SearchBar({ noResults, onClick }) {
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    if (typeof onClick === "function") {
      onClick(inputValue);
    }
  }

  return (
    <div className="pl-2 sm:pl-4 py-2 pr-2 bg-white-200 dark:bg-slate-800 rounded-lg shadow-sm shadow-blue-700 dark:shadow-none grid sm:gap-3 grid--searchbar">
      <label
        htmlFor="name"
        className="grid gap-1 sm:gap-2  items-center hover:cursor-pointer"
      >
        <img src={searchIcon} alt="icon of magnifying glass" />
        <input
          id="name"
          type="text"
          className="bg-white-200 dark:bg-slate-800 sm:text-lg self-stretch dark:outline-none active:outline-blue-400 focus:outline-blue-400"
          placeholder="Search for github username..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {noResults && <span>No Results</span>}
      </label>
      <button className="py-3 px-1 sm:px-5 bg-blue-600 hover:bg-blue-400 border-none text-white-100 sm:text-lg rounded-lg" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
