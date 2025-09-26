import ComponenteComProp from "@/componentes/ComponentesComUmaProp";
import MeeuNome from "@/componentes/MeuNome";
import PrimeiroComponente from "@/componentes/PrimeirosComponents";
import CompomentesComMuitosProps from "@/componentes/ComponentesComMuitosPorps";
import ComponenteComCondicional from "@/componentes/ComponentesComCondicional";
import ComponenteComMap from "@/componentes/ComponentesComMap";
import ComponenteComEventos from "@/componentes/ComponentesEventos";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-black">
        <span className="text-red-500">H</span>
        <span className="text-orange-500">e</span>
        <span className="text-yellow-500">l</span>
        <span className="text-green-500">l</span>
        <span className="text-blue-500">o</span>
        <span className="text-purple-500">!</span>
      </h1>
      <PrimeiroComponente />
      <ComponenteComProp nome="Gabriel" />
      <MeeuNome nome="Gabriel" apelido="Biel" />
      <CompomentesComMuitosProps idade={19} titulo="Componente com muitas Props" cor="azul" nome="Gabriel"/>
      <ComponenteComCondicional/>
      <ComponenteComMap/>
      <ComponenteComEventos/>
      </div>
  );
}
