import React, { useContext } from 'react';
import ModelDescription from '../component/model_summary/ModelDescription';
import FilterContext from '../context/filter/FilterContext';
import RoundedBtn from '../items/button/CornerRoundedBtn';
import Filter from '../items/filter/Filter';
import { FilterContextDto } from '../models/dtos/ContextDtos';
import { FilterItems } from '../models/enums/FilterEnum';

export default function ModelSummary() {
  const filterProvider = useContext(FilterContext) as FilterContextDto;
  const getImgSrc = (selectedItem) => {
    switch (selectedItem) {
      case FilterItems.Accuracy_graph:
        return '/images/acc_graph.png';
      case FilterItems.Confusion_Matrix:
        return '/images/confusion_matrix.png';
      case FilterItems.Loss_graph:
        return '/images/loss_graph.png';
      default:
      //nothing
    }
  };
  return (
    <div className="flex flex-col items-center lg:mx-64 sm:mx-4 mt-20 pb-12 ">
      <div className="flex flex-col items-center space-y-8 lg:w-2/3 sm:w-full">
        <ModelDescription />
        <div className="w-24">
          <RoundedBtn value={'Download'} />
        </div>
      </div>
      <p className="font-bold lg:text-xl sm:text-lg mt-16 mb-8">Model Summary</p>
      <div className="mb-10">
        <Filter items={[]} />
      </div>
      <img src={getImgSrc(filterProvider.selected)} />
    </div>
  );
}
