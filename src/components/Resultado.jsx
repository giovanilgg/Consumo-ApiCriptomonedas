import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  background: linear-gradient(to bottom right, #32363a, #4d76e6);
  padding: 2rem 1rem;
  border-radius: 2rem;
  margin: 1rem;
  font-size: .8rem;
  color: white;
  text-transform: uppercase;
  text-align: left;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
`;
const Resaltado = styled.span`
  font-weight: 900;
  color: black;
`;
const Imagen = styled.img`
width: 20%;
height: 20%;
margin-right: 15px;

`

const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;
  return (
    <Contenedor>
        <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagenCriptomoneda" />
      <div>
        <p>
          El precio es de: <Resaltado>{PRICE}</Resaltado>
        </p>
        <p>
          Precio mas alto del dia: <Resaltado>{HIGHDAY}</Resaltado>
        </p>
        <p>
          Precio mas bajo del dia: <Resaltado>{LOWDAY}</Resaltado>
        </p>
        <p>
          Variacion ultimas 24 horas: <Resaltado>{CHANGEPCT24HOUR}</Resaltado>
        </p>
        <p>
          Ultima actualizacion: <Resaltado>{LASTUPDATE}</Resaltado>
        </p>
      </div>
    </Contenedor>
  );
};

export default Resultado;
