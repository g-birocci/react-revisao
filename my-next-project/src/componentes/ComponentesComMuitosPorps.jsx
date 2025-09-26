export default function ComponentesComUmaProp({ nome, idade, titulo, cor }) {
    const cores = {
        azul: 'blue',
        vermelho: 'red',
        verde: 'green',
        amarelo: 'yellow',
        roxo: 'purple',
        laranja: 'orange',
    };
    
  return (
    <div className={`bg-${cor}-100 border border-${cor}-400 text-${cor}-700 px-4 py-3 rounded mb-4`}>
      <h2 className="text-xl font-semibold">{titulo}</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade} anos</p>
      <p>Este componente recebeu o nome, a idade, o titulo e a cor como props!</p>
    </div>
  )
}
