import {duration} from 'moment-timezone';
import { useEffect, useRef } from 'react';

const useInterval = (callback, delay, unit = null) => {
  const savedCallback = useRef();

  useEffect(
    () => {
      savedCallback.current = callback;
    },
    [callback]
  );

  useEffect(
    () => {
      const handler = (...args) => savedCallback.current(...args);

      if (delay !== null) {
        const milliseconds = unit ? duration(delay, unit).asMilliseconds() : delay;
        const id = setInterval(handler, milliseconds);
        return () => clearInterval(id);
      }
    },
    [delay, unit]
  );
};

export default useInterval;
