import React from 'react';
import { v4 as uuid } from 'uuid';
import Guarantee from './Guarantee';

/* 
Create a functional component called <Guarantee>
Instantiate it 3 times
Give each component 3 props: an img, title and description
*/

const guarantees = [
  {
    key: uuid(),
    img: 'f-delivery',
    title: 'Free shipping',
    description:
      'Delectus ipsam at harum voluptates mollitia saepe incidunt dignissimos libero sapiente ut modi laboriosam eveniet reiciendis quasi repellendus rem, eius explicabo officiis nulla veritatis!',
  },
  {
    key: uuid(),
    img: 'coin',
    title: '100% Money back',
    description:
      'Explicabo beatae neque tenetur, quis perspiciatis dolorum sint repellat id earum sunt, dolorem ad fuga incidunt vel non ex pariatur, ab eligendi natus!',
  },
  {
    key: uuid(),
    img: 'chat',
    title: 'Online support',
    description:
      'Distinctio sit aut veritatis porro totam at illo molestiae nesciunt reprehenderit!',
  },
];

const GuaranteeCards = () => (
  <>
    <h3>Exercise 2: Perfect customer service.</h3>
    <div style={{ display: 'flex' }}>
      {
        /* 
        Pass down to each component the appropriate content. 
        */
        guarantees.map((item) => (
          <Guarantee
            key={item.key}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))
      }
    </div>
  </>
);

export default GuaranteeCards;
