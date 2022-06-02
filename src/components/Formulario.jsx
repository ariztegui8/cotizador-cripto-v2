import React, { useEffect, useState } from 'react'
import Error from './Error';
import useSelectMonedas from './hooks/useSelectMonedas'

const Formulario = ({setMonedas}) => {

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

    const [criptos, setCriptos] = useState([]);
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);
    const [error, setError] = useState(false);

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

    const handleSubmit = e =>{
        e.preventDefault();
        if([moneda, criptomoneda].includes('')){
            setError(true);
            

            setTimeout(()=>{
                setError(false)
            },3000)
        }
        setMonedas({
            moneda,
            criptomoneda
        })
      
    }


  return (
        <form
            className='formulario'
            onSubmit={handleSubmit}
        >

            <SelectMonedas />
            <SelectCriptomoneda />

            <input
                className='btn btn-secondary w-75 my-4 btn-form p-2'
                type="submit"
                value="Cotizar"
            />

            {error && <Error mensaje="Todos los campos son obligatorios"/>}
        </form>
  )
}

export default Formulario