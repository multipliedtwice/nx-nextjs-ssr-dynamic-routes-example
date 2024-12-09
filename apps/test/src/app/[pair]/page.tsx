import * as react from "react"
export const runtime = 'edge';

export default async function CurrencyPairPage({ params }: any) {
  const { pair } = params;
  const [base, target] = pair.split('_');
  console.log('process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY :>> ', process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY);
  const url = `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY}/pair/${base}/${target}`;

  let data = null;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    data = await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return <p>Error fetching data for {pair}</p>;
  }
  

  return (
    <>
      <a href="/">
        Back 
      </a>
    
      <div style={{marginTop: '1rem'}}>
        <h1>Exchange Rate: {base} to {target}</h1>
        <p>1 {base} = {data.conversion_rate} {target}</p>
      </div>
    </>
  );
}
