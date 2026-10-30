"use client";

import { useState } from "react";
/*
export default function Tarefas() {
  //const [tarefas, setTarefas] = useState("");
  const [tarefas, setTarefas] = useState([]); // Correto
  const [texto, setTexto] = useState("");

  function adicionarTarefa(e) { 
    e.preventDefault();
    if (!texto.trim()) {
        return;
    }
    //setAviso(`Obrigado, ${nome}!`);
    setTarefas([...Tarefas,{id: Date.now(), texto}]);
    setTexto("");
  }

  return (
    <ui>
        {tarefas.map((t) => <li key={t.id}>{t.texto}</li>)}
    </ui>
  );
}
*/

/*
export default function Tarefas({ tarefas = [] }) { // Define um array vazio como padrão
  return (
    <ul>
      {tarefas.map((t) => (
        <li key={t.id}>{t.texto}</li>
      ))}
    </ul>
  );
}
*/

export default function Tarefas({ tarefas = [] }) {
  // Se a lista estiver vazia, mostra uma mensagem amigável
  if (tarefas.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
        Nenhuma tarefa adicionada ainda. Clique no botão acima!
      </p>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "10px" }}>
      <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Minhas Tarefas:</h3>
      <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
        {tarefas.map((t) => (
          <li 
            key={t.id} 
            style={{ 
              padding: "8px 0", 
              borderBottom: "1px dashed #eee",
              color: "#000" 
            }}
          >
            {t.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
