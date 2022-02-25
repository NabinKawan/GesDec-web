import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

export default function ScrollController({ children }) {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);
  useEffect(() => {
    if (pageYOffset > 400) {
      //   console.log(Math.abs(document.documentElement.scrollHeight - pageYOffset));
      if (Math.abs(document.documentElement.scrollHeight - pageYOffset) < 500) {
        console.log('fetch data');
      }
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);
  return visible ? children : <></>;
}
