# Contexto do projeto

Documento de apoio para quem (pessoa ou IA) for mexer neste repositório.
Não é changelog nem manual de uso — é o modelo mental.

## O que é

Painel pessoal de estudos para concursos da área de **controle externo**, com
foco no **TCU** (que não tem edital aberto) e usando **TCDF** (prova em
22/11/2026) e **TCE-GO** (prova em 17/01/2027) como "provas de rodagem".
Carga assumida: 2h/dia.

É uma página estática única, sem framework e sem build, pensada para o autor
acompanhar o próprio progresso e ser instalada como PWA no celular.

## Arquitetura

| Arquivo | Papel |
|---|---|
| `index.html` | Marcação, CSS e **toda a lógica** (render, estado, abas, backup). |
| `data.js` | **Só conteúdo do plano.** Script clássico; cada `const` vira global. |
| `sw.js` | Service worker cache-first do shell (abrir instalado sem rede). |
| `manifest.json` | Metadados PWA. |
| `icon-*.png`, `apple-touch-icon.png` | Ícones (marca gerada proceduralmente: barras cor de vinho). |

### Fluxo

`init()` → `loadState()` (lê `localStorage`) → `renderAll()` → `setupTabs()` →
`setupBackup()` → registra o service worker no `load`.

Toda mutação de estado segue o mesmo caminho: handler altera `state`, chama
`saveState()` e re-renderiza com `renderAll()` (re-render total; o volume de
dados é pequeno e não justifica render incremental).

### Estado

```js
state = { v:1, weeksDone:{}, nucleoDone:{}, dailyLog:{} }
```

- `weeksDone` — chave = número da semana (`w.n`), valor `true`. Desmarcar
  apaga a chave.
- `nucleoDone` — chave = `id` da disciplina, valor `true`.
- `dailyLog` — chave = data ISO local (`YYYY-MM-DD`), valor `true`.
- `v` — versão do schema. `normalizeState()` é o ponto de migração e também
  valida qualquer JSON importado antes de aplicar.

Persistido em `localStorage['controle-externo-progress']`. É **por navegador /
por dispositivo** — não sincroniza. Daí o cartão de backup (exportar/importar
JSON) na aba Painel.

### Dados do plano (`data.js`)

- `exams` — **fonte única** das datas de prova. As semanas referenciam por
  `examId`; o selo "Prova do … em dd/mm" e os contadores do topo são derivados
  daqui. Mudou a data de uma prova? Muda só aqui (e em `keyDates`, que é o
  calendário completo).
- `weeks` — 21 semanas, cada uma com `faseId`, `start`, `end` (a 21ª tem
  `end:null` = fase de continuidade sem fim). `currentWeek()` devolve a última
  semana cujo `start` já passou, o que cobre lacunas de calendário entre
  semanas e a semana aberta do fim.
- `phases`, `nucleoCore`, `nucleoExtra`, `platforms`, `keyDates`,
  `opportunistic`, `rotina` — listas de conteúdo. `rotina` é indexada por
  `Date.getDay()` (0 = domingo).

## Decisões

- **Sem framework / sem build** de propósito: abre em qualquer lugar, deploy é
  `git push`. Não introduzir bundler.
- **HTML por concatenação de string + `innerHTML`.** Seguro hoje porque todo
  texto vem de constantes do autor. Se algum campo virar editável na tela,
  migrar para `<template>` + `textContent` antes (senão vira XSS).
- **Tema claro/escuro** via `prefers-color-scheme`, com todas as cores em
  CSS custom properties.
- **CSP** restritiva por `<meta>` (só `self` + Google Fonts).
- **Service worker** faz cache só do shell. Fontes do Google e recursos
  externos continuam dependendo de rede — é PWA instalável, não app offline.

## Deploy

GitHub Pages, branch `main`, raiz.
Repo: https://github.com/victorlimass/painel-estudos-controle-externo
URL: https://victorlimass.github.io/painel-estudos-controle-externo/

Ao alterar `sw.js` ou os assets em cache, incrementar `CACHE` em `sw.js`
(`painel-estudos-v1` → `v2`) para os clientes já instalados pegarem a versão
nova.

## Histórico

- **2026-08-31 — empacotamento para deploy.** A versão original rodava no
  ambiente de artifacts do Claude.ai e usava `window.storage.get/set`. Trocado
  por `localStorage`. Arquivo renomeado de `painel-estudos-controle-externo.html`
  para `index.html`. Adicionados `manifest.json`, ícones e meta tags PWA.
- **2026-08-31 — rodada de melhorias (este commit).**
  - Conteúdo do plano extraído para `data.js`.
  - `exams` como fonte única das datas de prova; semanas passam a usar `examId`
    em vez do texto solto `exam`.
  - Correções: `isoDate()` agora usa data **local** (era UTC, gerava
    off-by-one fora do fuso do Brasil); `weeksProgress()` conta as semanas com
    `end` definido em vez de assumir posição no array; `currentWeek()`
    reescrito para cobrir lacunas de calendário; chaves de `weeksDone`
    normalizadas para número; `dailyLog` deixa de guardar `false`.
  - `loadState`/`saveState` deixaram de ser `async` (eram por causa da API
    antiga); `init()` protegido por `try/catch`.
  - Tema escuro; contraste de `--ink-faint` ajustado para AA.
  - Abas com semântica ARIA (`tablist`/`tab`/`tabpanel`) e navegação por seta;
    checkboxes do cronograma com `aria-label`.
  - Aba Painel: cartão "Constância" (heatmap do `dailyLog` no plano inteiro) e
    cartão "Backup do progresso" (exportar/importar JSON, resetar).
  - Cronograma destaca a semana atual.
  - Service worker (`sw.js`) para o app instalado abrir sem rede.
  - CSP via `<meta>`; fonte Fraunces reduzida ao peso realmente usado (500).

Nada do **conteúdo do plano** (focos, datas, disciplinas, rotina) foi alterado
nessa rodada — só lógica, apresentação e empacotamento.
