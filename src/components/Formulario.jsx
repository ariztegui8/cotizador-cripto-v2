import React, { useEffect, useState } from 'react'
import useSelectMonedas from './hooks/useSelectMonedas'

const Formulario = () => {

    const monedas = [
        {
            id: 'ARS',
            nombre: 'Peso Argentino'
        },
        {
             id: 'USD',
             nombre: 'Dolar de Estados Unidos'
         },
         {
             id: 'EUR',
             nombre: 'Euro'
         },
         {
             id: 'GBP',
             nombre: 'Libra Esterlina'
         },
         {
             id: 'CLP',
             nombre: 'Peso Chileno'
         }
     ];

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    const [criptos, setCriptos] = useState([]);

    useEffect(()=>{
        const consultarApi = async ()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arrayCriptos = resultado.Data.map(cripto =>{
                
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })

                setCriptos(arrayCriptos)
        }
        consultarApi()
    }, []);


  return (
        <form
            className='formulario'
        >

            <SelectMonedas />
            <input
                className='btn btn-secondary w-75 mt-3'
                type="submit"
                value="Cotizar"
            />
        </form>
  )
}

export default Formulario