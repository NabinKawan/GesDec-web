import React, { useContext, useState } from 'react';
import FilterContext from '../../context/filter/FilterContext';
import { FilterContextDto } from '../../models/dtos/ContextDtos';
import { FilterItems } from '../../models/enums/FilterEnum';

export default function Filter({ items }) {
  const [selected, setSelected] = useState(FilterItems.Accuracy_graph);

  const filterProvider = useContext(FilterContext) as FilterContextDto;
  const onClickHandler = (event) => {
    const selectedItem = event.target.textContent;
    setSelected(selectedItem);
    filterProvider.changeSelection(selectedItem);
  };

  return (
    <div className="flex space-x-6 justify-center cursor-pointer lg:text-sm sm:text-xs overflow-x-auto ">
      <div
        onClick={onClickHandler}
        className={`rounded-lg items-center justify-center px-3 py-2 ${
          selected == FilterItems.Accuracy_graph
            ? 'bg-gray-200 text-activeFilterColor font-medium'
            : 'text-inactiveFilterColor'
        } `}
      >
        {FilterItems.Accuracy_graph}
      </div>
      <div
        onClick={onClickHandler}
        className={`rounded-lg items-center justify-center px-3 py-2 ${
          selected == FilterItems.Loss_graph
            ? 'bg-gray-200 text-activeFilterColor font-medium'
            : 'text-inactiveFilterColor'
        } `}
      >
        {FilterItems.Loss_graph}
      </div>
      <div
        onClick={onClickHandler}
        className={`rounded-lg items-center justify-center px-3 py-2 ${
          selected == FilterItems.Confusion_Matrix
            ? 'bg-gray-200 text-activeFilterColor font-medium'
            : 'text-inactiveFilterColor'
        } `}
      >
        {FilterItems.Confusion_Matrix}
      </div>
      <div
        onClick={onClickHandler}
        className={`rounded-lg items-center justify-center px-3 py-2 ${
          selected == FilterItems.Model_summary
            ? 'bg-gray-200 text-activeFilterColor font-medium'
            : 'text-inactiveFilterColor'
        } `}
      >
        {FilterItems.Model_summary}
      </div>
    </div>
  );
}
