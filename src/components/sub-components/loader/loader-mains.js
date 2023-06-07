import React from 'react';
import {Circles} from 'react-loader-spinner';
import LoaderComponent from './loader';


function LoaderComponentMain(props) {
  const { loaderVal }=props;
 console.log(loaderVal);
  return (
    <Circles
  color="rgb color"
  // height={number}
  // width={number}
  timeout={loaderVal.timeoutValue}
/>
  )
}

export default LoaderComponentMain;