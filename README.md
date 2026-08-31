# Painel de estudos — Controle Externo

Painel pessoal de acompanhamento de um plano de estudos para concursos da área de
controle externo (foco TCU, com TCDF e TCE-GO como provas de rodagem).

**No ar:** https://victorlimass.github.io/painel-estudos-controle-externo/

## Como funciona

- **Stack:** HTML/CSS/JS puro, sem build. `index.html` tem a lógica; `data.js`
  tem o conteúdo do plano (semanas, fases, disciplinas, datas). Única
  dependência externa: fontes do Google Fonts via CDN.
- **Armazenamento:** o progresso (semanas concluídas, disciplinas do núcleo e
  registro diário de estudo) é salvo no `localStorage` do navegador, sob a
  chave `controle-externo-progress`. Persiste entre sessões no mesmo
  dispositivo/navegador; não sincroniza entre aparelhos.
- **Backup:** aba Painel → cartão "Backup do progresso" → Exportar / Importar
  JSON e Resetar.
- **PWA:** `manifest.json` + ícones para instalar como atalho na tela inicial.
  Um service worker (`sw.js`) faz cache do shell para o app instalado abrir sem
  rede — não é um app offline completo.
- **Tema:** claro/escuro automático conforme o sistema.

## Editar o plano

Todo o conteúdo fica em [`data.js`](data.js): `weeks`, `phases`,
`nucleoCore`, `nucleoExtra`, `platforms`, `keyDates`, `opportunistic`,
`rotina` e `exams`. As datas das provas ficam só em `exams` — as semanas
referenciam por `examId`. Ao mexer no service worker ou nos assets, suba o
número em `CACHE` dentro de `sw.js` para forçar atualização.

Mais contexto de arquitetura e histórico em [`CONTEXTO.md`](CONTEXTO.md).

## Rodar localmente

Precisa ser servido por HTTP (o service worker não registra em `file://`):

```bash
npx serve .
```

## Deploy

Site estático publicado via GitHub Pages a partir da branch `main` (raiz).
Qualquer hospedagem de arquivos estáticos serve a pasta como está.
