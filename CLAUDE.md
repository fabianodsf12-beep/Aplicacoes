# Projetos Nadiana

Este repositório guarda os aplicativos de aplicações da Fazenda Reata e a base de design da Nadiana Agropecuária, na pasta `nadiana/`.

## Design: siga sempre a base Nadiana

Antes de criar ou mudar qualquer tela, relatório, PDF ou apresentação, leia `nadiana/README.md` e siga as regras de lá. Elas valem para todos os projetos da Nadiana.

- Cores, espaços e cantos só por variável de `nadiana/tokens.css` (`var(--brand)`, `var(--space-4)`). Não invente cor nova; se faltar uma, proponha antes de usar.
- Use os componentes `nd-` de `nadiana/componentes.css` (e `nadiana/nadiana.js`) antes de criar estilo próprio. Página nova começa de `nadiana/modelo.html`.
- Cabeçalho claro com o logo (`.nd-topo`); o verde fica para ações. Navegação com `.nd-app` + `.nd-nav`.
- Ícones só do conjunto Lucide em `nadiana/icones.js`; gráficos com `nadiana/graficos.js` (até 4 séries, `graf-1` a `graf-4`, um eixo só); PDF com `nadiana/pdf.js`.
- Fontes: Barlow (texto) e Barlow Condensed (títulos e números).
- Tema claro e escuro nos aplicativos; PDF só claro.
- Textos em português do Brasil, curtos, com os termos do campo; números no padrão brasileiro com unidade ("142,51 ha", "R$ 7.113,32", "12/10/2026"). Sem emojis.
- Toda situação (atraso, aviso, concluído) tem palavra ou ícone, não só cor.
- Contraste 4,5:1 nos dois temas; foco visível; alvos de toque de 44px ou mais.
- Logo: arquivos de `nadiana/logos/`, sem recolorir; sobre fundo escuro, dentro de placa branca.

A mesma base está no claude.ai como Design System "Nadiana" (https://claude.ai/artifact/RJR1bMDsYXqaLHa9YU91JV). Ao fazer um desenho (Design) ou artifact, use esse design system. Se uma cor mudar lá, copie o `tokens.json` para `nadiana/` e rode `python3 nadiana/gerar_tokens.py`.

`tokens.css`, `tokens.js` e `icones.js` são gerados: não edite à mão.

## Projeto novo em outro repositório

Copie a pasta `nadiana/` e este `CLAUDE.md` para o repositório novo.
