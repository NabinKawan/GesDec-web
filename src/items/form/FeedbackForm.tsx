import React, { useState, useRef } from 'react';
import { Colors } from '../../models/enums/ColorsEnum';
import ServerOp from '../../services/ServerOp';
import RoundedBtn from '../button/CornerRoundedBtn';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { ImSad2 } from 'react-icons/im';

export default function FeedbackForm() {
  const [isFetching, setFetching] = useState(false);
  const [status, setStatus] = useState(null);
  const [feedback, setFeedback] = useState(null);
  // const feedbackRef = useRef(null);
  const onClickHandler = async () => {
    if (feedback != null && feedback != '') {
      setFetching(true);
      const response = await ServerOp.postFeedback(feedback);
      setFetching(false);
      if (response != null) {
        setStatus('success');
        setFeedback('');
      } else {
        setStatus('failed');
      }
    } else {
      setStatus('empty');
    }
  };
  const onChangeHandler = async (event) => {
    if (status != null) {
      setStatus(null);
    }
    setFeedback(event.target.value);
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="flex space-x-4 items-center">
        <div className="flex items-center bg-white rounded-md lg:w-[70vh] sm:w-[70vw] h-10 px-4 py-5 ring-1  hover:shadow-lg hover:shadow-blue-200 ring-gray-400 hover:ring-secondPrimary  ">
          <input
            placeholder="Suggestion to improve this gesture detection?"
            onChange={onChangeHandler}
            value={feedback}
            className="w-full py-1  focus:outline-none lg:text-base sm:text-sm"
          />
        </div>
        <div onClick={onClickHandler}>
          <RoundedBtn value={'Send'} />
        </div>
      </div>
      {isFetching ? (
        <div className="spinner  mt-6 w-14 h-14">
          <img src="/gifs/spinner.gif" />
        </div>
      ) : (
        <></>
      )}
      {status != null ? (
        status === 'success' ? (
          <div className="flex flex-col mt-6 space-y-3 items-center">
            <p className="lg:text-lg sm:text-base font-mono text-gray-600">
              Thank you for your feedback
            </p>
            <BsFillEmojiSmileFill className="text-orange-600 text-xl" />
          </div>
        ) : status === 'empty' ? (
          <div className="flex flex-col mt-6 space-y-3 items-center">
            <p className="lg:text-lg sm:text-base font-mono text-gray-600">Empty field</p>
            <ImSad2 className="text-red-700 text-xl" />
          </div>
        ) : (
          <div className="flex flex-col mt-6 space-y-3 items-center">
            <p className="lg:text-lg sm:text-base font-mono text-gray-600">Failed</p>
            <ImSad2 className="text-red-700 text-xl" />
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
}
