/*
  Inside <Button> create a <button> with the text Add 1! and onClick attribute
  Pass down the count state variable to <Count>, and the setCount to <Button>
  Inside <Counter>, declare a variable called feedback above the
  return statement. Give this variable a ternary operator value: if
  count is higher than 10 it should display the string "It's higher
  than 10!", else it displays "Keep counting..."
  Test out if it works by importing <Counter> into the top level component, which is <App>

*/
import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
  /*
    Inside <Counter> define a state variable called count (initialized
    with value 0) and state handler called setCount
  */
  const [count, setCount] = useState(0);
  // "Add one!" and "Reset" buttons handlers
  const addOne = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  /*
    Inside <Counter>, declare a variable called feedback above the return
    statement. Give this variable a ternary operator value: if count is
    higher than 10 it should display the string "It's higher than 10!",
    else it displays "Keep counting..."
  */
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
  return (
    <>
      <h3>Exercise 3: It&apos;s higher than 10!</h3>
      {/* Pass down the count state variable to <Count> */}
      <Count count={count} />
      <p>{feedback}</p>
      {/* Pass down setCount to <Button> */}
      <Button addOne={addOne} reset={reset} />
    </>
  );
};

export default Counter;
