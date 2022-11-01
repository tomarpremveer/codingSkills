import { useState } from "react";
import './App.css';
import ButtonContainer from './components/ButtonContainer';
import CounterContainer from './components/CounterContainer';

function App() {
    const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <CounterContainer count={count} />
      <ButtonContainer updateState={setCount} />
    </div>
  );
}

export default App;
