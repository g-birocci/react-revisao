export default function MeeuNome({nome , apelido}) {
    return (
        <div className="bg-red-400 border border-red-700 text-red-100 px-4 py-3 rounded my-4">
            <h2 className="text-xl font-semibold">Olá voce é um grande amigo { nome }, e o seu apelodo é { apelido }</h2>
        </div>
    )
}