import React from 'react';
import {Circles,Audio,Rings,TailSpin} from 'react-loader-spinner';
import LoaderComponent from './loader';


function LoaderComponentMain(props) {
  const { loaderVal }=props;
 console.log(loaderVal);
  return (
    loaderVal.loadertype=="Circular"?
    <div class={`loader ${loaderVal?.timeoutValue == "1000"?"loaderone":loaderVal?.timeoutValue == "2000"?"loadertwo":loaderVal?.timeoutValue == "5000"?"loaderfive":"" } ${loaderVal?.themeValue == "Dark"?"loaderDark":loaderVal?.themeValue == "cg1"?"loadercg1":loaderVal?.themeValue == "cg2"?"loadercg2":loaderVal?.themeValue== "Normal"?"loaderNormal":"" }`}></div>:
    <div class={`horizontal-bar-wrap ${loaderVal?.timeoutValue == "1000"?"loaderhorizontalone":loaderVal?.timeoutValue == "2000"?"loaderhorizontaltwo":loaderVal?.timeoutValue == "5000"?"loaderhorizontalfive":"" } ${loaderVal?.themeValue == "Dark"?"loaderhorizontalDark":loaderVal?.themeValue == "cg1"?"loaderhorizontalcg1":loaderVal?.themeValue == "cg2"?"loaderhorizontalcg2":loaderVal?.themeValue== "Normal"?"loaderhorizontalNormal":"" }`}>
  <div class="bar1 bar"></div>
</div>
  )
}

export default LoaderComponentMain;