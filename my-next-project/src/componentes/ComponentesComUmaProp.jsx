export default function ComponenteComProp({ nome }) {
    return (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded my-4">
            <h2 className="text-xl font-semibold">Meu nome é {nome}
            </h2>
            <p>Este recebeu o nome por uma Porp</p>
        </div>
    )
}