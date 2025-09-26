// EVENT HANDLERS são funções que "escutam" eventos (cliques, etc.)

export default function ComponenteComEventos() {
  
  // FUNÇÃO NORMAL
  function handleClick() {
    alert("Botão clicado! (Função normal)")
  }
  
  // ARROW FUNCTION - mais moderna e compacta
  const handleClickArrow = () => {
    alert("Botão clicado! (Arrow function)")
  }
  
  // FUNÇÃO COM PARÂMETRO - para passar informação
  const handleClickComParametro = (mensagem) => {
    alert(`Mensagem: ${mensagem}`)
  }
  
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      <h2 className="text-xl font-semibold">Eventos e Cliques (event handlers)</h2>
      
      {/* BOTÃO 1: Função normal */}
      <button onClick={handleClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mr-2 mb-2">
        Função Normal
      </button>
      
      {/* BOTÃO 2: Arrow function */}
      <button onClick={handleClickArrow} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mr-2 mb-2">
        Arrow Function
      </button>
      
      {/* BOTÃO 3: Com parâmetro (usa arrow function inline) */}
      <button  onClick={() => handleClickComParametro("Olá do botão 3!")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mr-2 mb-2">
        Com Parâmetro
      </button>
      
      {/* BOTÃO 4: Função inline (direto no onClick) */}
      <button onClick={() => { alert("Função inline!") }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mb-2">
        Função Inline
      </button>
    </div>
  )
}

// COMO USAR no index.js:
// <ComponenteComEventos />