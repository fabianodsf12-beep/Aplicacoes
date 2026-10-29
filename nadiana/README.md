# Nadiana: base de design

Regras visuais de todos os projetos da Nadiana Agropecuária: aplicativos de campo (Painel de aplicações, Lançamentos), relatórios (como o de aplicação localizada WEED-IT) e apresentações. Todo projeto novo parte daqui.

A mesma base está publicada como Design System **Nadiana** no claude.ai: https://claude.ai/artifact/RJR1bMDsYXqaLHa9YU91JV. Os dois têm os mesmos valores; o `tokens.json` desta pasta é cópia do de lá.

## O que tem nesta pasta

| Arquivo | Para quê |
| --- | --- |
| `tokens.json` | Fonte única de cores, textos, espaços e cantos. |
| `tokens.css` | Os tokens como variáveis CSS (`var(--brand)`), tema claro e escuro, e as fontes. Gerado: não edite à mão. |
| `gerar_tokens.py` | Gera o `tokens.css` a partir do `tokens.json`. |
| `componentes.css` | Base da página e componentes prontos, todos com prefixo `nd-`. |
| `padrao-de-cores.png` | Imagem com todas as cores, nos temas claro e escuro. |
| `vitrine.html` | Mostra todas as cores, textos e componentes funcionando. Abra para conferir. |
| `modelo.html` | Página de partida para um app novo. |
| `logos/` | Logo vertical, horizontal e símbolo (PNG, fundo branco). |
| `fonts/` | Barlow e Barlow Condensed em woff2. |

## Como usar num projeto novo

1. Copie a pasta `nadiana/` para o projeto (ou aponte para ela, se o projeto ficar neste repositório).
2. Na página, carregue os dois arquivos, nesta ordem:
   ```html
   <link rel="stylesheet" href="nadiana/tokens.css">
   <link rel="stylesheet" href="nadiana/componentes.css">
   ```
3. Comece do `modelo.html`.
4. Copie também o `CLAUDE.md` da raiz deste repositório para a raiz do projeto novo, para o Claude seguir estas regras lá.

Numa página publicada como Artifact do Claude, arquivos externos não carregam: cole o conteúdo de `tokens.css` e `componentes.css` dentro de `<style>` e troque as fontes locais pelo Google Fonts (`family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700`).

Para mudar uma cor: altere no Design System do claude.ai (ou no `tokens.json`), copie o `tokens.json` para cá e rode `python3 nadiana/gerar_tokens.py`.

## Marca

- Logo **vertical** (`logos/nadiana-logo-vertical.png`, nome em `nadiana-petroleo`) em capas e telas de abertura. Logo **horizontal** (`logos/nadiana-logo.png`, nome em `nadiana-preto`) em cabeçalhos e rodapés estreitos. **Símbolo** (`logos/nadiana-simbolo.png`) para ícone de app, favicon e espaços pequenos, a partir de 24px de altura.
- Os PNGs têm fundo branco. Coloque o logo sobre branco ou `panel` claro; sobre faixa escura (`brand`, `nadiana-petroleo`), dentro de uma placa branca (`.nd-placa`).
- Respiro em volta de pelo menos metade da altura do símbolo. Não recolora, não estique, sem sombra nem contorno.

## Cores

Use sempre a variável, nunca o código da cor solto no CSS.

![Padrão de cores Nadiana](padrao-de-cores.png)

- **Identidade.** `nadiana-verde` em faixas, blocos de capa, ícones e números grandes. Texto verde sobre branco: `nadiana-verde-escuro`. Sobre fundo escuro: `nadiana-verde-claro`. `nadiana-petroleo` é o escuro da marca, para títulos de capa e faixas.
- **Interface.** Fundo `bg`, cartões `panel`, campos e linhas alternadas `panel2`. Texto `ink`; rótulos, unidades e apoio `muted`. Bordas `line`, divisões leves `line2`.
- **Ação.** Botão principal e item ativo em `brand` com texto `brand-ink`. Destaque suave (chips, resumo) em `brand-soft`.
- **Situação.** Aviso: `warn` sobre `warn-bg`. Erro ou atraso: `bad` sobre `bad-bg`. Concluído: `ok`. Toda situação leva uma palavra ou ícone, nunca só a cor.
- **Calendário de aplicações.** `s-programada`, `s-prox7`, `s-janela`, `s-atrasada`, `s-adiantada`, `s-none`, sempre com legenda visível.
- Texto branco sobre `nadiana-verde` só a partir de 24px (19px em negrito). Botão verde usa `brand` ou `nadiana-verde-escuro`.
- Aplicativos têm tema claro e escuro; relatórios em PDF só o claro.

## Tipografia

- **Barlow** para texto (`--font-body`), **Barlow Condensed** para títulos e números (`--font-display`).
- Classes prontas: `.nd-titulo-pagina` (28px), `.nd-subtitulo` (18px), `.nd-numero-destaque` (30px), `.nd-corpo-destaque` (17px), `.nd-corpo` (16px), `.nd-corpo-pequeno` (14px), `.nd-rotulo` (13px, caixa alta), `.nd-legenda` (12,5px).
- Números que se comparam em coluna: `font-variant-numeric: tabular-nums` (ou a classe `.nd-num`).

## Espaço e cantos

- Espaços: `--space-1` 4px, `--space-2` 8px, `--space-3` 12px, `--space-3_5` 14px, `--space-4` 16px, `--space-5` 20px, `--space-6` 24px.
- Margem lateral mínima `space-4`. Cartões com padding `space-4` (`space-6` nos grandes) e `space-5` entre eles. Linhas e campos: `space-3` na vertical, `space-3_5` na horizontal.
- Cantos: `radius-md` (8px) em botões, `radius-lg` (10px) em campos, `radius-xl`/`radius-2xl` (12/14px) em cartões, `radius-pill` em chips e etiquetas, `radius-xs` em barras de gráfico.
- Alvos de toque com pelo menos 44px de altura; campos de formulário 48px.

## Componentes (`componentes.css`)

| Classe | O que é |
| --- | --- |
| `.nd-wrap` (`.largo`, `.estreito`) | Coluna central com margem lateral segura (860, 1440 ou 640px). |
| `.nd-topo` (`.sticky`) | Faixa de cabeçalho em `brand` com título e subtítulo. |
| `.nd-placa` | Placa branca para o logo sobre fundo escuro. |
| `.nd-cartao` (`.grande`), `.nd-grade`, `.nd-pilha` | Cartão e arranjos de cartões. |
| `.nd-kpi` | Rótulo em caixa alta + número grande com unidade. |
| `.nd-btn` (`.primario`, `.grande`) | Botões. |
| `.nd-campo`, `.nd-inp`, `.nd-linha2` | Rótulo + campo de formulário; duas colunas. |
| `.nd-seg` | Seletor de uma opção entre poucas (`aria-pressed`). |
| `.nd-chips`, `.nd-chip` | Itens escolhidos, com botão de remover. |
| `.nd-pill` (`.ok`, `.aviso`, `.erro`) | Etiqueta de situação. |
| `.nd-st` (`.programada`, `.prox7`, `.janela`, `.atrasada`, `.adiantada`, `.none`) | Status do calendário: marcador colorido + nome. |
| `.nd-msg` (`.aviso`, `.erro`) | Mensagem em faixa, com ícone. |
| `.nd-lista` | Linhas com título, apoio e situação dentro de um cartão. |
| `.nd-tabela-wrap`, `.nd-tabela` (`td.n`) | Tabela com rolagem lateral própria; `.n` alinha números à direita. |
| `.nd-net` (`.ocupado`, `.erro`) | Indicador de conexão no cabeçalho. |
| `.nd-rodape` | Rodapé com a origem dos dados. |

## Conteúdo e linguagem

- Português do Brasil, frases curtas e diretas, como quem fala no campo. Termos da operação: talhão, calda, vazão, abastecimento, janela de aplicação, área aplicada, OS.
- Números no padrão brasileiro, com a unidade junto: "142,51 ha", "12.702 L", "100 L/ha", "R$ 7.113,32", "12/10/2026".
- Títulos em caixa de frase ("Relatórios salvos"); caixa alta só nos rótulos.
- Resultado primeiro, detalhe depois ("O WEED-IT aplicou em 6,8% do talhão"). Sem emojis.
- Botões dizem a ação exata ("Registrar execução"), e a confirmação repete ("Execução registrada").

## Dados e mapas

- Convencional × localizada: convencional em `mapa-convencional` (cinza), localizada em `nadiana-verde`.
- Mapa de aplicação: talhão em `mapa-campo`, pontos aplicados em `mapa-aplicado`, limite em `nadiana-petroleo`. Todo mapa leva norte, escala em metros e legenda.
- Mapa de infestação (quadrados de 5 × 5 m): abaixo de 2% em `mapa-campo`, depois `infestacao-1` a `infestacao-4`. Laranja é reservado para planta daninha e aplicação.

## Ícones

- Ícones de linha simples, traço de 1,8 a 2px, pontas arredondadas, na cor do texto (`currentColor`), `nadiana-petroleo` ou `brand`.
- Relatórios representam abastecimentos com a silhueta de pulverizador autopropelido.

## Acessibilidade

- Contraste mínimo de 4,5:1 (3:1 a partir de 24px) nos dois temas. Os pares descritos acima já atendem.
- Foco do teclado: contorno de 2px em `focus`, afastado 3px (já vem em `componentes.css`).
- Respeite `prefers-reduced-motion` (já vem em `componentes.css`).
