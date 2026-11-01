//import { useState } from "react";
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

"use client";

import { useState } from "react";

export default function Tarefas({ tarefas, onExcluir, onAlterar }) {
  // Estados para controlar qual item está sendo editado e o seu novo valor
  const [idEmEdicao, setIdEmEdicao] = useState(null);
  const [textoEdicao, setTextoEdicao] = useState("");

  const iniciarEdicao = (tarefa) => {
    setIdEmEdicao(tarefa.id);
    setTextoEdicao(tarefa.texto);
  };

  const salvarEdicao = (id) => {
    if (textoEdicao.trim() === "") {
      alert("O texto da tarefa não pode ficar vazio!");
      return;
    }
    onAlterar(id, textoEdicao);
    setIdEmEdicao(null); // Sai do modo de edição
  };

  // Função interna para interceptar a exclusão e pedir confirmação
  const handleExcluir = (tarefa) => {
    const confirmado = window.confirm(`Deseja realmente excluir a tarefa "${tarefa.texto}"?`);
    
    if (confirmado) {
      onExcluir(tarefa.id);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tarefas.map((tarefa) => (
          <li 
            key={tarefa.id} 
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              padding: "10px", 
              borderBottom: "1px solid #eee" 
            }}
          >
            {idEmEdicao === tarefa.id ? (
              // Modo de Edição: Mostra o input para alterar o texto
              <div style={{ display: "flex", flex: 1, marginRight: "10px" }}>
                <input
                  type="text"
                  value={textoEdicao}
                  onChange={(e) => setTextoEdicao(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "5px",
                    fontSize: "14px",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                  }}
                />
                <button
                  onClick={() => salvarEdicao(tarefa.id)}
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "5px 10px",
                    marginLeft: "5px",
                    cursor: "pointer"
                  }}
                >
                  💾 Salvar
                </button>
                <button
                  onClick={() => setIdEmEdicao(null)}
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "5px 5px",
                    marginLeft: "5px",
                    cursor: "pointer"
                  }}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              // Modo Normal: Mostra o texto e os botões de Editar e Excluir
              <>
                <span style={{ flex: 1, marginRight: "10px" }}>{tarefa.texto}</span>
                <div style={{ display: "flex", gap: "5px" }}>
                  <button 
                    onClick={() => iniciarEdicao(tarefa)}
                    style={{
                      backgroundColor: "#ffc107",
                      color: "#212529",
                      border: "none",
                      borderRadius: "4px",
                      padding: "5px 10px",
                      cursor: "pointer",
                      fontSize: "14px"
                    }}
                  >
                    ✏️ Editar
                  </button>
                  <button 
                    onClick={() => handleExcluir(tarefa)}
                    style={{
                      backgroundColor: "#ff4d4d",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "5px 10px",
                      cursor: "pointer",
                      fontSize: "14px"
                    }}
                  >
                    ❌ Excluir
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
