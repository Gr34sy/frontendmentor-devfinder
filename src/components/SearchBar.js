
export function SearchBar({value, onChange}) {

    function handleChange(e){
        if(typeof onChange === 'function'){
            onChange(e.target.value);
        }
    }

  return (
    <div className="pl-5 py-3 bg-white-200 dark:bg-slate-800 rounded-lg shadow-sm shadow-blue-700 dark:shadow-none grid grid-colums-1fr-auto">
      <label htmlFor="name" className="hover:cursor-pointer">
        <input id="name" type="text" className="bg-white-200 dark:bg-slate-800" value={value} onChange={handleChange}/>
      </label>
      {/* <span>No Results</span> */}
      <button></button>
    </div>
  );
}
