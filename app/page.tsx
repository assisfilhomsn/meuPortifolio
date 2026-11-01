/*
import Image from "next/image";
import Cabecalho from "./cabecalho";
import Cartao from "./cartao";
import Rodape from "./rodape";
import Curtir from "./curtir";
import MostrarEsconder from "./MostrarEsconder";
import Contato from "./contato";
import Tarefas from "./tarefas";

export default function Home() {
  return (
    <main>
       <Cabecalho /> 
       <Cartao />
       <Curtir /> 
       <MostrarEsconder />
       <Contato />
       <Tarefas />
       <Rodape />

    </main>
  ); // <-- Adicionado o ponto e vírgula e parêntese de fechamento do return
} // <-- Adicionada a chave que fecha a função Home
*/

"use client";

import { useState } from "react";
import Cabecalho from "./cabecalho";
import Cartao from "./cartao";
import Rodape from "./rodape";
import Curtir from "./curtir";
import Contato from "./contato";
import Tarefas from "./tarefas";

export interface Tarefa {
  id: number;
  texto: string;
}

export default function Home() {
  const [listaDeTarefas, setListaDeTarefas] = useState<Tarefa[]>([]);
  const [textoDigitado, setTextoDigitado] = useState("");

  const adicionarTarefa = () => {
    if (textoDigitado.trim() === "") {
      alert("Por favor, digite o nome da tarefa!");
      return;
    }

    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto: textoDigitado
    };

    setListaDeTarefas([...listaDeTarefas, novaTarefa]);
    setTextoDigitado("");
  };

  const excluirTarefa = (id: number) => {
    setListaDeTarefas(listaDeTarefas.filter(tarefa => tarefa.id !== id));
  };

  // Nova função para atualizar o texto de uma tarefa existente
  const alterarTarefa = (id: number, novoTexto: string) => {
    setListaDeTarefas(
      listaDeTarefas.map(tarefa => 
        tarefa.id === id ? { ...tarefa, texto: novoTexto } : tarefa
      )
    );
  };

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif", color: "#333", backgroundColor: "#fff", minHeight: "100vh" }}>
       <Cabecalho /> 
       <Cartao />
       <Curtir /> 
       <Contato />
       
       <div style={{ margin: "20px 0", textAlign: "center" }}>
         <input 
           type="text"
           placeholder="Digite uma nova tarefa..."
           value={textoDigitado}
           onChange={(e) => setTextoDigitado(e.target.value)}
           style={{
             padding: "10px",
             fontSize: "16px",
             width: "250px",
             marginRight: "10px",
             borderRadius: "5px",
             border: "1px solid #ccc"
           }}
         />
         <button 
           onClick={adicionarTarefa} 
           style={{
             padding: "10px 20px",
             fontSize: "16px",
             backgroundColor: "#0070f3",
             color: "white",
             border: "none",
             borderRadius: "5px",
             cursor: "pointer"
           }}
         >
           ➕ Adicionar
         </button>
       </div>

       {/* Passamos também a nova função alterarTarefa para o componente */}
       <Tarefas tarefas={listaDeTarefas} onExcluir={excluirTarefa} onAlterar={alterarTarefa} />
       
       <Rodape />
    </main>
  );
}
