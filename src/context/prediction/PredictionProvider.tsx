import React, { useRef, useState } from 'react';
import predictionContext from './PredictionContext';

export default function PredictionProvider({ children }) {
  const [isStart, setStart] = useState(false);
  const [prediction, setPrediction] = useState('');
  const _accuracy = useRef(0);
  const [val, notify] = useState(false);
  let _predictions = [];

  const startPrediction = () => {
    setStart(!isStart);
  };

  const insertPrediction = (prediction, accuracy) => {
    _predictions.push(prediction);
    console.log(accuracy);
    _accuracy.current = accuracy;
    setPrediction(prediction);
  };

  const clearPredictions = () => {
    _predictions = [];
    setPrediction('');
  };

  const getPredictions = () => {
    return _predictions;
  };

  const getAccuracy = () => _accuracy.current;
  return (
    <predictionContext.Provider
      value={{
        isStart,
        val,
        prediction,
        notify,
        startPrediction,
        insertPrediction,
        clearPredictions,
        getPredictions,
        getAccuracy,
      }}
    >
      {children}
    </predictionContext.Provider>
  );
}
