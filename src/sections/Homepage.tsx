import BannerDescription from '../component/home_page/banner/BannerDescription';
import CameraFrameCard from '../cards/CameraFrameCard';
import Navbar from '../component/shared/Navbar';
import FeedbackForm from '../items/form/FeedbackForm';
import PredictionCard from '../cards/PredictionCard';
import { useContext } from 'react';
import predictionContext from '../context/prediction/PredictionContext';
import { PredictionContextDto } from '../models/dtos/ContextDtos';
import signs from '../models/constants/Signs';

export default function Homepage() {
  const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 123, 123, 124, 123, 13, 123, 123, 123, 1];
  console.log('homepage');

  const predictionProvider = useContext(predictionContext) as PredictionContextDto;
  // predictionProvider.predictions;
  return (
    <div>
      <Navbar from="Homepage" />
      {/* banner container */}
      <div className="bg-[#1A2238] pt-10 pb-24 w-full ">
        <BannerDescription />
      </div>
      <div className="flex lg:flex-row md:flex-col sm:flex-col lg:space-x-36 sm:space-x-0 sm:items-center justify-between mx-44 mt-[65px] mb-28">
        <div className="flex flex-col space-y-2">
          {predictionProvider.prediction != '' ? (
            <PredictionCard
              title={predictionProvider.prediction}
              accuracy={predictionProvider.getAccuracy()}
            />
          ):<div className='h-12'/>}
          {/* camera container */}
          <CameraFrameCard />
        </div>

        {/* prediction container */}

        <div className="flex flex-col overflow-auto  space-y-2  pt-12 lg:justify-start sm:justify-start lg:items-center sm:items-start  lg:h-[450px] sm:h-[350px] w-[500px] pr-6">
          <div className="flex flex-col items-center justify-center space-y-10 pt-16">
            <p className="text-lg font-medium font-sans text-center text-gray-700">
              You can predict among the 12 labels. View model details to check about the models
              summary and details.
            </p>
            <div className="flex flex-wrap items-center justify-center">
              {signs.map((sign) => (
                <div
                  className={`flex justify-center rounded-xl m-2 ${
                    predictionProvider.prediction === sign ? 'bg-green-400' : 'bg-[#9DAAF2]'
                  } px-3 py-2 text-xs font-semibold text-white`}
                >
                  {sign}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* feedback container */}
      <div className="flex justify-center  bg-gray-300 py-8">
        <FeedbackForm />
      </div>
    </div>
  );
}
