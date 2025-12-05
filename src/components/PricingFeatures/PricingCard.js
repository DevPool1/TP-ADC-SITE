import React from 'react';


export default function PricingCard({ title, price, features }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p className={styles.price}>{price}</p>
      <ul>
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <button>Escolher</button>
    </div>
  );
}

