import React from "react";

export default function Alert(props) {
    debugger;
  return (    
    props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
      {props.alert.message}
    </div>
  );
}
