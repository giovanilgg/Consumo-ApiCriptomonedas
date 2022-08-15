import React from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useEffect, useState } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
  padding: 10px;
  background-color: #9497ff;
  border-radius: 1rem;
  color: white;
  font-size: 20px;
  border: none;
  width: 100%;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background-color: #e78e19;
    cursor: pointer;
  }
`;
const Formulario = ({setMonedas,setCotizacion}) => {
  const [cripto, setCripto] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
    "Elige tu criptomoneda",
    cripto
  );
  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCripto = await resultado.Data.map((monedaCripto) => {
        const objeto = {
          id: monedaCripto.CoinInfo.Name,
          nombre: monedaCripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCripto(arrayCripto);
    };
    consultarApi();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      setMonedas({});
      setCotizacion({})
      setTimeout(() => {
        setError(false);
      }, 1500);

    }else{
        setMonedas({

            moneda,
            criptomoneda
        })


    }
  };

  return (
    <>
      {error && (<Error>Todos los campos son obligatorios</Error>)}
      <form onSubmit={handleSubmit}>
        <SelectMonedas></SelectMonedas>
        <SelectCriptomoneda></SelectCriptomoneda>

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
