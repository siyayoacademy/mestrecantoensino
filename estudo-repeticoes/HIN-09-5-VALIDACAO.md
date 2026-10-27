# MCE HIN-09.5 — protocolo de homologação documental e Portrait

## Estado
Laboratório isolado em `estudo-repeticoes/hin-09-3-layout.html`. Não integra o leitor público. Barras de Lua Branca são simulações visuais, não transcrição do PDF.

## Fonte primária
`O SANTO CRUZEIRO Partituras.pdf` fornecido pelo usuário, com referências previamente mapeadas: hino 28 página PDF 143; 42 página 173; 50 página 193; 92 página 295. Confirmar página e estrofe na edição antes de preencher marcações.

## Contrato
- Uma coluna horizontal comum para todas as estrofes de um hino; preservar largura útil e faixa lateral reservada.
- Barras delimitadas pelo topo e base reais das linhas musicais selecionadas; quebras visuais internas não geram novos versos.
- Modelo A homologado: barra vertical esquerda e sinais inclinados nos versos indicados; extensão e posição por estrofe exigem cotejo.
- Nunca inferir barras de `execution_repeats` (ex.: 3x), ritmo, numeração ou outro hino.
- Metadados de oferta somente quando documentados. Marcha implícita; Valsa e Mazurca em itálico à direita.
- Título preferencialmente em uma linha, sem sacrificar leitura em telas estreitas.
- Sol/Lua/Estrela de seis pontas entre hinos, maior respiro depois dos símbolos.
- Não inserir índice, NEXT, pauta ou linhas horizontais entre hinos.

## Checklist de validação
1. Conferir PDF visualmente estrofe a estrofe, anotar origem, página, índice do verso e intervalo de barras.
2. Verificar casos: estrofe inteira, duas linhas inferiores, três linhas, segmentos separados e ausência de barra.
3. Testar Portrait 320, 360, 390 e 430 CSS px, zoom e fonte ampliada; inspecionar quebra de versos.
4. Conferir colunas e alinhamento, altura superior/inferior, barras próximas, sinais / e acessibilidade.
5. Comparar com Nossa Irmandade apenas para cotejo textual; nunca substituir a edição primária silenciosamente.
6. Somente após aprovação, integrar JSON validado ao leitor e disponibilizar preview Cloudflare.

## Portões
Aprovação visual do laboratório NÃO equivale a homologação documental das barras. Sem PDF conferido, nenhum intervalo de barra é promovido ao leitor público.
