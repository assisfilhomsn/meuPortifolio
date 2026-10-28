import { projetos } from "./dados"; // <-- Importa a lista de projetos do seu arquivo de dados

export default function Cartao() {
    const nome = "Assis Lima";

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '10px 0' }}>
            <h1>Olá, sou <strong>{nome}</strong> e este é o meu primeiro programa usando o NextJs</h1>
            
            <h2 style={{ marginTop: '20px' }}>Meus Projetos:</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {projetos.map((projeto) => (
                    <li key={projeto.id} style={{ margin: '15px 0', borderLeft: '4px solid #0070f3', paddingLeft: '10px' }}>
                        <h3>{projeto.titulo}</h3>
                        <p>{projeto.descricao}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
