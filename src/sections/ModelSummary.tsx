import React, { useContext } from 'react';
import ModelDescription from '../component/model_summary/ModelDescription';
import FilterContext from '../context/filter/FilterContext';
import RoundedBtn from '../items/button/CornerRoundedBtn';
import Filter from '../items/filter/Filter';
import { FilterContextDto } from '../models/dtos/ContextDtos';
import { FilterItems } from '../models/enums/FilterEnum';
import { motion } from 'framer-motion';
import ServerOp from '../services/ServerOp';

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
    <motion.div className="flex flex-col  items-center lg:mx-44 sm:mx-4 mt-28 pb-12  space-y-20 ">
      <div className="flex sm:flex-col lg:flex-row sm:space-y-12 lg:space-y-0 lg:justify-between sm:justify-center items-center lg:space-x-20 sm:space-x-0 w-full">
        <div className="flex items-center space-y-8  flex-col">
          <p className="font-bold lg:text-2xl sm:text-lg ">Model Summary</p>
          <ModelDescription />
          <a
            href="https://gesdec-api.herokuapp.com/group1-shard1of1.bin"
            download
            className="w-24"
            onClick={() => {
              ServerOp.downloadModel();
            }}
          >
            <RoundedBtn value={'Download'} />
          </a>

          <p className="font-light font-sans  text-gray-500 lg:text-sm sm:text-sm ">
            You can download the model here
          </p>
        </div>
        <motion.div
          initial={{ x: '200', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <img src="images/neural_network.png" />
        </motion.div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col">
          <div className="mb-10">
            <Filter items={[]} />
          </div>
          <motion.div
            initial={{ x: '200', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="flex lg:w-[500px] lg:h-[300px]  justify-center"
          >
            <img src={getImgSrc(filterProvider.selected)} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
