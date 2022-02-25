import Head from 'next/head';
import Homepage from '../sections/Homepage';
import ModelSummary from '../sections/ModelSummary';
export default function Home() {
  return (
    <>
      <Head>
        <title>GesDec - Gesture Detection</title>
      </Head>
      <div className="bg-gray-200 font-sans">
        <Homepage />
        <ModelSummary />
      </div>
    </>
  );
}
