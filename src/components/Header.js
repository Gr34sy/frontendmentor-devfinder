export function Header({ onClick }) {
  function handleClick() {
    if (typeof onClick === "function") {
      onClick();
    }
  }

  return (
    <header className="header pb-1 grid">
      <h1>devfinder</h1>
      <button onClick={handleClick} className="pb-1">
        Switch
      </button>
    </header>
  );
}
