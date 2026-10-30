# ELO 1Q · Comparação das marcas impressas (v2.0)

Fonte primária: arquivo fornecido pelo usuário `O SANTO CRUZEIRO Partituras.pdf`, páginas PDF 143, 173, 193 e 295 (hinos 28, 42, 50, 92).

## Evidência visual observada

| Hino | Nome na edição | Página | Primeira apresentação em destaque |
|---|---|---:|---|
| 28 | CANTAR IR | 143 | Uma barra vertical esquerda e / antes dos versos 3 e 4 |
| 42 | A TERRA AONDE ESTOU | 173 | Uma barra vertical esquerda e / antes dos versos 3 e 4 |
| 50 | SALOMÃO | 193 | Uma barra vertical esquerda e / antes dos versos 3 e 4 |
| 92 | SOU HUMILDE | 295 | Uma barra vertical esquerda e / antes dos versos 3 e 4 |

As marcas estão nas linhas do texto com acordes em destaque, antes da continuidade em texto corrido. Não assumir repetição gráfica equivalente em todas as estrofes. Os traços duplos propostos na v1.9 são uma hipótese funcional, NÃO cópia documental.

## Proposta de homologação

- Modelo A: barra esquerda contínua e barras inclinadas antes dos versos marcados — reprodução esquemática fiel ao sistema gráfico observado.
- Modelo B: barra longa e segmento curto — interpretação editorial funcional que exige aprovação e contraste com outras edições.
- Nada é publicado no leitor principal enquanto não homologado.
- Não inserir índice, pautas musicais ou controles NEXT no fluxo do coral.

## ELO 1R · Homologação do Modelo A (v2.1)

O usuário homologou a gramática visual observada nesta edição: **uma barra vertical à esquerda e marcas `/` nos versos indicados**. O laboratório `estudo-repeticoes/integracao-modelo-a.html` aplica a estrutura de modo responsivo para quatro exemplos, com versos **fictícios identificados como marcadores**, sem atribuir letras aos hinos.

A homologação é **do modelo gráfico**, não constitui verificação de todas as estrofes, da extensão exata de cada barra, nem equivalência universal entre edições. Antes de integrar ao leitor principal, confrontar estrofe a estrofe e preservar a formatação original.

Futuro: componente `documentary-stanza` recebe `verses`, `slashBeforeVerse` e `barStart/barEnd` provenientes de transcrição comprovada, nunca inferidos da numeração do hino.

## MCE HIN-10.2 — Papai Paxá e Mãe Celestial (30/10/2026)

Fonte: recortes visuais fornecidos pelo autor do projeto. Não extrapolar a outras estrofes.

- 06 Papai Paxá, primeira estrofe: HOW TO DO = intervalos [0,2) e [2,4), mesma posição horizontal (slot 9). HOW TO SHOW = duas barras segmentadas e separadas verticalmente, uma nos versos 1–2 e outra nos versos 3–4.
- 09 Mãe Celestial, primeira estrofe: HOW TO DO = dois intervalos [0,5) nos slots 9 e 17. HOW TO SHOW = duas barras paralelas com cinco versos de altura, afastadas 8px.

HOW TO CHECK: dimensionar as barras pelas caixas reais dos versos em PORTRAIT, AUTO e LANDSCAPE; preservar Lua Branca e as demais estrofes; não confundir barras segmentadas com paralelas. Código: estudo-repeticoes/hin-09-3-layout.html. A verificação de deploy Cloudflare e homologação no dispositivo é independente do commit.

## MCE HIN-10.3 — Contrato especializado HOW TO DO / HOW TO SHOW (30/10/2026)

Escopo: leitura consecutiva dos hinos 01–10 no módulo `estudo-repeticoes/hin-09-3-layout.html`, publicado diretamente na `main`. Preservar registros homologados antes de lotes futuros de dez hinos.

- HOW TO DO: cada hino contém número, título, atributo de oferta opcional, tipo rítmico opcional e estrofes com intervalos independentes de barras. `MARCHA` é valor implícito, não rótulo visível. Apenas `VALSA`, `MAZURCA` e formas mistas verificadas recebem texto de ritmo.
- HOW TO SHOW: borda dourada individual; título central; linha de oferta invisível quando vazia (não mostrar placeholder); bloco de leitura centralizado com largura do conteúdo; ritmo em itálico, alinhado à direita DENTRO da mesma largura da primeira estrofe, acima dela; barras à esquerda seguindo intervalos por verso, jamais copiadas indiscriminadamente.
- ÁREA DE RESPIRO: manter espaço entre última estrofe e separador Sol · Lua · Estrela, e espaço após o separador antes do próximo módulo. Não desenhar linha horizontal dourada entre hinos. O separador fica dentro do módulo do respectivo hino.
- HOW TO CHECK: verificar AUTO, PORTRAIT e LANDSCAPE; nomes/títulos, alinhamento do ritmo, ocultação do campo de oferta, altura das barras e respiro; não declarar Cloudflare atualizado somente por existir commit. A cada lote de dez, primeiro confrontar o mapa e preservar o que foi homologado.

Nota: a disposição editorial foi implementada no laboratório em HIN-10.3; ainda requer inspeção visual no deploy para homologação de layout.
