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
      </Layout>
    </div>
  );
}

export default App;
