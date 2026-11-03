# Portfólio SENAC - Next.js

## Como executar
1. Instale Node.js LTS.
2. Abra a pasta no VS Code.
3. Execute `npm install` e depois `npm run dev`.
4. Abra http://localhost:3000.
5. Copie `.env.local.example` para `.env.local` e configure `GITHUB_USERNAME`.
6. Para repositórios privados, crie um token GitHub de acesso restrito com permissão de leitura dos repositórios desejados. Configure `GITHUB_TOKEN` apenas no servidor e nas variáveis de ambiente da Vercel. **Nunca envie `.env.local` ao GitHub.**
7. Coloque sua foto autorizada em `public/images/perfil.jpg` e imagens adicionais em `public/images/`. Edite `app/sobre-mim/page.js` para inserir sua biografia e imagens.
8. Para publicar, envie o código a um repositório GitHub e importe-o na Vercel; configure as variáveis de ambiente também na Vercel.

## Organização
`app/layout.tsx` é o layout global; `components/Shell.tsx` contém o cabeçalho, menu retrátil em telas até 768px, área `{children}` e rodapé. Cada pasta em `app/` com `page.js` cria uma rota. `app/api/cep/route.ts` é uma rota de API que consulta ViaCEP. `app/api/github/route.ts` consulta a API GitHub do lado do servidor.

## Limitações importantes
- O LinkedIn não fornece livremente experiências de trabalho de perfis pessoais via API; edite o array `experiencias` em `app/linkedin/page.js` manualmente.
- O GitHub lista até 100 repositórios por requisição nesta versão didática; paginação será um exercício futuro. Repositórios privados só aparecem com token autorizado.
- O ViaCEP não informa número de imóvel nem coordenadas GPS; o link abre uma busca aproximada no Google Maps. Busca por rua exige UF, cidade e pelo menos 3 caracteres de logradouro.
- Os hobbies ficam apenas no localStorage do navegador. Firebase poderá substituir esse armazenamento depois das aulas.
- A imagem do LinkedIn não é extraída automaticamente: salve localmente uma foto que você tem direito de usar.
