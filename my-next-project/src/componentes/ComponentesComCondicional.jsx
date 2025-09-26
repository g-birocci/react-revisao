export default function ComponenteComCondicional() { 
    let estaLogado = true;
    let nome = "Gabriel";
    let acesso = true;

    return (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded my-4">
            <h2 className="text-xl font-semibold">Estado do Login</h2>
            
      {/* estaLogado é TRUE? Se sim: "Bem-vinda, {nomeUtilizador}!" Se não: "Não estás logado!" */} 
      {estaLogado ? (  
        <p>Bem-vinda, {nome}!</p>
      ) : (
        <p>Não estás logado!</p>
      )}
      
      {/* Também podes usar && para mostrar algo apenas se for verdadeiro */}
      {acesso && <p>Tens acesso completo!</p>}
    </div>
  )
}
