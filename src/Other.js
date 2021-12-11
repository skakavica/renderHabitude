import React from "react";


function clickHandler() {
  window.alert("Hello from React");

}
export default function Other(){
  return(
<div>
<button onClick={clickHandler}>
      Show Text
      </button>

  </div>
  )
}