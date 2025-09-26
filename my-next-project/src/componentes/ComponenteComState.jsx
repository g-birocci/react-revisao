
// useState permite que o componente "guarde" informação e a mude como se fosse uma variável
// useState é um HOOK que permite criar variáveis de estado
// Estado = informação que pode mudar e faz o componente re-renderizar

// Defini um state chamado "contador" e inicializei-o a 0
// Defini um state chamado "nome" e inicializei-o a ""
// Defini um state chamado "strogonoff" e inicializei-o a true

// Tenho 2 botões (+ e -) que alteram o valor do state "contador"
// Tenho outros 4 botões que alteram o valor do state "nome"
// Tenho outro botão que altera o valor do state "strogonoff"


// Para usar state primeiro temos de importar o useState do React
import { useState } from 'react'

export default function ComponenteComState() {

  const [contador, setContador] = useState(0)
  const [nome, setNome] = useState("")
  const [strogonoff, setStrogonoff] = useState(true)
  
  return (
    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
      <h2 className="text-xl font-semibold">useState - Estado do Componente</h2>
      
      {/* Alterar Contador (somar ou subtrair)*/}
      <div className="mt-4">
        <h3 className="font-semibold">Contador: {contador}</h3>
        <button onClick={() => setContador(contador + 1)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
          +
        </button>
        <button onClick={() => setContador(contador - 1)} className="bg-blue-500 text-white px-2 py-1 rounded">
          -
        </button>
      </div>

      {/* Alterar Nome */}
      <div className="mt-4">
        <h3 className="font-semibold">Nome selecionado: {nome}</h3>
        <div className="mt-2">
          <button onClick={() => setNome("João")} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 mb-2">
            João
          </button>
          <button onClick={() => setNome("Maria")} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 mb-2">
            Maria
          </button>
          <button onClick={() => setNome("Pedro")} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 mb-2">
            Pedro
          </button>
          <button onClick={() => setNome("")} className="bg-gray-500 text-white px-3 py-1 rounded mb-2">
            Limpar
          </button>
        </div>
      </div>
      
      {/* Alterar strogonoff (On ou Off) */}
      <div className="mt-4">
        <button onClick={() => setStrogonoff(!strogonoff)} className="bg-blue-500 text-white px-2 py-1 rounded mb-2">
          {strogonoff ? "On" : "Off"}
        </button>
      </div>
    </div>
  )
}