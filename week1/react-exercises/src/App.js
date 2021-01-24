import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';
import GuaranteeCards from './components/GuaranteeCards';
import Counter from './components/Counter';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
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
