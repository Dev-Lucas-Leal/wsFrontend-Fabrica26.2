# wsFrontend-Fabrica26.2

## Overwatch Heroes

Aplicação front-end que consome a [OverFast API](https://overfast-api.tekrop.fr/) — uma API pública e não-oficial do Overwatch 2 — para exibir a galeria de heróis do jogo, com busca por nome e paginação.

> Projeto acadêmico Final para Fábrica de Software, sem qualquer vínculo com a Blizzard Entertainment. Overwatch é marca registrada da Blizzard Entertainment, Inc.

## ✨ Funcionalidades

- Listagem de todos os heróis do Overwatch 2 (nome, foto e role)
- Busca por nome em tempo real, com debounce
- Paginação client-side
- Estados de carregamento e erro tratados de forma explícita
- Layout responsivo (mobile, tablet, desktop)

## 🛠️ Tecnologias

| Categoria | Tecnologia |
|---|---|
| Biblioteca de UI | React |
| Estilização | Tailwind CSS |
| Roteamento | React Router DOM |
| Ícones | lucide-react |
| Build tool | Vite |
| Fonte de dados | [OverFast API](https://overfast-api.tekrop.fr/) |

### Por que essa organização?

O projeto segue separação por responsabilidade em camadas:

1. **`services/`** é a única camada ciente da existência da OverFast API — faz a requisição HTTP e trata erros de rede.
2. **`utils/`** contém apenas funções puras (mesma entrada sempre gera a mesma saída, sem efeito colateral) — usadas para mapear, filtrar e paginar dados.
3. **`hooks/`** conecta o mundo assíncrono (fetch, timers) ao React, sempre com função de limpeza no `useEffect` para evitar vazamento de memória ou atualização de estado em componente desmontado.
4. **`components/`** e **`pages/`** só renderizam — recebem dados prontos e nunca decidem como buscá-los.

Essa separação permite trocar a fonte de dados, a lib de ícones ou a estratégia de paginação sem que as outras camadas percebam a mudança.

## 🔌 Consumo da API

O endpoint `GET /heroes` da OverFast API retorna, para cada herói, exatamente os três dados usados nesta aplicação:

```json
{ "key": "ana", "name": "Ana", "portrait": "https://...png", "role": "support" }
```

`utils/mapHeroToCharacter.js` converte esse formato para o modelo interno do app, isolando qualquer mudança futura no contrato da API numa única função.

## 🚀 Rodando o projeto localmente

### Pré-requisitos
- Node.js 18+
- npm

### Passo a passo

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd wsFrontend-Fabrica26.2

# 2. Instale as dependências
npm install

# 3. Rode o ambiente de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

### Imagem de capa

Adicione uma imagem chamada `overwatch-cover.png` dentro de `public/` — ela é usada como plano de fundo do banner na Home.

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Pré-visualiza o build de produção localmente |

## 🧠 Decisões de arquitetura

- **Paginação e busca sem biblioteca externa**: com um dataset pequeno (~40 heróis), implementar `filterCharactersByName` e `paginateList` como funções puras é mais leve, mais fácil de testar e evita dependência desnecessária.
- **Rotas centralizadas (`routes/AppRoute.jsx`)**: mesmo com uma única rota hoje, isolar a definição de rotas facilita expandir o projeto (ex: página de detalhe do herói) sem alterar `App.jsx`.
- **Debounce na busca**: evita recomputar o filtro a cada tecla digitada, uma prática padrão em campos de busca reativos.
- **Cancelamento de requisição (`AbortController`)**: evita atualizar estado de um componente já desmontado, prevenindo warnings e vazamento de memória.

## 📄 Créditos e licença

- Dados fornecidos pela [OverFast API](https://github.com/TeKrop/overfast-api), de autoria de TeKrop.
- Overwatch e todos os nomes/imagens de personagens são propriedade da Blizzard Entertainment. Este projeto tem fins exclusivamente educacionais.
