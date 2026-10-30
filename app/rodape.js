
/*
import { cacheLife } from 'next/cache'

async function getAnoAtual() {
    'use cache'
    cacheLife('max') // Diz ao Next.js que este valor quase nunca muda
    return new Date().getFullYear();
}

export default async function Rodape() {
    const ano = await getAnoAtual();

    return (
        <footer>
            <p>© {ano} Assis Lima. Todos os direitos reservados.</p>
        </footer>
    );
}
*/

/*
import { useEffect, useState } from 'react';
import { getAnoAtual } from './actions'; // Importa a função do arquivo de cache

export default function Rodape() {
  const [ano, setAno] = useState(null);

  useEffect(() => {
    getAnoAtual().then(setAno);
  }, []);

  return (
    <footer>
      <p>© {ano || '...'} - Todos os direitos reservados.</p>
    </footer>
  );
}
*/
import { useEffect, useState } from 'react';
import { getAnoAtual } from './actions'; // Importa a função do arquivo de cache

export default function Rodape() {
  const [ano, setAno] = useState(null);

  useEffect(() => {
    getAnoAtual().then(setAno);
  }, []);

  return (
    <footer>
      <p>© {ano || '...'} - Todos os direitos reservados.</p>
    </footer>
  );
}
