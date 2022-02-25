import React, { useState } from 'react';
import { FilterItems } from '../../models/enums/FilterEnum';
import FilterContext from './FilterContext';

export default function PredictionProvider({ children }) {
  const [selected, setSelected] = useState(FilterItems.Accuracy_graph);

  const changeSelection = (item) => {
    setSelected(item);
  };

  return (
    <FilterContext.Provider value={{ selected, changeSelection }}>
      {children}
    </FilterContext.Provider>
  );
}
