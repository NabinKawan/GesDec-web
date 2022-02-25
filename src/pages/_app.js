/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import { disableLogInProduction } from '../utils/disable_console';
import PredictionProvider from '../context/prediction/PredictionProvider.tsx';
import FilterProvider from '../context/filter/FilterProvider.tsx';

disableLogInProduction();
function MyApp({ Component, pageProps }) {
  return     <PredictionProvider><FilterProvider><Component {...pageProps} /></FilterProvider></PredictionProvider> 
}

export default MyApp
