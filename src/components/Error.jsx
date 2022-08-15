import React from 'react';
import styled from "@emotion/styled";


const Texto = styled.div`
background-color:red;
color: white;
border-radius: 10px;
text-align: center;
padding: 8px 0;
text-transform:uppercase;
font-weight: 700;



`
const Error = ({children}) => {
  return <Texto>


      {children}
  </Texto>;
};

export default Error;
