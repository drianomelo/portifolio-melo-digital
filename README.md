# Melo Digital

Portfólio estático feito com Astro e CSS. O conteúdo inicial é uma base editável, sem projetos fictícios.

## Desenvolvimento

Requer Node.js 20 ou superior.

- Instale as dependências: npm install
- Inicie o servidor: npm run dev
- Gere a versão de produção: npm run build

O resultado de produção fica em dist/.

## Personalização

- Edite textos, URL do GitHub e projetos em src/data/site.ts.
- Ajuste cores e layout em src/styles/global.css.
- Coloque imagens em public/ e use caminhos como /nome-da-imagem.jpg na lista de projetos.

## Cloudflare Pages

No painel, vá em Workers & Pages → Create application → Pages → Import an existing Git repository. Escolha este repositório e use:

| Campo | Valor |
| --- | --- |
| Branch de produção | main |
| Comando de build | npm run build |
| Diretório de saída | dist |

Depois do primeiro deploy, abra Custom domains → Set up a domain e adicione melodigital.com.br. O domínio raiz precisa estar como zona ativa no Cloudflare e usar os nameservers indicados pela plataforma. Associe o domínio no projeto Pages antes de ajustar DNS manualmente.

Para redirecionar www.melodigital.com.br para o domínio raiz, use uma regra de redirecionamento no Cloudflare. O arquivo _redirects do Pages não faz redirecionamento por hostname.
