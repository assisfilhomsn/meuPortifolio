"use client";

import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [aviso, setAviso] = useState("");

  function enviar(e) { 
    e.preventDefault();
    if (nome.trim().length < 3) {
      setAviso("Digite seu nome completo.");
      return;
    }
    setAviso(`Obrigado, ${nome}!`);
    setNome("");
  }

  return (
    <form onSubmit={enviar}>
      <label>Contato</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
      />
      <button type="submit">Enviar</button>
      {aviso && <p>{aviso}</p>}
    </form>
  );
}
