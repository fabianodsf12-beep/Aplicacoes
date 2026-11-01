# Projetos Nadiana

Este repositório guarda os aplicativos da Fazenda Reata: página inicial (`index.html`), Painel de aplicações (`painel.html`), Lançamentos (`lancar.html`) e Experimentos (`experimentos/`).

A base de design da Nadiana Agronegócios fica em outro repositório, `fabianodsf12-beep/nadiana-design`, publicada em https://fabianodsf12-beep.github.io/nadiana-design/v1/. Os apps carregam a base desse endereço; não copie os arquivos dela para cá.

## Design: siga sempre a base Nadiana

Antes de criar ou mudar qualquer tela, relatório, PDF ou apresentação, leia as regras em https://github.com/fabianodsf12-beep/nadiana-design/blob/main/v1/README.md e siga.

- Carregue a base pelo endereço publicado: `https://fabianodsf12-beep.github.io/nadiana-design/v1/tokens.css`, `componentes.css`, `icones.js`, `nadiana.js` (e `graficos.js`, `tokens.js`, `pdf.js` quando precisar).
- Cores, espaços e cantos só por variável de `tokens.css` (`var(--brand)`, `var(--space-4)`). Não invente cor nova; se faltar uma, proponha antes de usar.
- Use os componentes `nd-` antes de criar estilo próprio. Página nova começa do `v1/modelo.html` da base.
- Cabeçalho claro com o logo (`.nd-topo`); o verde fica para ações. Navegação com `.nd-app` + `.nd-nav`.
- Ícones só do conjunto Lucide de `icones.js`; gráficos com `graficos.js` (até 4 séries, `graf-1` a `graf-4`, um eixo só); PDF com `pdf.js`.
- Fontes: Barlow (texto) e Barlow Condensed (títulos e números).
- Tema claro e escuro nos aplicativos; PDF só claro.
- Textos em português do Brasil, curtos, com os termos do campo; números no padrão brasileiro com unidade ("142,51 ha", "R$ 7.113,32", "12/10/2026"). Sem emojis.
- Toda situação (atraso, aviso, concluído) tem palavra ou ícone, não só cor.
- Contraste 4,5:1 nos dois temas; foco visível; alvos de toque de 44px ou mais.
- Logo: arquivos de `v1/logos/` da base, sem recolorir. No cabeçalho, o símbolo (`nadiana-simbolo.svg`, classe `.nd-simbolo`), que funciona em fundo claro e escuro; o logo vertical com o nome na tela inicial, sempre na placa branca (`.nd-logo`) em fundo escuro.
- Se um app precisar de algo que a base não tem, proponha incluir na base (repositório nadiana-design) em vez de criar só aqui.

A mesma base está no claude.ai como Design System "Nadiana" (https://claude.ai/artifact/RJR1bMDsYXqaLHa9YU91JV). Ao fazer um desenho (Design) ou artifact, use esse design system.

## Projeto novo em outro repositório

Copie `modelos/CLAUDE.md` do repositório nadiana-design para a raiz do projeto novo.
