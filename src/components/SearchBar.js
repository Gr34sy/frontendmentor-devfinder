import searchIcon from "../assets/icon-search.svg";

export function SearchBar({value, displayNoResults, onChange}) {

    function handleChange(e){
        if(typeof onChange === 'function'){
            onChange(e.target.value);
        }
    }

  return (
    <div className="pl-4 py-2 pr-2 bg-white-200 dark:bg-slate-800 rounded-lg shadow-sm shadow-blue-700 dark:shadow-none grid gap-3 grid--searchbar">
      <label htmlFor="name" className="grid gap-2  items-center hover:cursor-pointer">
        <img src={searchIcon} alt="icon of magnifying glass"/>
        <input id="name" type="text" className="bg-white-200 dark:bg-slate-800 text-lg self-stretch dark:outline-none active:outline-blue-400 focus:outline-blue-400" value={value} onChange={handleChange}/>
        {displayNoResults && <span>No Results</span>}
      </label>
      <button className="py-3 px-5 bg-blue-600 hover:bg-blue-400 border-none text-white-100 text-lg rounded-lg">
        Search
      </button>
    </div>
  );
}
