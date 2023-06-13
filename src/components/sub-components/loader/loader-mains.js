import React from 'react';
import {Circles,Audio,Rings,TailSpin} from 'react-loader-spinner';
import LoaderComponent from './loader';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./loaderfunction";




function LoaderComponentMain(props) {
  const { loaderVal } = props;
  console.log(loaderVal);
  const percentage = 66;
  return (
    <>
    { loaderVal.loadertype == "Circular" ? (
      <div className='loader-section'>
      {/* <div class={`loader ${loaderVal?.timeoutValue == "1000"?"loaderone":loaderVal?.timeoutValue == "2000"?"loadertwo":loaderVal?.timeoutValue == "5000"?"loaderfive":"" } ${loaderVal?.loadersizeValue == "small"?"loadersmall":loaderVal?.loadersizeValue == "medium"?"loadermed":loaderVal?.loadersizeValue == "large"?"loaderlarge":"" } ${loaderVal?.themeValue == "Dark"?"loaderDark":loaderVal?.themeValue == "cg1"?"loadercg1":loaderVal?.themeValue == "cg2"?"loadercg2":loaderVal?.themeValue== "Normal"?"loaderNormal":"" }`}></div> */}
      
<div class={`loader-container  ${loaderVal?.loadersizeValue == "small"?"loadersmall":loaderVal?.loadersizeValue == "medium"?"loadermed":loaderVal?.loadersizeValue == "large"?"loaderlarge":"" } ${loaderVal?.themeValue == "Dark"?"loaderDark":loaderVal?.themeValue == "cg1"?"loadercg1":loaderVal?.themeValue == "cg2"?"loadercg2":loaderVal?.themeValue== "Normal"?"loaderNormal":"" }`}>
<ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration:loaderVal?.timeoutValue == "1000"?"0.1":loaderVal?.timeoutValue == "2000"?"0.2":loaderVal?.timeoutValue == "5000"?"0.5":"" 
            })}
          />
        )}
      </ChangingProgressProvider>
</div>

</div>

    )
    :
    (
        <div class="wrap-bar">
            <div class={`bar ${loaderVal?.timeoutValue == "1000"?"loaderhorizontalone":loaderVal?.timeoutValue == "2000"?"loaderhorizontaltwo":loaderVal?.timeoutValue == "5000"?"loaderhorizontalfive":"" } ${loaderVal?.loadersizeValue == "small"?"loaderhorizontalsmall":loaderVal?.loadersizeValue == "medium"?"loaderhorizontalmed":loaderVal?.loadersizeValue == "large"?"loaderhorizontallarge":"" } ${loaderVal?.themeValue == "Dark"?"loaderhorizontalDark":loaderVal?.themeValue == "cg1"?"loaderhorizontalcg1":loaderVal?.themeValue == "cg2"?"loaderhorizontalcg2":loaderVal?.themeValue== "Normal"?"loaderhorizontalNormal":"" }`}>
                <div class="progress-loader"></div>
            </div>
            {/* <div class="text">
                <p>Loading...<span class="mask"></span></p>
            </div> */}
        </div>    
    )
    }
  </>
  );
};

export default LoaderComponentMain;