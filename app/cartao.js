import { projetos } from "./dados"; // <-- Importa a lista de projetos do seu arquivo de dados

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
        </div>
    );
}
