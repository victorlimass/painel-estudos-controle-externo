# Painel de estudos — Controle Externo

Painel pessoal de acompanhamento de um plano de estudos para concursos da área de
controle externo (foco TCU, com TCDF e TCE-GO como provas de rodagem).

- **Stack:** um único `index.html` com HTML/CSS/JS puro, sem build e sem
  dependências além das fontes do Google Fonts via CDN.
- **Armazenamento:** o progresso (semanas concluídas, disciplinas do núcleo e
  registro diário de estudo) é salvo no `localStorage` do navegador, portanto
  persiste entre sessões no mesmo dispositivo/navegador.
- **PWA:** inclui `manifest.json` e ícones para permitir "instalar" a página como
  atalho na tela inicial do celular. Não há service worker — não funciona
  offline por opção.

## Rodar localmente

Basta abrir `index.html` no navegador, ou servir a pasta:

```bash
npx serve .
```

## Deploy

Site estático — qualquer hospedagem de arquivos estáticos serve a pasta como
está. Publicado via GitHub Pages a partir da branch `main`.
