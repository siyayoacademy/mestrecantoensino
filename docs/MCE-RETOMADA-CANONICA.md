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
