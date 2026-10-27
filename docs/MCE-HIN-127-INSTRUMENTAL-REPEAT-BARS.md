# MCE · Hino 127 instrumental e geometria das barras (27/10/2026)

## Correção editorial — 127
O usuário confirmou que **hino 127** é exclusivamente **musicado / instrumental, sem letra cantada**. Ele **não é lacuna no índice**. Preservar a posição 127 entre 126 e 128 no contêiner único de leitura. Exibir `127 · Instrumental (musicado)` ou denominação oficialmente verificada; não inventar título, letra, ritmo ou partitura.

Referência externa: https://nossairmandade.com/hymn/3291 , identifica **O Cruzeiro #127** e uma gravação. A edição anexa `O_CRUZEIRO.pdf` (155 páginas, português/inglês) pula do 126 ao 128 nas páginas PDF 148–149, coerente com a ausência de letra. Essa edição não confirma por si só a denominação musical nem os direitos da gravação.

## Módulo iconográfico reservado
Planejar `MCE-HIN-127-INSTRUMENTAL-MEDIA`: slot de imagem de proporções configuráveis para a arte comemorativa **55 anos Mestre Canto Ensino**, apenas após escolha da imagem e homologação. Até então, exibir rótulo documental neutro e preservar a integridade da sequência. Não substituir nem alterar a arte original de **50 anos**.

## Evidência visual das barras no PDF
O PDF em anexo mostra no hino **36 · Amigo Velho**, **página impressa 41 / página PDF 42**:
- Um traço vertical fino alinhado às **duas primeiras linhas**.
- **Duas barras verticais** alinhadas às **duas linhas seguintes**, com indicação **5x**.
- As barras estão ligeiramente à esquerda da estrofe, próximas entre si e condicionadas a **alcances de versos**, não à altura de todos os quatro versos.
- O exemplo constitui fonte para HOW TO SHOW da geometria; é preciso registrar `start_verse`, `end_verse`, `bar_count`, `repeat_label`, `source_page`, e eventualmente segmentos independentes para um mesmo hino.
- Não impor barras ao 127 instrumental nem a outros hinos sem fontes correspondentes.

## Cinco HOW TO
- **DO:** renderizar o item 127 no percurso contínuo com `kind=instrumental`, sem fabricar estrofes.
- **RECORD:** manter proveniência do PDF, fonte web, estado de imagem `proposed_not_approved`, notas sobre barras.
- **SHOW:** cartão harmônico dentro do módulo do hinário; imagem comemorativa opcional após homologação, barras vetoriais independentes dos blocos.
- **CHECK:** confirmar número 127 na ordem; sem letra inventada; comparar barras com a página original antes de publicar.
- **SPEAK:** gravação externa referenciada; reprodução incorporada somente após verificação de licença/arquivo.

## Próxima execução (ainda pendente)
1. Inserir item instrumental 127 no JSON de importação **após validação da sequência** e antes da promoção.
2. Expandir contrato de barras por intervalo de versos e conferir casos de três barras nas páginas originais.
3. Registrar a arte 55 anos quando identificada; homologar dimensões e comportamento Portrait/A5.
4. Testar 126 → 127 instrumental → 128, inclusive sem índice e sem uma página por hino.
5. Não alterar `main` até validação do corpus e apresentação.
