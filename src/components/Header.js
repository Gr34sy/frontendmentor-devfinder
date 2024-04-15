import moon from '../assets/icon-moon.svg';
import sun from '../assets/icon-sun.svg';

export function Header({ onClick, darkmode }) {
  function handleClick() {
    if (typeof onClick === "function") {
      onClick();
    }
  }

  return (
    <header className="header pb-2 grid">
      <h1>devfinder</h1>
      <button onClick={handleClick} 
      className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase ${darkmode ? 'text-blue-500' : 'text-slate-950'}`}>
        <p>{darkmode ? "Light" : "Dark"}</p>
        <img src={darkmode ? sun : moon } width="20px" height="20px" alt="icon"/>
      </button>
    </header>
  );
}
