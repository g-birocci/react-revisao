export default function ComponenteComMap() {
    const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga'];

    return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
      <h2 className="text-xl font-semibold">Lista de Frutas:</h2>

      {frutas.map((fruta, i) => (
        <p key={i}>{fruta}</p>
      ))}

      <p className="text-sm mt-2">Total: {frutas.length} frutas</p>
    </div>
  )
}