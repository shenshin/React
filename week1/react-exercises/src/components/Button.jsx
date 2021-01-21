import React from 'react';

const Button = ({ addOne, reset }) => (
  <>
    <button type="button" onClick={addOne}>
      Add 1!
    </button>
    <button type="button" onClick={reset}>
      Reset
    </button>
  </>
);

export default Button;
