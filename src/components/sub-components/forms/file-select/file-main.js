import React, { useState } from "react";

import closeIcon from "../../../asset/images/cross-icon.png";
function FileMains(props) {
  const [ theInputKey, SetInputKey ] = useState("1");
  const [listName, setListName] = useState({});
    const { fileVals }=props;
    const closefile = ()=> {
      const array = new Uint32Array(10);
      let randomString = window.crypto.getRandomValues(array);
        SetInputKey(randomString);
        var output = document.getElementById('fileList');
        if(output){
          output.innerHTML='';
        }
    };
    let fileNames=[];
    let filename =[];
  const handleChange=(event)=>{
  // console.log(event.target.files, "eventtt");
  let filehold = [];
 
  
   fileNames.push(event.target.files);
  // console.log(fileNames, "namesss");
  // fileNames.forEach(element => {
  //   console.log(element, "element");
 
    
  // });
  fileNames.forEach(function(item) {
    Object.keys(item).forEach(function(key) {
      // console.log("key:" + key + "value:" + item[key]); 
      filehold.push(item[key])  ;
      // setListName(item);
      // console.log(listName, "holdsss");
      // console.log(filehold, "holdsss");
   

    });
  });
  filehold.forEach(function(items) {
    // console.log(items.name, "valuesss")
   filename.push(items.name);
// setListName(filename);

   console.log(filename, "nameee");
  });

  };
    // console.log(fileVals, "valuesssssssvvs");
    // console.log(filename,listName, "nameee");
  //  const buttonFunction =() =>{
  //   filename.forEach(function(item) {
  //     console.log(item, "list");
  //     return(
  //       <div>hello</div>
  //     );
  //   })
    
  //  };
  const updateList = ()=> {
    var input = document.getElementById('fileupload');
    var output = document.getElementById('fileList');
    var children = "";
    for (var i = 0; i < input.files.length; ++i) {
        children += '<li>' + input.files.item(i).name + '</li>';
    }
    output.innerHTML = '<ul>'+children+'</ul>';
}
  return (
   <div className= "input-output file-output ">
    <div className= "file-conatiner ">
        <p className="file-label">{fileVals.selectlabelValue}</p>
  <div  className= {`file-upload ${fileVals?.themeValue == "Dark"?"file-Dark":fileVals?.themeValue == "cg1"?"file-Cg1":fileVals?.themeValue == "cg2"?"file-Cg2":fileVals?.themeValue == "Normal"?"file-Normal":"" }
   ${fileVals?.selectsizeValue== "100%"?"full-width":fileVals?.selectsizeValue == "75%"?"width-option":fileVals?.selectsizeValue == "50%"?"halfwidth":fileVals?.selectsizeValue == "25%"?"one-fourth":"" }`}>
                            <label class="file-upload-label" for="fileupload" id="buttonlabel">
                               
                            
                             
                       {fileVals.typeValue ==="Single"?<input type="file" id="fileupload" key = {theInputKey || ""}/>:<><input type="file" id="fileupload" key = {theInputKey || ""} multiple="multiple" onChange={updateList}/><p>Selected files:</p>

<div id="fileList"></div></>
}       
                              </label>
                              <button
                className="close-button"
                aria-label="Close"
                onClick={closefile}
              >
                <img src={closeIcon}></img>
              </button>
                            </div>
                           
                           <div className="list-box">
                           {filename.map((element) => {
									
									return (
										<div> {element}</div>
										
									);
								})}
                {/* {buttonFunction()} */}
                           </div>
                            </div>
</div>
  )
}

export default FileMains;