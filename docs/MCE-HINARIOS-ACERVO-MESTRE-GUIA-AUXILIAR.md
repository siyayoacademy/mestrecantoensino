# MCE — Guia auxiliar do Acervo Mestre de Hinários
Data: 2026-10-30
Natureza: pesquisa exploratória e diretrizes de arquitetura; NÃO é catálogo oficial universal nem autorização de reprodução.
Status: referência de planejamento. Não alterar automaticamente módulos publicados.

## Objetivo
Consolidar o reconhecimento preliminar de hinários individuais, coletâneas litúrgicas, linhagens, comunidades, edições e fontes da Santa Doutrina, servindo como guia para páginas internas do Mestre Canto Ensino e outros projetos associados.

## Categorias distintas
1. Hinários históricos/fundamentais: qualificar sempre segundo a instituição, tradição ou edição, evitando a etiqueta genérica "oficial".
2. Hinários individuais: registrar recebedor, título, numeração e fontes.
3. Seleções e coletâneas de trabalho: oração, cura, concentração, missa, despacho e outras; não presumir autoria independente.
4. Linhagens / instituições / egrégoras: preservar diferenças entre pertencimento institucional, tradição histórica e identidade espiritual autodeclarada. Não impor hierarquia ou equiparar organizações.
5. Documentos e mídia: edições de letra, partituras, gravações, traduções e sua proveniência.

## Portas de pesquisa e cruzamento
- Nossa Irmandade: https://nossairmandade.com/ e seção de hinários individuais https://nossairmandade.com/hinarios/individual
- Coletâneas Nossa Irmandade: https://nossairmandade.com/compilation_hinarios.php
- ICEFLU — documentação e memória: https://hinos.santodaime.org/acervo/introducao
- Obra de Mestre Irineu / fontes Alto Santo: https://www.mestreirineu.org/obra
- Catálogos adicionais são apoio para comparação, jamais prova automática de chancela universal.

## Núcleos e repertórios para inventário futuro
- Mestre Irineu: O Cruzeiro / O Santo Cruzeiro Universal, Diversões do Mestre e Santa Missa; examinar relações entre seleção, edição e obra.
- Companheiros históricos citados no levantamento: Antônio Gomes — O Amor Divino; Germano Guilherme — Vós Sois Baliza; João Pereira — Seis de Janeiro; Maria Damião — O Mensageiro. Qualificar status por tradição.
- Linha Padrinho Sebastião: O Justiceiro e Nova Jerusalém; Padrinho Alfredo: O Cruzeirinho, Nova Era e Nova Dimensão; outras referências pesquisadas incluem Madrinha Rita, Madrinha Júlia, Alex Polari, Padrinho Valdete, Manoel Corrente.
- O Justiceiro: divergência de contagem entre planejamento de 154 e acervo que enumera até 156; verificar versões antes de determinar numeração canônica.
- Organizações/linhagens a estudar separadamente: Alto Santo/CICLU e centros autônomos; ICEFLU/Céu do Mapiá; CEFLI; iniciativas e redes como CONDAIME. Filiação e práticas não se presumem.

## Modelo de dados recomendado
- Hymn: canonicalHymnId, título, origem/recebedor, variantes documentadas.
- Collection: collectionId, título, tipo (individual/seleção/ritual), tradição/instituição quando comprovada.
- CollectionEntry: collectionId + canonicalHymnId + número/ordem + edição + campos locais de apresentação e execução.
- Source: URL/arquivo, edição, página, status de conferência e direitos.
- Affiliation/Tradition: entidade separada; conservar autodescrições e fontes.
- Um mesmo hino pode ter ocorrências diversas: Rogativo dos Mortos = Cruzeiro 14 e Santa Missa 3 (mesma composição, coletâneas diferentes). Sem duplicação canônica; permitir diferenças editoriais documentadas.
- A Oração do Padrinho Sebastião e outras seleções de O Justiceiro: só mapear membros após conferência documental.

## HOW TO DO
Pesquisar e cotejar antes de publicar; distinguir identidade da composição, ocorrência no hinário e versão editorial. Preservar fontes, histórico de revisão, variações legítimas e direitos. Nunca deduzir barras, oferta, ritmo ou letra a partir do número de outro hinário.

## HOW TO SHOW
Manter o DNA homologado: módulo individual com borda dourada, título, linha de oferta invisível se vazia, indicação excepcional de ritmo/execução em itálico alinhada à direita acima da primeira estrofe, barras específicas por estrofe e Sol · Lua · Estrela dourados com respiros simétricos. Leitura contínua sem índice no Cruzeiro; exploração por autor, linhagem e coleção somente nas páginas internas apropriadas.

## HOW TO RECORD / HOW TO CHECK
Registrar autoria, edições, referências e relações entre coleções com IDs estáveis. Conferir AUTO, PORTRAIT e LANDSCAPE, conteúdo, barras e separadores; distinguir verificações de GitHub de testes reais Cloudflare. Não alterar o Index homologado apenas para incorporar este guia. Separador MCE-SEP-04 poderá futuramente capturar imagem do hino pai e compartilhar imagem/link sob ação explícita, sem incluir barra do navegador, respeitando direitos.

## Regras operacionais
Este guia é AUXILIAR; os mapas de execução e os contratos aprovados são preservados. O desenvolvimento atual prossegue em lotes de dez hinos no Cruzeiro, com validação documental antes de publicação. Pesquisas futuras devem acrescentar fontes, nunca substituir silenciosamente regras homologadas.
