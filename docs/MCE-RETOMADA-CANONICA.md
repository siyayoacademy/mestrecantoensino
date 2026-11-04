# MCE — RETOMADA CANÔNICA ENTRE CHATS
Atualizado: 2026-10-30
Projeto: Mestre Canto Ensino
Repositório: https://github.com/siyayoacademy/mestrecantoensino
Branch ativa de desenvolvimento e publicação: main
Produção: https://mestrecantoensino.pages.dev/
Leitor principal: https://mestrecantoensino.pages.dev/#cruzeiro
Leitor canônico incorporado: estudo-repeticoes/hin-09-3-layout.html
GUIA DE CONTINUIDADE — Leia este arquivo ANTES de pesquisar novamente ou editar o projeto.

## Fontes e prioridades
1. Fonte textual pré-existente do projeto: https://unaqui.wordpress.com/ — contém O Santo Cruzeiro Universal por extenso, incluindo hinos além dos 20 primeiros. Consultar PRIMEIRO, evitando redescobrir letras.
2. Fonte musical/documental de confronto: PDF fornecido pelo usuário, O SANTO CRUZEIRO Partituras.pdf. Considerar edições PT/EN, partituras, variantes e páginas; não inventar barras e dados rítmicos.
3. Registros do projeto: MAPA-DE-REPETICOES.md; docs/MESTRE-CANTO-ENSINO-MODULE-GOVERNANCE-REGISTRY.md; docs/MCE-HINARIOS-ACERVO-MESTRE-GUIA-AUXILIAR.md.
4. Dados atuais: data/santo-cruzeiro-universal.json (parcial e histórico); data/cruzeiro-hin-11-20-staging.json (lote em preparação); dados canônicos visíveis atualmente no HTML do laboratório.
5. Buscar também branches e outros repositórios antes de concluir que um JSON integral não existe. A árvore da main consultada em 30/10/2026 não possui um JSON único com o hinário integral.

## Estado homologado
- 01–10: leitor visual aprovado pelo usuário; integração ao Index validada com prints Cloudflare, dentro de O Santo Cruzeiro Universal, seguida por Diversões do Mestre e Santa Missa.
- Leitura contínua, sem índice de seleção e sem botões NEXT entre hinos.
- Cada hino: módulo individual borda dourada, numeração/título, linha de oferta opcional invisível quando vazia, tipo excepcional em itálico à direita acima da primeira estrofe; MARCHA implícita, VALSA/MAZURCA ou execução mista explícita.
- Barras finas à esquerda, delimitadas por estrofe/intervalo; não generalizar barras; Papai Paxá primeira estrofe com segmentos 1–2 e 3–4; Mãe Celestial duas barras paralelas primeira estrofe; Lua Branca duas barras conforme homologação.
- Área de respiro interna: 36px de referência acima do título, 36px antes e depois do separador dourado Sol · Lua · Estrela, simetria visual. Os símbolos atuais estão aprovados; SVG não é exigência imediata.
- Separador MCE-SEP-04: futuras habilidades capturar imagem APENAS do hino correspondente, oferecer share de imagem/link e adaptar formatos; NÃO implementadas ainda.
- Não mexer na arquitetura e módulos vizinhos do Index (homenagem, Diversões, Santa Missa, bandeiras, palco, páginas internas); não alterar outro projeto SIYAYO Academy.

## Lote corrente: HIN-11–20
- Texto-base completo está no UNAQUI: consultar o site antes de re-transcrever.
- JSON staging: data/cruzeiro-hin-11-20-staging.json; transcrições preliminares 11–14; 15–20 em conferência; o lote ainda não integra o leitor público.
- Barras predominantes apenas na primeira estrofe quando documentadas; exceção Rogativo dos Mortos (14): três últimas estrofes marcadas separadamente por barras integrais; conferir outras marcas com PDF.
- Hino 17 Meu Divino Pai do Céu: 'Confissão' em itálico no espaço de execução, cantado sem instrumentos; não inserir como parte do título nem como ritmo.
- Rogativo dos Mortos: mesma identidade musical em O Cruzeiro 14 e Santa Missa 3 (seleção), não duas composições independentes.
- Antes de publicar lote, confrontar ordem/estrofes/versos/barras com UNAQUI, PDF e imagens fornecidas; registrar variantes explicitamente e pedir homologação visual do usuário.

## Protocolo obrigatório de retomada
1. Ler este documento, arquivos de governança e JSON do lote; localizar commit HEAD/branch/deploy real.
2. Ler o conteúdo UNAQUI e verificar se existe JSON completo em outras branches/repositórios antes de fazer qualquer transcrição do zero.
3. Identificar ELO atual e o conjunto de arquivos que podem mudar, preservando código e conteúdo previamente homologados.
4. Trabalhar de dez em dez, sem avançar para lote seguinte antes de conferir o atual.
5. Antes de commit: comparar o diff com a versão homologada, validar HTML/JS/JSON, verificar que módulos do Index não foram perdidos, nem hinos/dados apagados.
6. Após commit: registrar SHA e verificar a publicação Cloudflare. Publicação bem-sucedida não equivale à homologação visual.
7. Atualizar este arquivo em todo ELO significativo: estado, próximas ações, referências e decisões; nunca substituir arbitrariamente a versão principal.

## Comando de retomada para outro chat
"Retome o projeto Mestre Canto Ensino, branch main, lendo PRIMEIRO docs/MCE-RETOMADA-CANONICA.md, MAPA-DE-REPETICOES.md e o registro de governança. Confira o UNAQUI como fonte textual pré-existente, investigue JSON integral existente, confira HEAD e produção Cloudflare. Preserve os hinos 01–10 homologados e prossiga no lote 11–20 com HOW TO DO/HOW TO SHOW, sem duplicar transcrições nem modificar outros projetos."

## ELO HIN-20.1 — Atualização de produção (30/10/2026)

- O leitor canônico busca `data/cruzeiro-hin-11-20-staging.json` por fetch same-origin e acrescenta os hinos 11–20 aos 01–10, preservando o Index e todos os módulos adjacentes.
- Commits: `764bb823` (leitor) e `73426be` (texto do Index). Dez registros estão visíveis no JSON; publicação Cloudflare e auditoria visual ainda exigem conferência.
- A fonte textual base é o UNAQUI (`https://unaqui.wordpress.com/`); evitar redigitar letras disponíveis. Rogativo dos Mortos mantém indicações abreviadas das horas em partes do texto, não declarar expansão integral. Distinguir apresentação completa de transcrição com abreviações.
- Hino 17 mostra `Confissão` em itálico no campo da execução. Barras 11–20 e variantes devem ser conferidas pelo músico na produção; 01–10 permanecem preservados.
- Próxima ação obrigatória: verificar renderização 01–20 no Cloudflare, barras e posição dos símbolos, sem voltar a pesquisar do zero nem avançar ao 21–30 antes da homologação.

## Checkpoint 2026-11-01 — lote 01–20 homologado

O autor confirmou no site real o hino 20 Sempre Assim com barras e leitor integrado ao Index, e autorizou seguir para 21–30 na `main`. A diretriz anterior de não avançar antes de homologação está satisfeita para esta etapa. Fonte de texto: UNAQUI já existente; não reconstruir manualmente por buscas genéricas. Consultar relato histórico em `docs/MCE-CONTEXTO-HISTORICO-E-RAMIFICACOES.md`, distinguindo edições Alto Santo e CEFLURIS. Preservar módulos e regras homologados. Próximo elo HIN-21–30.

## Checkpoint HIN-30.1 — 2026-11-01

Relato histórico do idealizador guardado em docs/MCE-CONTEXTO-HISTORICO-E-RAMIFICACOES.md. Após aprovação do lote 01–20, hinos 21–30 incorporados na branch main a partir do UNAQUI em data/cruzeiro-hin-21-30.json (38 estrofes, todos os dez hinos), consumidos pelo leitor canônico estudo-repeticoes/hin-09-3-layout.html e mostrados no Index com legenda 01–30. NÃO reiniciar transcrição. Barras musicais de 21–30 foram intencionalmente deixadas vazias para revisão do músico; evitar inferência ou marcação indiscriminada. Testar publicação Cloudflare, visualização de 21–30 em AUTO/PORTRAIT/LANDSCAPE, e em seguida registrar precisamente as barras e variantes segundo os apontamentos do autor. Hinos 01–20 e demais módulos do Index foram preservados.

## ELO HIN-30.2 — 2026-11-01 · HOW TO DO / HOW TO SHOW

Aprovação explícita do autor: hinos 21–24, 26–27, 29–30 levam barra integral na primeira estrofe. Hinos 25 Oferecimento e 28 Cantar Ir: barra integral na primeira estrofe e barra adicional nos versos finais (3–4). Hinos 29 Sol, Lua, Estrela e 30 Devo Amar Aquela Luz: indicador `bis` em branco, negrito e itálico, alinhado à direita acima da primeira estrofe, sem parênteses. Hinos 02 Tuperci e 03 Ripi: `tris` com idêntico tratamento sem parênteses. Valsa (01, 08, 13) e Confissão (17): texto dourado em itálico, com respiro entre número/título e anotação; `VALSA` normalizado visualmente para `Valsa`. Respiros do módulo e marcadores dourados existentes preservados. Dados das barras em data/cruzeiro-hin-21-30.json; apresentação em estudo-repeticoes/hin-09-3-layout.html, carregada pelo Index. HOW TO CHECK: conferir em produção, portrait/landscape/auto; validar alturas por verso, barras e rótulos. Não avançar para 31–40 antes desta homologação.

## HIN-30.3 — Geometria canônica das barras (2026-11-01)

A referência visual aprovada é o hino 01 Lua Branca. O alinhamento horizontal deve ser calculado a partir do INÍCIO DO TEXTO DE CADA ESTROFE (não de uma coordenada absoluta no painel): a primeira barra/mais próxima da estrofe fica 9px à esquerda do início do texto; havendo um segundo trilho paralelo, a segunda barra fica mais 6px à esquerda (15px do texto). Slots documentais antigos 9 e 17 são identificadores de trilhos e agora são convertidos dinamicamente usando o padding real da estrofe. Respeitar o responsivo: quando o padding do texto muda, as barras acompanham. Continuar a medir a altura pelo primeiro e último verso de cada faixa.

Correção do hino 08 A Rainha Me Mandou: barra da primeira estrofe começa no verso 1, não no verso 2. Preservadas as barras duplas dos hinos 25 e 28, barras segmentadas de Papai Paxá e trilhos paralelos de Mãe Celestial. HOW TO CHECK: conferir distâncias horizontais no navegador PORTRAIT/LANDSCAPE e todas as ocorrências, com o padrão de Lua Branca. Não considerar homologação visual apenas pelo commit.

## ELO HIN-30.4 — Correção de regressão das barras (2026-11-01)

O usuário rejeitou a inversão visual introduzida em HIN-30.3 e confirmou a imagem de Lua Branca anterior como padrão. A barra contínua integral fica MAIS EXTERNA (esquerda), e a barra parcial dos versos finais fica MAIS PRÓXIMA DO TEXTO (direita). Contrato CSS geométrico: com padding esquerdo dinâmico da estrofe, barra externa no `padding-left - 31px` (slot documental 9), barra interna no `padding-left - 23px` (slot 17); distância entre trilhos de 8px. Alturas continuam calculadas pelas caixas dos versos e intervalos próprios. Não inverter a ordem de trilhos novamente. A correção foi aplicada ao leitor canônico sem mudar letras ou dados das repetições. Conferir visualmente no Cloudflare em portrait e landscape antes de homologar.

## HIN-30.4.1 — Relação geométrica X > Y (2026-11-01)

Anexo do autor confirma o diagrama das barras, lidas do texto para a esquerda: 1ª barra = mais próxima do verso, 2ª = mais externa, 3ª = ainda mais externa caso exista. Definição: X = distância horizontal do início da linha textual à primeira barra mais próxima; Y = separação horizontal entre barras adjacentes. Regra obrigatória: X > Y. Geometria atual verificada no leitor: X = 23px e Y = 8px (a barra contínua do hino 01 fica em X+Y = 31px). Portanto satisfaz 23 > 8. Para terceira barra, seguir a mesma progressão para a esquerda, sem inverter ordem nem inventar terceira marcação. A altura de cada barra continua independente e vinculada aos versos que efetivamente se repetem. Qualquer alteração dos valores exige nova conferência visual em PORTRAIT e LANDSCAPE; preserve dados musicais e hinos homologados.

## HIN-30.5 — Auditoria 01–30 da geometria X > Y (2026-11-01)

Conferidos o mapa embutido 02–10 e os JSON 11–20 e 21–30. As barras existentes usam identificadores 9 (contínua/externa) e 17 (interna), com X=23px e Y=8px; os intervalos originais foram preservados. O componente agora admite terceiro trilho identificado como 25, situado a X+2Y=39px antes do texto, sem criar marcação nova onde não há indicação musical. Lua Branca preservada como referência. Hino 08 permanece marcado do primeiro ao quarto verso. Exceções confirmadas: Papai Paxá com dois segmentos verticais, Mãe Celestial com duas barras, Rogativo dos Mortos com barras nas três últimas estrofes, Oferecimento e Cantar Ir com barra integral + parcial nos dois versos finais. CHECK pendente: renderização responsiva em Cloudflare, não homologar só pelo commit.

## HIN-40.1 — 2026-11-01

O lote 31–40 foi transcrito do UNAQUI para `data/cruzeiro-hin-31-40.json` (10 hinos, 44 estrofes), incorporado no leitor canônico, e a legenda do Index alterada para 01–40. Preserve todas as homologações 01–30, incluindo X=23px, Y=8px (X>Y), barras por estrofe, bis/tris e respiros. Todas as barras de 31–40 estão vazias de propósito: aguardar marcações musicais apontadas pelo autor, sem inferi-las. Conferir deploy e responsividade, depois marcar o próximo ELO HIN-40.2 para revisão das barras. Não confundir commit com homologação visual.

## HIN-40.2 — barras 31–40 e anotação especial 5X (2026-11-01)

Autor autorizou produção na branch main: 31 Papai Samuel (pares segmentados), 32 Cantei Hoje (barra integral na primeira estrofe), 33 Papai Velho (integral), 34 Estrela Brilhante (integral), 35 Santa Estrela (integral), 36 Amigo Velho (barra nos dois primeiros versos + indicador dourado 5X alinhado entre as duas últimas linhas da primeira estrofe), 37 Marizia (integral), 38 Flor de Jagube (dois segmentos), 39 Centro Livre (dois segmentos de dois versos na primeira estrofe e barra integral na última de três versos), 40 Eu Canto nas Alturas (contínua externa e segmentada interna nos últimos dois versos como Lua Branca). Preservado contrato X>Y. `data/cruzeiro-hin-31-40.json` contém intervalos e `repeatAnnotations`; leitor HIN-09.3 incorpora a marcação relativa à posição dos versos. Verificação no GitHub não substitui homologação visual no Cloudflare.

## HIN-40.2.1 — 5x de Amigo Velho (2026-11-01)

Refinamento autorizado do hino 36: `5x` dourado, negrito e itálico, com x minúsculo; situado à ESQUERDA da barra externa da primeira estrofe, num vão reservado por recuo de 70px somente nessa estrofe. Posição vertical centralizada em relação às linhas 3 e 4, sem invadir a distância à primeira barra, com folga mínima de 5px. O texto e a barra mantêm uma distância calculada pelos parâmetros homologados X/Y. Implementação pontual no leitor canônico, a verificar visualmente na produção antes de homologar. Não alterar os demais hinos.

## HIN-40.2.2 — alinhamento Amigo Velho (2026-11-01)

Print demonstrou regressão: somente a primeira estrofe tinha padding-left 70px por causa do 5x, deslocando-a em relação às demais. Correção pontual: todas as estrofes do hino 36 compartilham o mesmo padding-left de 70px, mantendo o 5x dourado, itálico, à esquerda da barra, centralizado verticalmente nas linhas 3–4. Preservar todas as barras e outros hinos. Conferência de produção ainda necessária.

## HIN-40.2.3 — Alinhamento superior dos caracteres 5x (2026-11-01)

No hino 36, manter indicador dourado, itálico e posição já homologada à esquerda da barra, centralizado no par final de versos. Renderizar 5 e x em spans independentes, alinhados pelo topo com `inline-flex` e `align-items:flex-start`, respeitando diferença visual entre maiúscula numérica e x minúsculo. Não deslocar as estrofes ou outras barras. Conferir resultado no Cloudflare antes da homologação de impressão.

## HIN-40.2.4 — Alinhamento óptico do 5x na interface (2026-11-01)

O alinhamento flex-start não bastou porque a letra x minúscula possui altura visual menor. Ajuste local no componente do hino 36: aplicar deslocamento óptico `top:-0.22em` somente ao span do x; manter 5 e x dourados itálicos, a posição à esquerda da barra, a centralização do grupo nas últimas duas linhas, a coluna e todos os respiros. Não aplicar globalmente a outros hinos. Validar visualmente no site e na impressão antes de homologar.

## HIN-50.2 — 2026-11-01 · lote 41–50 integrado na main

Arquivo `data/cruzeiro-hin-41-50.json` contém os dez hinos em português provenientes do UNAQUI e intervalos de barras conforme orientação visual do autor: 41,44,45,47,49 contínua na primeira; 42 barra externa integral e interna nos versos 3–4; 43 dois segmentos na primeira e dois na segunda (versos 1–2 / 3–5); 46 barra nos quatro refrões de dois versos; 48 dois segmentos na primeira; 50 barra externa integral e interna nos versos 1–2. Hino 44 exibe Valsa. O leitor canônico busca o novo arquivo após 31–40 e o Index anuncia 01–50. Padrão X=23px, Y=8px (X>Y) e os lotes 01–40 preservados. Validação de código GitHub separada da homologação visual na Cloudflare. Na próxima conferência revisar 43 e 46 com especial cuidado.

## HIN-50.3 — Salomão, correção confirmada pelo autor (2026-11-01)

Hino 50, primeira estrofe: barra contínua externa cobrindo versos 1–4 (`[0,4,9]`); barra segmentada interna cobrindo apenas versos 3–4 (`[2,4,17]`). Não aplicar a segmentada aos versos 1–2. Hino 43 O Prensor confirmado; hino 46 Eu Balanço com barra somente nos refrões repetidos de dois versos (estrofes 1, 3, 5 e 7). Preservar X>Y e os hinos anteriores. Validar visualmente no Cloudflare.

## HIN-50.3.1 — 2026-11-01 · Correções finais 43 e 46

Confirmado pelo autor e aplicado diretamente em `data/cruzeiro-hin-41-50.json`: hino 43 O Prensor: estrofe 1 barras independentes nos versos 1–2 e 3–4; estrofe 2 barras nos versos 1–2 e 4–5, verso 3 'O teu Pai não conheceu' EXPLICITAMENTE SEM BARRA; demais estrofes sem barras. Hino 46 Eu Balanço: barra somente na PRIMEIRA ocorrência do refrão (estrofe 1, versos 1–2), sem barras em qualquer ocorrência posterior. Hino 50 Salomão preservado com barra externa integral e interna nos dois últimos versos. Não inferir barras por igualdade de texto em outras estrofes. A publicação Cloudflare e a conferência visual ainda devem ser verificadas separadamente.

## HIN-FINE-BARS.1 — Acabamento óptico vertical (2026-11-01)

Aprovado pelo autor para verificação inicial: barras de repetição contínuas ou segmentadas com respiro óptico de 3px acima e abaixo da área aproximada dos glifos do primeiro e último verso afetados, centralizadas verticalmente; subtrair também metade da entrelinha excedente (`(line-height - font-size)/2`) para não ultrapassar o corpo visual da letra. Única rotina compartilhada `measure()` do leitor canônico foi alterada; intervalos musicais dos hinos 01–50 permanecem inalterados, assim como a geometria X>Y. Verificar primeiramente no smartphone/PORTRAIT e comparar com 2px ou 4px antes de homologação; checar também LANDSCAPE e impressão. É aproximação tipográfica, não medição real de glifos, portanto revisão visual necessária.

## HIN-51–60 — Fonte PDF homologada pelo autor (2026-11-01)

O autor escolheu explicitamente https://nossairmandade.com/hinario/14/OCruzeiro/pdf como PDF autorizado para cotejo editorial e musical do próximo lote. Fonte textual do projeto continua UNAQUI. Ordem confirmada na edição: 51 Eu Devo Amar; 52 A Febre do Amor; 53 Virgem Mãe Divina; 54 Pedi Força a Meu Pai; 55 Disciplina; 56 Santa Estrela Que Me Guia; 57 Eu Convido Os Meus Irmãos; 58 Todo Mundo Quer Ser Filho; 59 O Divino Pai Eterno; 60 Laranjeira. No PDF o 60 vem indicado como Valsa. A leitura textual do PDF foi possível, mas a inspeção gráfica das barras falhou (screenshot indisponível); NÃO deduzir intervalos a partir do texto. Conferir a imagem das páginas antes de gravar barras e de homologar. Preservar 01–50 e todos os contratos MCE-HYM-REUSABLE-01.

## HIN-60.1 — 2026-11-01 · Staging isolado 51–60

Criado `data/cruzeiro-hin-51-60-staging.json` com textos portugueses e estrofes 51–60 extraídos do UNAQUI; hino 60 Laranjeira marcado VALSA. `visible:false`, `barsStatus:not_verified_pdf_visual`, arrays de barras vazios significam ausência de comprovação, **não ausência de barra**. O arquivo não está ligado ao leitor do Index; os hinos 01–50 permanecem intactos. Documento PDF autorizado: https://nossairmandade.com/hinario/14/OCruzeiro/pdf. A captura/renderização gráfica das páginas falhou nesta sessão; etapa seguinte obrigatória: verificar imagens de cada página e transcrever exatamente as barras em comparação com a fonte, validar impressão/PORTRAIT e somente então incorporar 51–60 ao leitor. Não converter texto em regra musical por inferência.

## HIN-60.3 — 2026-11-01 · PDF local conferido e lote 51–60 integrado

O usuário anexou `O CRUZEIRO UNIVERSAL.pdf` (155 páginas). Conferidas visualmente as páginas físicas 61–70, correspondentes aos hinos 51–60 (numeração impressa 60–69). As barras foram registradas no JSON `data/cruzeiro-hin-51-60-staging.json`: hino 51 estrofe 1 três versos; 52 estrofe 1 dois primeiros; 53–59 estrofe 1 integral; 60 Valsa estrofe 1 barra externa integral e interna nos dois últimos versos, estrofe 2 três barras paralelas integrais. Nenhuma marca em outras estrofes. `visible:true` e `barsStatus:visually_checked_uploaded_PDF_pages_61_70`. Leitor `estudo-repeticoes/hin-09-3-layout.html` agora carrega 51–60 após 41–50 e aplica a mesma medição óptica homologada de 3px; Index anuncia 01–60. Os 50 primeiros hinos foram mantidos. Conferir publicação Cloudflare e homologação visual final em smartphone; não confundir publicação de commit com verificação da produção. Fonte documental PDF Nossa Irmandade aprovada pelo usuário, fonte textual UNAQUI.

## HIN-70.1 — 2026-11-01 · Preparação segura hinos 61–70

PDF local `O CRUZEIRO UNIVERSAL.pdf` inspecionado visualmente páginas físicas 71–81. Arquivo `data/cruzeiro-hin-61-70-staging.json` gerado, **visible:false e NÃO conectado ao leitor público**, com textos preliminares provenientes UNAQUI e marcações verticais preliminares da imagem do PDF. Exceção relevante hino 63 Princesa Soloína: linha vertical externa parece percorrer a primeira e segunda estrofes juntas, com segunda barra apenas na segunda estrofe; renderer atual faz barras independentes por estrofe, então não simular continuidade sem componente específico. Revisar também diferenças textuais entre fontes: 61 terceira estrofe UNAQUI 'Eu apresento os meus ensinos', enquanto PDF carregado diz 'Eu apresento os meus trabalhos'. Preservar fielmente edição escolhida após conferência. Hinos 01–60 inalterados; 52 A Febre do Amor homologado com duas barras segmentadas [0,2] e [2,4]. Próximo elo: cotejo PDF-versos, projetar barra transestrofe para hino 63 e validar na visualização antes de ativar 61–70.

## HIN-70.3 — 2026-11-01 · Princesa Soloína, travessia entre estrofes

Autor confirmou visualmente: 63 Princesa Soloína, barra externa única e contínua desde início da estrofe 1 até fim da estrofe 2; na estrofe 2 há também barra interna integral, e as demais não usam essa marcação. Dado JSON `crossStanzaBars:[{fromStanza:0,toStanza:1,slot:9}]`, barra da segunda estrofe `[0,4,17]`, primeira sem barra local duplicada. Leitor canônico inclui função independente `measureCrossStanzaBars()` para desenhar o intervalo total com a mesma compensação de tipografia/3px e trilhos homologados; chamada após medir estrofes. 61 terceira estrofe corrigida conforme PDF: 'Eu apresento os meus trabalhos'. Hinos 61–70 habilitados e conectados à sequência; Index mudou para 01–70. Commits e código em main; ainda exigem teste visual Cloudflare PORTRAIT e homologação expressa; hinos 01–60 não editados. Não transformar em duas barras externas desconectadas.

## HIN-70.4 — Correções visuais orientadas pelos anexos (2026-11-01)

63 Princesa Soloína: preservar barra externa única atravessando estrofes 1–2 e barra interna somente estrofe 2. Causa do desaparecimento da externa no carregamento: `measureCrossStanzaBars()` era invocada somente na inicialização, antes do fetch assíncrono do lote 61–70; a rotina passou a ser chamada ao FINAL de cada `measure()`, recalculando após carregamento e redimensionamento. 64 Eu peço a Jesus Cristo: estrofe 1 barra externa integral `[0,4,9]` com barra interna segmentada nos versos 3–4 `[2,4,17]`; estrofe 7 sem qualquer barra. Preservar 01–60 e acabamento 3px. Ambos requerem conferência visual na produção Cloudflare.

## HIN-80.2 — 2026-11-01 · Leitura vetorial PDF 71–80

Do PDF homologado anexado `O CRUZEIRO UNIVERSAL.pdf`, páginas físicas 82–91 (impressas 81–90), analisadas imagens e coordenadas dos traços verticais vetoriais: 71–80, total 46 estrofes. JSON `data/cruzeiro-hin-71-80.json` contém texto inicial de UNAQUI e barras musicais conforme coordenadas do PDF. Hino 71 Chamo o Tempo tem barra dupla (externa integral + interna segmentada em dois trechos na primeira estrofe, internas integrais nas seguintes); hinos 77 Chamo e Sei e 80 Chamo a Força começam com duas barras segmentadas correspondentes aos dois pares de versos; demais estrofes do lote conforme barras impressas. O leitor canônico carrega o novo lote após 61–70, e o Index anuncia 01–80. Inset óptico 3px e X>Y mantidos. Preserve integralmente 01–70, inclusive 63/64 homologados. **Conferência Cloudflare portrait e homologação do autor ainda pendentes:** não inferir que o commit é aprovação visual; corrigir pontualmente eventuais diferenças com screenshots e PDF original.

## HIN-80.3 — 2026-11-01 · Correção autoral das barras 71–80

Correção direta na `main` por instrução expressa do autor. Todos os hinos 71–80 usam barras SOMENTE na primeira estrofe; todas as estrofes seguintes ficam com `bars: []`. Hino 71 Chamo o Tempo: barra externa integral `[0,4,9]` e interna nos dois últimos versos `[2,4,17]`, sem barra interna nos dois primeiros. Hinos 72–76, 78 e 79: barra integral na primeira estrofe. Hinos 77 Chamo e Sei e 80 Chamo a Força: dois segmentos, versos 1–2 e 3–4, na primeira estrofe. Não presumir por texto ou pelo desenho de todas as ocorrências do PDF que a marca de execução deva se repetir em estrofes posteriores. Esta regra é confirmada especificamente para 71–80, não altera exceções homologadas de outros hinos. Arquivo `data/cruzeiro-hin-71-80.json` commit `ef4dc8f597fc8b9a3980519631b0682c9094099b`; conferência Cloudflare ainda pendente.

## HIN-90.2 — 2026-11-01 · Lote 81–90 em produção para conferência

PDF homologado `O CRUZEIRO UNIVERSAL.pdf` examinado nas páginas físicas 92–102 (hinos 81–90, hino 84 com página de continuação). JSON `data/cruzeiro-hin-81-90.json` criado com 10 hinos e textos da fonte UNAQUI, marcações verticais interpretadas pela primeira estrofe; hinos 81,85–89 com dois segmentos de dois versos; 82,83,90 com barra integral; 84 com externa integral e dois segmentos internos. Os restantes versos/estrofes não recebem novas barras neste lote, seguindo orientação autoral do lote 71–80. O leitor canônico carrega 81–90 após 71–80; Index anuncia 01–90. **PENDENTE HOMOLOGAÇÃO VISUAL do lote 81–90:** atenção ao hino 81 Professor, no qual o PDF separa os primeiros dois versos como bloco e o UNAQUI reúne quatro versos; verificar equivalência musical. Preservar hinos 01–80 homologados. GitHub `main` atualizado; publicação efetiva Cloudflare não validada separadamente.

## HIN-100.2 — 2026-11-01 · Hinos 91–100 integrados para conferência

Arquivo PDF autoral homologado `O CRUZEIRO UNIVERSAL.pdf` páginas físicas 103–112 examinado (hinos 91–100); traços vetoriais das barras e rótulos de ritmo lidos. JSON `data/cruzeiro-hin-91-100.json`: hino 91 Choro Muito em VALSA, barra externa integral e duas internas segmentadas na primeira estrofe; 92 Sou Humilde igual geometria; 93–96 e 99–100 barra integral na primeira; 97 Centenário primeira estrofe de três versos; 98 Sou Filho Desta Verdade com duas barras segmentadas na primeira. Demais estrofes sem barras para orientar leitura conforme política homologada pelo autor no lote 71–80. Dez hinos conectados ao leitor após 81–90; Index anuncia 01–100. Preservar 01–90 inclusive correção aprovada hino 84. A homologação visual dos hinos 91–100 está pendente e pode demandar correções pontuais pelo autor. Não confundir integração na main com confirmação de deploy Cloudflare.

## HIN-100.3 — 2026-11-01 · Correções visuais autorais dos hinos 84, 91, 92 e 97

Conforme anexos do autor: hino 84 Ia Guiado Pela Lua, hino 91 Choro Muito (VALSA), hino 92 Sou Humilde — primeira estrofe com UMA barra contínua externa nos quatro versos `[0,4,9]` e UMA barra segmentada interna nos dois últimos versos `[2,4,17]` (nenhuma interna nos dois primeiros). Hino 97 Centenário — primeira estrofe de três versos SEM linha; segunda estrofe, somente os dois versos 'Chamo e sei, chamo e sei / Chamo e sei quem te mandou' com barra segmentada `[0,2,9]`; demais estrofes preservadas sem barras. Arquivos `data/cruzeiro-hin-81-90.json` e `data/cruzeiro-hin-91-100.json` corrigidos diretamente na main. Pendente cotejo visual após deploy Cloudflare.

## HIN-110.2 — 2026-11-01 · Lote 101–110 integrado

Recuperado acesso GitHub após bloqueio inicial e criado `data/cruzeiro-hin-101-110.json`. Dez hinos (101–110) transcritos do UNAQUI, com indicações de VALSA para 108 Linha do Tucum e 110 De Longe; barras da primeira estrofe baseadas no cotejo visual duplo do PDF homologado: 101/102/104/108/109/110 dois segmentos de dois versos; 103/105/106/107 barra contínua de quatro versos. Estrofes seguintes sem marcação adicional por convenção musical já homologada, sujeitas à revisão visual do autor. Leitor canônico passou a buscar 101–110 após 91–100 e Index anuncia 01–110. Hinos 01–100 preservados; não confundir commit na main com confirmação de deploy no Cloudflare. Próxima etapa: visualização PORTRAIT, revisão das exceções e homologação musical 101–110; preservar acabamento 3 px e geometria X > Y.

## HIN-120.2 — 2026-11-01 · Hinos 111–120 em português

Lote `data/cruzeiro-hin-111-120.json` criado após duas leituras das barras verticais no PDF anexado `O CRUZEIRO UNIVERSAL.pdf`, páginas físicas 123–136, escolhendo as versões em português quando coexistem páginas EN/PT. Fonte auxiliar dos versos: UNAQUI. Hino 117 Dou Viva a Deus Nas Alturas em VALSA. Barras da primeira estrofe: 111,115,116,119,120 integrais; 112,117,118 dois segmentos; 113 e 114 externa integral com interna nos versos 3–4. Demais estrofes sem novas barras segundo padrão editorial autoral, aguardando conferência visual. Leitor canônico carrega 111–120 após 101–110 e Index anuncia 01–120. Preservar integralmente os hinos 01–110 já homologados e o acabamento óptico 3px, X>Y, notas e exceções; não afirmar deploy Cloudflare verificado apenas pelo commit. A dupla leitura PDF-versos é regra obrigatória para os próximos lotes.

## HIN-130.2 — 2026-11-01 · 121–130, somente português, dupla leitura

PDF anexado `O CRUZEIRO UNIVERSAL.pdf`: páginas físicas portuguesas 138,140,142,144,146,148,150,152,154 comparadas com traços vetoriais de barras duas vezes; fonte textual UNAQUI. Numeração original salta de 126 para 128: **hino 127 ausente do PDF e UNAQUI; não inventar, não normalizar contagem**. O lote `data/cruzeiro-hin-121-130.json` contém nove hinos 121,122,123,124,125,126,128,129,130. Primeira estrofe: 121 e 129 duas barras separadas; 122,124,125 barra externa contínua + duas internas segmentadas; 123,126,128,130 barra externa integral. Ritmo VALSA em 121 e 123. Nas estrofes seguintes não repetir marcações, seguindo norma de leitura do autor; exceções futuras só por homologação. Integração conectada após 111–120, Index anuncia abrangência 01–130 com ressalva de lacuna 127. Hinos 01–120 preservados. Pendente homologação visual 121–130 e verificação Cloudflare.

## HIN-130.3 — 2026-11-04 · Instrumental 127 e correções 122/124/125

O usuário confirmou que o hino 127 existe e é exclusivamente instrumental, com intenção de inserir futuramente a partitura correta para piano. Não se trata de lacuna documental a preencher com versos. No arquivo `data/cruzeiro-hin-121-130.json`, hinos 122,124,125 com barras `[0,4,9]` externa contínua e `[2,4,17]` interna somente nos dois últimos versos. Hino 127 incluído cronologicamente entre 126/128 com `kind:'instrumental'`, `stanzas:[]`, `footerMarkers:true` e `imageBlock` provisório. O leitor `estudo-repeticoes/hin-09-3-layout.html` renderiza a exceção como título, respiro, imagem central com fundo verde, respiro, separador Sol Lua Estrela, sem marcações de ritmo nem barras. O emblema provisório reutiliza o asset de projeto `eagle-white.png` sobre um fundo verde CSS: NÃO é a cópia binária da imagem enviada pelo usuário. Ao substituir pela partitura para piano, alterar somente `imageBlock.src` e estilos proporcionais ao papel, mantendo as demais homologações. Lote tem 10 hinos numerados 121–130. Publicação na main confirmada no GitHub; atualização Cloudflare e homologação visual ainda precisam de teste pelo usuário.
