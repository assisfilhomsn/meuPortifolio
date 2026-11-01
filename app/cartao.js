/*
"use client";
import { projetos } from "./dados"; // <-- Importa a lista de projetos do seu arquivo de dados
import { useState } from "react";

export default function Cartao() {
    const [aberto, setAberto] = useState(false);
    const nome = "Assis Lima";

    return (
        <div className="portfolio-card">
            <h1>Olá, sou <strong>{nome}</strong> e este é o meu primeiro programa usando o NextJs</h1>
            
            <h2>Meus Projetos:</h2>
            <ul>

                {projetos.map((projeto) => (
                    <li key={projeto.id}>
                        <h3>{projeto.titulo}</h3>
                        <p>{projeto.descricao}</p>
                    </li>
                ))}


            </ul>
            
        </div>
    );
}
*/

/*
//Opcao 1 -  Importando o componente (Recomendado)
//--> Dessa forma, o seu código fica limpo e modular. O botão e a lógica dele continuam isolados no arquivo MostrarEsconder.js, e você apenas o exibe dentro do cartão.

"use client";
import { projetos } from "./dados"; 
import { useState } from "react";
import MostrarEsconder from "./MostrarEsconder"; // <-- 1. Importa o componente do botão

export default function Cartao() {
    const nome = "Assis Lima";

    return (
        <div className="portfolio-card">
            <h1>Olá, sou <strong>{nome}</strong> e este é o meu primeiro programa usando o NextJs</h1>
            
            <h2>Meus Projetos:</h2>
            <ul>
                {projetos.map((projeto) => (
                    <li key={projeto.id}>
                        <h3>{projeto.titulo}</h3>
                        <p>{projeto.descricao}</p>
                    </li>
                ))}
            </ul>

            2. Insere o componente aqui onde você deseja que o botão apareça --> comentario
            <MostrarEsconder /> 
            
        </div>
    );
}
*/

// Opção 2: Unificando o código no arquivo Cartao.js
//---> Se você não quiser usar dois arquivos diferentes e preferir colocar a lógica do botão direto na estrutura do cartão, use o estado aberto que já estava declarado no topo:

"use client";
import { projetos } from "./dados";
import { useState } from "react";

function ItemProjeto({ projeto }) {
    const [aberto, setAberto] = useState(false);

    return (
        <li>
            <h3>Cód.: {projeto.id} - {projeto.titulo}</h3>
            
            {/* Adicionada a classe btn-portfolio aqui */}
            <button 
                className="btn-portfolio" 
                onClick={() => setAberto(!aberto)}
            >
                {aberto ? "Esconder" : "Ver detalhes"}
            </button>
            
            {aberto && <p>{projeto.descricao}</p>}
        </li>
    );
}

export default function Cartao() {
    const nome = "Assis Lima";

    return (
        <div className="portfolio-card">
            <h1>Olá, sou <strong>{nome}</strong> e este é o meu primeiro program usando o NextJs</h1>
            
            <h2>Meus Projetos:</h2>
            <ul>
                {projetos.map((projeto) => (
                    <ItemProjeto key={projeto.id} projeto={projeto} />
                ))}
            </ul>
        </div>
    );
}




