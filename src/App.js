import "./App.css";

import { Box } from "./components/Box";
import { Layout } from "./components/Layout";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";

import { useState } from "react";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [user, setUser] = useState(false);

  async function searchFor(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setUser("no results");

          setTimeout(() => {
            setUser(false);
          }, 10 * 1000);
        }
      })
      .then((data) => {
        console.log(data);

        setUser({
          avatar: data.avatar_url,
          bio: data.bio,
          email: data.email,
          createdAt: new Date(data.created_at),
          login: data.login,
          location: data.location,
          url: data.url,
          name: data.name,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          twitterName: data.twitter_username,
          company: data.company,
        });
        console.log(data);
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
        {user && user !== "no results" && <Box user={user} />}
      </Layout>
    </div>
  );
}

export default App;
