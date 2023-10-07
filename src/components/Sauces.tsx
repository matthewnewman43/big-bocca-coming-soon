import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Sauces = () => {
  const { sauces } = config;

  return (
    <section className={`bg-background py-8`} id="sauces">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-border text-primary`}
        >
          {sauces.title}
        </h1>
        <Divider />
        <img className="h-6/6" src={sauces?.img} alt={sauces?.alt} />
      </div>
    </section>
  );
};

export default Sauces;
