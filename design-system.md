# Design System — Manual Peptídeos

## 1. Tokens de Cor

| Token | Valor |
|---|---|
| `background` | `#4c52fe` |
| `background-section` | `#f0f8ff` |
| `surface` | Glassmorphism com degradê nas bordas na cor gelo (`#f0f8ff`) + `backdrop-filter: blur(12px)`. Implementado como wrapper de 2 camadas (`p-px` com `background` em degradê gelo por fora, conteúdo opaco por dentro, mesmo `clip-path` nos dois) — ver `Price.tsx`. `BenefitCard.tsx` ainda usa a versão simplificada (`border-border` flat); pendente de atualizar pro mesmo padrão. |
| `text` | `#f0f8ff` |
| `text-heading` | `#f0f8ff` |
| `text-muted` | `#f0f8ff` (opacidade **85%**) |
| `accent` | `#121827` |
| `accent-hover` | `#172444` (segundo stop do gradiente CTA) |
| CTA gradiente | `linear-gradient(90deg, #121827, #172444)` — horizontal, `accent` → azul petróleo |
| `border` | `rgba(240, 248, 255, 0.08)` (mesmo tratamento do surface, base `text-heading`) |
| `text-heading-on-light` | `#4c52fe` — headlines sobre `background-section` |
| `text-on-light` | `#121827` — sublines e texto corrido sobre `background-section` |
| `text-heading-on-accent` | `#4cb7fe` — headlines sobre `accent` (ex: boxes da seção Unlock) |

## 2. Tipografia

### H1
- Fonte: **Outfit** (Google Fonts)
- Peso: **500 (Medium)** por padrão — **700 (Bold)** apenas nos trechos de destaque do H1 da Hero
- Sem `text-transform: uppercase` — usar a caixa normal do texto

### H2
- Fonte: **Outfit** (Google Fonts)
- Peso: **500**
- Tamanho: **24px** (Hero) — demais seções conforme especificado por seção
- Exceção — H2 da seção Founder (dobra 3): **22px** (mobile) / **36px** (desktop). No desktop peso **700 (Bold)** por inteiro, um nível acima do padrão; no mobile o peso é **normal (400/500)** com negrito seletivo só nas palavras de destaque (quebra de linha e negrito definidos por pedido explícito — ver `titleLinesMobile` em `content.ts`)

### Subline
- Fonte: **Outfit** (Google Fonts)
- Tamanho: **22px** no desktop (Hero, Unlock, etc.) — no mobile usa os **18px** da regra geral da seção 6

### Texto Corrido (body)
- Fonte: **Outfit** (Google Fonts)
- Tamanho: **18px**
- Peso: **400 (Regular)** — um nível abaixo do padrão 500 usado nos demais textos

## 3. Espaçamentos e Grid

- Container máximo: **1280px**
- Padding lateral de seção: **24px** (mobile) / **60px** (desktop)
- Padding vertical de seção: **40px** (mobile) / **80px** (desktop)
- Gap do grid: **20px** (mobile) / **30px** (desktop)
- Exceção — grid de boxes da seção Unlock: réplica exata do `FeatureCard`/`Section2Landing` de `guia-ultramar` (mesma referência de fontes da seção 2). Container do grid com `max-w-[1040px]`, 2 colunas a partir do `lg:`, gap **16px** (mobile) / **32px** (desktop) — não usa os tokens gerais acima.

## 4. Imagens

### `BANNER-HERO-DESKTOP.webp`
- Seção: **Hero**
- Posicionamento: A imagem tem o tamanho perfeito para encaixar na página, não faça com que ela extrapole demais. Pode usar 100% do tamanho dela, deixando-a centralizada. Em mobile/tablet usa `bg-background-section` como fallback até a versão mobile ser enviada.
- Fundo da seção: `background-section` (mesma cor da seção Unlock) — textos mantêm as cores atuais mesmo assim, por causa da imagem.
- Sem container, sem `border-radius`
- Texto sobreposto em branco (contraste com o fundo azul da imagem)

### `SVG-PATTERN.svg`
- Seção: **Unlock** (segunda dobra) — fundo da seção inteira
- Usado como `mask-image` de uma camada `background-color`, não renderizado diretamente
- Estado padrão: cor igual ao `background-section` (some visualmente)
- Hover na seção: transiciona para `accent` (cor original do SVG)

### `box-1.webp` / `box-2.webp`
- Seção: **Unlock** (segunda dobra) — imagem dos dois `BenefitCard` (`box.image` em `content.ts`), `object-cover` num container `aspect-4/3`.

### `sobre.webp`
- Seção: **Founder** (dobra 3) — foto do médico, `object-cover` num container `aspect-3/4` com o chanfro da seção (`IMAGE_CLIP_PATH`).

Demais imagens de composição: pendente — cliente vai enviar arquivos adicionais e indicar as seções correspondentes.

## 5. Seções — Referências Estruturais

- **Footer**: réplica estrutural do rodapé de `guia.rafaelultramar.com.br` (mesmo comportamento em mobile — não muda de layout entre breakpoints, só escala tamanhos), com cores e fonte adaptadas aos tokens deste projeto. Lá o fundo escuro é `background` (tom neutro mais escuro do site deles); aqui o equivalente é `bg-accent` (mesmo painel escuro já usado no rodapé dos boxes do `BenefitCard`), com `border-border` no lugar do `border-white/10` deles, `text-text-heading-on-accent` no lugar do `text-accent` deles (logo, copyright em negrito, link "Nova Dimensão") e `text-text/50` no lugar do `text-text/50` deles pro texto miúdo (disclaimer e prefixo do crédito) — mesmo nome de token, mesmo papel. Hiperlink "Nova Dimensão" mantido apontando pro mesmo link deles (`credit.href` em `content.ts`). Texto do copyright trocado para `© 2026 Dr. Gustavo Sá`.

- **FAQ** (dobra 5, `#faq`): container com `max-w-[1000px]` (mais estreito que o `--container-max` de 1280px, de propósito — melhora a legibilidade do acordeão). Acordeão idêntico ao `FAQ.tsx` do projeto `Oratória de Elite` — lista com borda superior + divisórias entre itens, um item aberto por vez, ícone `+` que gira 45° ao abrir, resposta expande por altura animada. Fundo `background-section` (a mesma cor clara do Unlock) — por isso usa os tokens `-on-light` (`text-heading-on-light`, `text-on-light`) em vez de `text-heading`/`text-muted`/`border-border`, que são pensados pra fundo escuro e ficam invisíveis aqui. Hover usa `accent` (não tem um token de destaque dedicado pra cima de fundo claro). Perguntas construídas só com fatos já usados no projeto (preço, garantia, entregáveis, credenciais do Founder) — sem dado novo inventado.
- **Price** (dobra 4, `#preco`): estrutura idêntica à `Section5` de `guia-ultramar` — card centralizado (`max-w-[440px]`) com logo, checklist (ícone + texto), bloco de preço (de/por) e CTA, sobre um fundo de seção cheio, com duas faixas de logo rotacionadas (`+6deg`/`-6deg`, cores invertidas entre si) correndo atrás do card, visíveis só no `lg:`. Cores e chanfro seguem os tokens deste projeto, não os valores literais da referência.
- **Sombra em elemento com `clip-path`**: `box-shadow` não funciona em elementos com `clip-path` — o clip corta a sombra inteira, já que ela só existiria fora da forma recortada. Usar `filter: drop-shadow(...)` no lugar, que é aplicado depois do recorte e não é cortado por ele. Ver `Price.tsx` (`CARD_GLOW`).
- **Truque do canto entre seções chanfradas**: quando o canto cortado de uma seção (a que TEM o corte) precisa mostrar a cor da seção vizinha por trás, a seção **vizinha** (a "vista através", sem o corte) sobe por cima dela com `lg:-mt-12`. A compensação de espaço vai **na seção vizinha, do lado que ela cresceu** (ex: se ela subiu por baixo de quem tem o corte, ela ganha `padding-top` extra; se por cima, `padding-bottom` extra) — nunca na seção que tem o corte, que fica com padding normal. Isso mantém o padding de cada seção "limpo" (o valor padrão), em vez de inflar artificialmente o padding de quem só está recebendo o corte.
  - `z-index`: quem TEM o corte precisa ficar por cima (continua pintando normalmente em toda a faixa sobreposta, só expõe a vizinha no triângulo cortado) — a vizinha fica sem `z-index` (nível base), nunca o contrário, senão o corte não aparece (fica com a cor do `body`, sem contraste).
  - Estado atual: **Price** fica sandubada entre Founder (acima) e FAQ (abaixo), então ela quem sobe pelos dois lados e recebe as duas compensações: `padding-top: calc(...+48px)` (relação com a Founder) e `padding-bottom: calc(...+48px)` (relação com a FAQ). **Founder `z-10`** e **FAQ `z-10`** (as que têm o corte); **Price sem `z-index`** (nível base, é sempre quem aparece atrás). Founder e FAQ não se sobrepõem entre si, então podem ter o mesmo valor sem conflito.

## 6. Mobile

Regras específicas do mobile (abaixo do `lg:`) — **nunca alterar o valor de desktop pra aplicar essas regras**, sempre usar o padrão `valor-mobile lg:valor-desktop-original`.

- **Sem chanfro no mobile**: todo `clip-path` do projeto usa o helper `responsiveClipPath()` (`src/lib/clip-path.ts`), que só ativa o corte a partir do `lg:` via `style={{'--clip': ...}}` + `className="lg:[clip-path:var(--clip)]"`. No mobile todo elemento fica retangular. Isso também elimina qualquer necessidade dos truques de cor de canto (seção 5) no mobile, já que não tem corte pra colorir.
  - Exceção — CTA do Hero, CTA da seção Unlock e CTA da seção Price: chanfrados (`tl`/`br`, 18px) também no mobile, via `clipPath: CTA_CLIP_PATH` aplicado direto (sem passar por `responsiveClipPath()`). Pedido explícito, não seguir esse padrão em outros CTAs sem pedido equivalente.
  - Exceção — box da foto na seção Founder: chanfrado (`tl`/`br`, 24px) também no mobile, via `clipPath: IMAGE_CLIP_PATH` aplicado direto (sem passar por `responsiveClipPath()`). Pedido explícito, não seguir esse padrão em outros elementos sem pedido equivalente.
- **Tipografia mobile**:
  - Headline (H1/H2 de seção): **30px**
  - Subline: **18px**
  - Texto corrido e CTA's: **16px**
  - Essas regras não se aplicam a textos de componente (ex: título do box do `BenefitCard`, pergunta do acordeão da FAQ) — esses já têm tamanho próprio, calibrado à parte.
- **CTA's no mobile**: texto centralizado (`text-center` + `justify-center`/`items-center`) e `leading-none` (volta pro `leading` normal só no `lg:`).
- **Sem quebra de linha herdada do desktop**: todo texto com quebras manuais (`titleLines`, `desktopLines`, etc.) precisa ter uma variante mobile separada (`lg:hidden`), nunca reaproveitar o array com `<br>` pensado pro desktop. Por padrão essa variante flui livre (texto "achatado", sem `<br>`); quando o pedido especifica quebras próprias pro mobile, criar um array dedicado (ex: `titleLinesMobile`/`subtitleLinesMobile`) com `<br>` entre as linhas — nunca inventar quebra sem pedido explícito. Ver `Hero.tsx`, `Founder.tsx`, `BenefitCard.tsx`.
- **Hero no mobile**: `bg-background` (azul padrão) em vez do `bg-background-section` do desktop — a imagem do banner desktop fica escondida (`lg:block`) e é substituída por `BANNER-HERO-MOBILE.webp` própria, que sangra os paddings laterais e o padding-top da seção (`-mx-`/`-mt-` cancelando os tokens de spacing) e fica no topo, com o bloco de conteúdo sobrepondo 30px acima dela (`-mb-[30px]` na imagem). Sem essa imagem o fundo `background-section` (gelo) deixaria o texto branco ilegível. No mobile a altura da seção é automática (sem `min-h-screen`/`h-screen`) — o conteúdo agora começa no topo (`justify-start`, não mais centralizado), então forçar `min-h-screen` sobrava espaço vazio embaixo quando o conteúdo é mais baixo que 100vh; `h-screen` fixo continua só no `lg:`. Logo separado (`Logo.tsx`) fica oculto no mobile (`hidden lg:block`), já que a marca já vem embutida na imagem do banner.
