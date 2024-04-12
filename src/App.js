import './App.css';
import { Layout } from './components/Layout';
import { useState } from 'react';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  function toggleMode(){
    setDarkmode((prevMode) => !prevMode);
  }

  return (
    <div className={darkmode ? "App dark" : "App" }>
      <Layout>
          <button onClick={toggleMode}>Switch</button>
          <h1>Dupa</h1>
          <h2>Dupa</h2>
          <h3>Dupa</h3>
          <h4>Dupa</h4>
      </Layout>
    </div>
  );
}

export default App;
