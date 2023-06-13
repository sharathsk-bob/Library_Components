import React, { useEffect, useState } from "react";

const ChangingProgressProvider = ({ interval = 1000, values, children }) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValuesIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval, values]);

  return children(values[valuesIndex]);
};

export default ChangingProgressProvider;
