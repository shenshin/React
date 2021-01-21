import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';
import GuaranteeCards from './components/GuaranteeCards';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* Exercise 1 */}
      <HobbyList />
      {/* Exercise 2 */}
      <GuaranteeCards />
      {/* Exercise 3 */}
      <Counter />
    </div>
  );
}

export default App;
