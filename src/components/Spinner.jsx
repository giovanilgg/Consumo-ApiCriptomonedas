import React from "react";
import styled from "@emotion/styled";
const Spinnerr = styled.div`
width: 100px;
  height: 100px;
  margin: 100px auto;
  background-color: #1b84ca;

  border-radius: 100%;  
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;


@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}

`

const Spinner = () => {
  return <Spinnerr></Spinnerr>
};

export default Spinner;
