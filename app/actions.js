'use cache' // Aplica o cache para todas as funções deste arquivo
import { cacheLife } from 'next/dist/server/use-cache/cache-life' // ajuste o import se necessário conforme sua versão

export async function getAnoAtual() {
    cacheLife('max')
    return new Date().getFullYear();
}
