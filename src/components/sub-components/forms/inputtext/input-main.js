import React from 'react';


function InputMains(props) {
    console.log(props);
  
  return (
   
    <div  class="form-floating mb-3 col-md-8">
  <input
    type="text"
    class="form-control form-control-lg"
    id="firstName"
    placeholder="First name"
    autocomplete="off"
  />
  <label for="firstName">Label</label>
  
  <div class="form-floating-bottom px-3"></div>
</div>

  )
}

export default InputMains;