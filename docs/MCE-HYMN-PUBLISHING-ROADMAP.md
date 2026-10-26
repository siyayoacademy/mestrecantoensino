# MCE — ELO HIN-01 · Auditoria dos hinários pilares e HOW TO DO × HOW TO SHOW

**Branch documental:** `jaguar/mce-hymn-publishing-audit-20261026`. **Origem:** `main` @ `dd5e1f62c0de5cb227f37ddc95daf777998ad919`. **Estado:** estudo e planejamento, sem modificações do site.

## Resultados confirmados
| Âncora | Código anterior | Arquivo / seletor | Estado real |
|---|---|---|---|
| O Santo Cruzeiro Universal | MCE-HYM-A | `index.html#cruzeiro`, `#leitura-continua` | Leitura contínua parcial, exemplos Lua Branca/Tuperci/Ripi; não equivale a todo o hinário |
| Diversões do Mestre | MCE-HYM-B | `index.html#diversoes-do-mestre` | Bloco expansível existente; corpus completo não presente |
| Santa Missa | MCE-HYM-C | `index.html#santa-missa` | Bloco expansível existente; corpus completo não presente |

**Proveniência:** `data/santo-cruzeiro-universal.json` existe, mas o Index ainda não carrega essa fonte em runtime. Evitar duas fontes concorrentes, comparar o HTML autorado antes de migrar. `data/modelo-a-marcacoes.json` / `data/modelo-b-componente.json` são estudos, não ordens de transcrição.

## Contrato estrutural
Um **hinário inteiro por módulo contêiner**, leitura contínua e sem criar página por hino. Dentro do módulo cada hino pode ter número, título, ritmo (quando verificado), estrofes intactas, barras de repetição verificadas, marcador dourado Sol–Lua–Estrela, referências e multimídia opcional futura.

## Cinco HOW TO
- **HOW TO DO:** ordenar corpus com autoria e proveniência verificadas, executar divisão adaptativa das estrofes para exportar; nunca alterar a ordem de leitura do site.
- **HOW TO RECORD:** registrar revisão, fonte e presets editoriais *somente quando armazenamento for implementado*.
- **HOW TO SHOW:** respeitar fundo azul-escuro, borda dourada, tipografia, ritmo e recuos; export-only portrait não muda o leitor visível.
- **HOW TO CHECK:** medir largura, altura, linhas e legibilidade, escolher quantas estrofes cabem por imagem sem cortar blocos; manter barras documentais e imagens originais.
- **HOW TO SPEAK:** não aplicável no estado atual; áudio/vídeo posteriormente com proveniência.

## Compositor de frames (planejado)
- Camada invisível apenas na leitura normal; renderizar em área isolada para share/print.
- Portrait story 9:16; Landscape 16:9; A4/A3 impressão.
- **Uma a oito estrofes**: capacidade por imagem definida por mensuração real. Se duas ou três não couberem, criar continuação, sem reduzir indiscriminadamente o tamanho da fonte.
- Título, ritmo verificado, estrofe, barra e símbolo têm suas próprias zonas de segurança.
- Possível materialização em PNG/JPG, PDF/print e share, após testes e direitos.

## Páginas internas
- `decreto-1970/`: existe, transcrição documental integral ainda pendente.
- `homenagem/`: existe; retratos e arte original 50 anos protegidos; slide de imagens ainda planejado.
- `vida-e-obra/`: existe, estudo histórico e fotos; slide planejado.
- `calendario/`: existe, conteúdo oficial pendente; mural A3 com bordas, igreja/floresta e painéis em planejamento.
- `hinarios/`, `nossa-irmandade/`: catálogo futuro com critérios de autor, data/década, atribuição institucional, egrégora e classificação editorial verificável.

## GO/NO-GO
**GO documental:** mapa e prioridades conferidos no código publicado. **NO-GO funcional:** não publicar hinários completos, nem compositor de impressão, áudio, galeria automática ou marcadores novos antes de suas implementações e verificações.

Arquitetura estruturada: `docs/mce-hymn-publishing-plan.json`. REG-01/02/03 atuais permanecem intactos neste elo.
