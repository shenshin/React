import React from 'react';

const Buttons = ({ addOne, reset }) => (
  <>
    <button type="button" onClick={addOne}>
      Add 1!
    </button>
    <button type="button" onClick={reset}>
      Reset
    </button>
  </>
);

export default Buttons;
