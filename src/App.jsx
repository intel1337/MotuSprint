import { useState } from 'react';
import './App.css';
import LigneMotus from './components/Ligne.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid">
        <LigneMotus />
        <LigneMotus />
        <LigneMotus />
        <LigneMotus />
        <LigneMotus />
      </div>
    </>
  );
}

export default App;
