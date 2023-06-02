import React, { useState } from "react";


function FileMains(props) {
    
    const { fileVals }=props;
    console.log(fileVals, "valuesssssssvvs");
  return (
   <div className= "input-output file-output ">
    <div className= "file-conatiner ">
        <p className="file-label">{fileVals.selectlabelValue}</p>
  <div  className= {`file-upload ${fileVals?.themeValue == "Dark"?"file-Dark":fileVals?.themeValue == "cg1"?"file-Cg1":fileVals?.themeValue == "cg2"?"file-Cg2":fileVals?.themeValue == "Normal"?"file-Normal":"" }
   ${fileVals?.selectsizeValue== "100%"?"full-width":fileVals?.selectsizeValue == "75%"?"width-option":fileVals?.selectsizeValue == "50%"?"halfwidth":fileVals?.selectsizeValue == "25%"?"one-fourth":"" }`}>
                            <label class="file-upload-label" for="fileupload" id="buttonlabel">
                               
                            
                             
                       {fileVals.typeValue ==="Single"?<input type="file" id="fileupload"/>:<input type="file" id="fileupload" multiple="multiple"/>
}       
                              </label>
                            </div>
                            </div>
</div>
  )
}

export default FileMains;