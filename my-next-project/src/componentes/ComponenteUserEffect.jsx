// useEffect executa código em momentos específicos do ciclo de vida do componente
// É como "escutar" quando certas coisas acontecem no componente

// Primeiro importamos useState (para estados) e useEffect (para efeitos)
import { useState, useEffect } from 'react'

export default function ComponenteComUseEffect() {

  const [mensagem, setMensagem] = useState("Componente carregado!")
  const [segundos, setSegundos] = useState(0)
  
  // USEEFFECT TIPO 1: SEM DEPENDÊNCIAS [] 
  // Executa apenas UMA VEZ quando o componente aparece no ecrã (mount)
  // Executa logo que o componente nasce (mount)
  
  useEffect(() => {
    setMensagem("Componente montado com useEffect!")
  }, [])
  
  // USEEFFECT TIPO 2: COM DEPENDÊNCIAS [segundos]
  // Cria um timer que executa de 1 em 1 segundo
  // setInterval = função que executa código repetidamente
  // Cada 1000ms (1 segundo), aumenta os segundos em 1
  
  useEffect(() => {
    setInterval(() => {
      setSegundos(prev => prev + 1)
    }, 3000)
  }, [])

  // Executa sempre que a variável 'segundos' muda de valor
  useEffect(() => {
  }, [segundos])
  
  return (
    <div className="bg-indigo-100 border border-indigo-400 text-indigo-700 px-4 py-3 rounded mb-4">
      <h2 className="text-xl font-semibold">useEffect - Ciclo de Vida</h2>
      
      <p className="mt-2">{mensagem}</p>
      
      <p className="mt-1">Tempo ativo: {segundos} segundos</p>

      <div className="mt-4">
        <p><strong>1º useEffect:</strong> Executa uma vez (muda a mensagem), useEffect sem dependências - executa uma vez</p>
        <p><strong>2º useEffect:</strong> Executa quando segundos muda, useEffect com dependências - executa quando variável muda</p>
      </div>
    </div>
  )
}