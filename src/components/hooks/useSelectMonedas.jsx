import { useState } from "react"

const useSelectMonedas = (label, opciones) => {

  const [state, setState] = useState('');

  const SelectMonedas = () =>(
      <>
        <label>{label}</label>
        <select
          value={state}
          onChange={e => setState(e.target.value)}
        >
          <option value="">--Seleccione--</option>
          {opciones.map(opcion =>(
            <option
              key={opcion.id}
              value={opcion.id}
            >{opcion.nombre}</option>
          ))}
        </select>
      </>
  )

  return [state, SelectMonedas]
}

export default useSelectMonedas