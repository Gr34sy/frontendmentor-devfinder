import "./App.css";
import { Box } from "./components/Box";
import { Layout } from "./components/Layout";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [name, setName] = useState("");

  function toggleMode() {
    setDarkmode((prevMode) => !prevMode);
  }

  return (
    <div className={darkmode ? "App dark" : "App"}>
      <Layout>
        <Header onClick={toggleMode} darkmode={darkmode}/>
        <SearchBar value={name} onChange={setName}/>
        <Box />
      </Layout>
    </div>
  );
}

export default App;
