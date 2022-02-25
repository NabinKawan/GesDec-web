import { ApplicationDto } from './ApplicationDto';

export type PredictionContextDto = {
  isStart: boolean;
  startPrediction: () => null;
  insertPrediction: (prediction: string, accuracy: number) => null;
  clearPredictions: () => null;
  val: boolean;
  prediction: string;
  getAccuracy: () => number;
  notify: Function;
  getPredictions: () => Array<string>;
};

export type FilterContextDto = {
  selected: string;
  changeSelection: (item: string) => null;
};
