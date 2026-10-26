# MCE REG-03 — Impact & Integration Map

**Estado:** análise documental estática, não ferramenta de monitoramento. Base auditada: `jaguar/portal-preview-v25` @ `be95888dbf9709df00ee8a9969381536c0df4dd7`. Destino: `jaguar/mce-modular-governance-reg123-20261025`.

## Procedimento de integração segura

1. pin current source HEAD and target HEAD.
2. identify changed paths.
3. expand provider→consumer edges.
4. check five HOW TO and ownership.
5. verify source/provenance.
6. test AUTO/PORTRAIT/LANDSCAPE and target behavior.
7. record GO/NO-GO.
8. adopt selectively.

## Cenários

### IMP-01 — hymn JSON change

- **Afetados:** MCE-HYM-A, MCE-STANZA-B.
- **Verificar:** check provenance, schema and embedded HTML difference; no auto-render presumed.
- **Gate:** NO_GO until targeted checks pass.

### IMP-02 — stanza bars

- **Afetados:** MCE-STANZA-B, MCE-HYM-A.
- **Verificar:** verify musical documentary bar ranges and visual portrait/landscape; fail closed.
- **Gate:** NO_GO until targeted checks pass.

### IMP-03 — RS-01 CSS or JS

- **Afetados:** MCE-RS-01, all internal pages, MCE-STAGE-06.
- **Verificar:** check 430/844/AUTO, touch-first, keyboard, viewport, event names.
- **Gate:** NO_GO until targeted checks pass.

### IMP-04 — original RIS asset

- **Afetados:** MCE-FLAG-05, MCE-STAGE-06.
- **Verificar:** retain exact image, alpha and aspect ratio.
- **Gate:** NO_GO until targeted checks pass.

### IMP-05 — historic photograph

- **Afetados:** MCE-TRIBUTE-09, MCE-DOC-08.
- **Verificar:** verify license/provenance; preserve 50-year historical original.
- **Gate:** NO_GO until targeted checks pass.

### IMP-06 — move module

- **Afetados:** MCE-NAV-02, MCE-PAGES-07, MCE-RS-01.
- **Verificar:** trace inline JS, CSS, images, href, state and consumers before extraction.
- **Gate:** NO_GO until targeted checks pass.

### IMP-07 — audio or sheet music

- **Afetados:** MCE-HYM-A, MCE-HYM-B, MCE-HYM-C.
- **Verificar:** planned only: rights, formats, separate score reader, accessibility.
- **Gate:** NO_GO until targeted checks pass.


## Regras permanentes

Não copiar runtime pedagógico da SIYAYO Academy. Não alterar a `main`, não fazer merge, não publicar produção, não remover texto autorado, não editar fotografias originais nem assumir direitos de letras/partituras. O Santo Cruzeiro permanece com leitura consecutiva **sem índice**, barras apenas verificadas e separador Sol · Lua · Estrela. O 50 anos original histórico permanece distinto da imagem criativa de 55 anos.

**Importante:** os registros são aliases documentais; não transformam HTML inline em componentes portáteis. O mapa é reavaliado ao atualizar o HEAD e ao movimentar qualquer módulo. JSON: `docs/mce-impact-integration-map.json`.
## Fine Art RIS — ELO 1A (REG-03)

**Estado: PROPOSTO / REGISTRADO, NÃO IMPLEMENTADO.** O módulo `MCE-FINEART-20`, contêiner de acesso “Estúdio Fine Art / Mestre Canto Ensino RIS”, palco e mixer preservados, controles horizontal, vertical, focal e inward/outward, formatos paisagem e portrait e saída share/download estão especificados em [Arquitetura Fine Art](MCE-FINEART-20-ARCHITECTURE.md) e [JSON de contrato](mce-fineart-20-spec.json). A página `/fine-art/` ainda não existe; nenhuma alteração visual ou runtime foi executada.
