import Image from "next/image";
import Cabecalho from "./cabecalho";
import Cartao from "./cartao";
import Rodape from "./rodape";

export default function Home() {
  return (
    <main>
       <Cabecalho /> 
       <Cartao />
       <Rodape />
    </main>
  ); // <-- Adicionado o ponto e vírgula e parêntese de fechamento do return
} // <-- Adicionada a chave que fecha a função Home
