import {useState, useEffect} from 'react';
import styled from 'styled-components';
import logo from './assets/logo2.png'
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const ContainerPadre = styled.div`

`;

const Heading = styled.h1`
  font-size: 34px;
  color: #fff;
`;

const Imagen = styled.img`
  
`;

const App = () => {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(()=>{
    if(Object.keys(monedas).length > 0){

      const cotizarCripto = async ()=>{

        setCargando(true);
        setResultado({});
        const {moneda, criptomoneda} = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
       
        setTimeout(()=>{
          setResultado(resultado.DISPLAY[criptomoneda][moneda]);
          setCargando(false);
        },2000)
      }
      cotizarCripto();
    }
  }, [monedas])

  return (
    <>
      <ContainerPadre className='text-center'>
        <div className='row m-0'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
            <Imagen 
              className='logo'
              src={logo}
            />
          </div>

          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
            <Heading className='my-4 text-center'>Cotizador de Criptomonedas</Heading>
            <Formulario
              setMonedas={setMonedas}
            />

            {cargando && <Spinner />}

            {resultado.PRICE && <Resultado resultado={resultado} />}

          </div>
        </div>
        
      </ContainerPadre>
    </>
    
  )
}

export default App
