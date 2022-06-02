import React from 'react'

const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <div className='container-resultados mt-2'>
        <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div className='container-parrafos'>
            <p className='price'>El precio es de: <span>{PRICE}</span></p>
            <p>Precio más alto del día <span>{HIGHDAY}</span></p>
            <p>Precio más bajo del día <span>{LOWDAY}</span></p>
            <p>Valoración últimas 24 horas <span>{CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualización <span>{LASTUPDATE}</span></p>
        </div>
    </div>
  )
}

export default Resultado