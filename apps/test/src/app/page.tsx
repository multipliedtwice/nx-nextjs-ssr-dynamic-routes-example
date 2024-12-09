// app/page.js

import Link from 'next/link';

export default function HomePage() {
  const currencyPairs = ['USD_EUR', 'USD_GBP', 'USD_JPY'];

  return (
    <div>
      <h1>Currency Exchange Rates</h1>
      <ul>
        {currencyPairs.map(pair => (
          <li key={pair}>
            <Link href={`/${pair}`}>{pair.replace('_', ' to ')}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}