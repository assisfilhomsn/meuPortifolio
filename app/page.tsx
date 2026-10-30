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
import MostrarEsconder from "./MostrarEsconder";
import Contato from "./contato";
import Tarefas from "./tarefas";

export interface Tarefa {
  id: number;
  texto: string;
}

export default function Home() {
  const [listaDeTarefas, setListaDeTarefas] = useState<Tarefa[]>([]);
  // 1. Novo estado para guardar o texto que o usuário está digitando
  const [textoDigitado, setTextoDigitado] = useState("");

  const adicionarTarefa = () => {
    // Evita adicionar tarefas vazias ou apenas com espaços
    if (textoDigitado.trim() === "") {
      alert("Por favor, digite o nome da tarefa!");
      return;
    }

    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto: textoDigitado // 2. Usa o texto do input em vez do texto automático
    };

    setListaDeTarefas([...listaDeTarefas, novaTarefa]);
    setTextoDigitado(""); // 3. Limpa o campo de texto após adicionar
  };

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif", color: "#333", backgroundColor: "#fff", minHeight: "100vh" }}>
       <Cabecalho /> 
       <Cartao />
       <Curtir /> 
       <MostrarEsconder />
       <Contato />
       
       {/* Seção do Formulário */}
       <div style={{ margin: "20px 0", textAlign: "center" }}>
         <input 
           type="text"
           placeholder="Digite uma nova tarefa..."
           value={textoDigitado}
           onChange={(e) => setTextoDigitado(e.target.value)} // Atualiza o estado a cada letra digitada
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

       {/* O componente Tarefas (JS) continua recebendo a lista da mesma forma */}
       <Tarefas tarefas={listaDeTarefas} />
       
       <Rodape />
    </main>
  );
}

