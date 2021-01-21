import React from 'react';
import { v4 as uuid } from 'uuid';
import Hobbies from './Hobbies';

const HobbyList = () => {
  /* 
  Put the hobbies variable into the <HobbyList> component.
  */
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
    // convert to array of objects, add key property
  ].map((hobby) => ({ key: uuid(), hobby }));
  return (
    <>
      <h3>Exercise 1: Extreme hobbies</h3>
      <ul>
        {hobbies
          /* 
          In the return statement of the <HobbyList> use the map() function to return an instance of <Hobby>
          */
          .map((item) => (
            /* Pass down the hobby as a prop (don't forget to add the key prop as well!) */
            <Hobbies key={item.key} hobby={item.hobby} />
          ))}
      </ul>
    </>
  );
};

export default HobbyList;
