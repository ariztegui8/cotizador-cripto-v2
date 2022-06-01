import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo2.png'
import Formulario from './components/Formulario';

const ContainerPadre = styled.div`
  
`;

const Heading = styled.h1`
  font-size: 34px;
  color: #fff;
`;

const Imagen = styled.img`
  
`;

const App = () => {
  return (
    <>
      <ContainerPadre>
        <div className='row'>
          <div className='col-6'>
            <Imagen 
              src={logo}
            />
          </div>

          <div className='col-6'>
            <Heading className='my-4 text-center'>Cotizador de Criptomonedas</Heading>
            <Formulario />
          </div>
        </div>
        
      </ContainerPadre>
    </>
    
  )
}

export default App
