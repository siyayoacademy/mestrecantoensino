# MCE HIN-08 · Integração dos hinários PT em módulos do Index

**Branch:** `jaguar/mce-hymn-publishing-audit-20261026`. **Status:** implementado na branch experimental, não homologado visualmente nem publicado em produção.

## Arquivos efetivamente incorporados
- `data/mce-diversoes-do-mestre-pt-en.json`: 10 hinos em português + 10 versões inglesas preservadas para módulos próprios.
- `data/mce-santa-missa-pt.json`: 10 hinos em português; 5 **Cânticos das Almas** preservados na seção `additional_songs_of_souls`, mas não inseridos no módulo Santa Missa.
- `js/mce-hymn-pt-reader.js`: controlador de carregamento sob demanda. Somente `hymns_portuguese` é exibido, dentro do `<details>` correspondente.
- `index.html`: conteúdos temporários dos dois módulos substituídos por contêineres de leitura contínua. O Cruzeiro, palco, mixer, bandeiras, páginas internas e Fine Art continuam no mesmo arquivo.

## Conferências estruturais executadas
- Ambos os JSONs validam 10 hinos PT em numeração contínua 1–10.
- Diversões: distribuição de blocos por hino `[4,1,2,3,8,2,3,5,7,4]`.
- Santa Missa: distribuição por hino `[8,4,13,3,4,4,4,5,4,4]`.
- O hino 3 de Santa Missa, **Rogativo dos Mortos**, tem indicações abreviadas por horário na fonte PDF; foram mantidas sem reconstruir as linhas ausentes.
- Os hinos 5 e 9 de Diversões têm continuação editorial em páginas distintas, preservadas no mesmo registro de número.
- Referências `2x`, `3x` e geometria de linhas permanecem no JSON. O controlador NÃO desenha barras não homologadas; exibe a indicação textual de repetição quando presente.
- O inglês não é exposto na leitura normal do Index.

## HOW TO DO × SHOW × CHECK
- **DO:** abrir `#diversoes-do-mestre` e `#santa-missa` carrega seu próprio JSON, sem criar páginas individuais por hino.
- **SHOW:** apresentação azul-marinho/dourado, título único por hino e estrofes contínuas, sem linha horizontal dourada entre hinos; separador Sol·Lua·Estrela ao final da coleção.
- **CHECK:** conferir HTML renderizado, hinos extensos, linhas e tipografia em AUTO/PORTRAIT/LANDSCAPE, origem e semântica 2x/3x. Marcação geométrica aguardando cotejamento visual.
- **RECORD:** fontes dos PDFs entregues pelo titular, arquivo e branch registrados; não há estado de leitura persistente.
- **SPEAK:** não instalado.

## Portão GO/NO-GO para main
Ainda pendentes: teste visual real no Cloudflare preview, revisão humana da paginação/estrofes, marcadores de repetição alinhados por verso, correções eventualmente necessárias e homologação do titular. **Não fazer merge automático** nem declarar integralmente homologadas as transcrições do PDF.
