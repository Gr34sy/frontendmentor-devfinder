import "./App.css";

import { Box } from "./components/Box";
import { Layout } from "./components/Layout";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";

import { useState } from "react";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [user, setUser] = useState(true);

  async function searchFor(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setUser("no results");

          setTimeout(() => {
            setUser(false);
          }, 2000);
        } else {
          setUser(data);
          console.log(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function toggleMode() {
    setDarkmode((prevMode) => !prevMode);
  }

  return (
    <div className={darkmode ? "App dark" : "App"}>
      <Layout>
        <Header onClick={toggleMode} darkmode={darkmode} />
        <SearchBar
          noResults={user === "no results" ? true : false}
          onClick={searchFor}
        />
        {user && <Box user={user} />}
      </Layout>
    </div>
  );
}

export default App;
