# MESTRE CANTO ENSINO — REGISTRO DE GOVERNANÇA DOS MÓDULOS

> **Escopo:** inventário documental da branch `jaguar/portal-preview-v25`. Códigos `MCE-*` são **apelidos de governança**, não alteração dos seletores. Nenhuma migração de componentes, CSS ou JavaScript é realizada por este arquivo.
> **Referência consultada:** SIYAYO Academy, branch `jaguar/module-governance-registry-20261024` (somente consulta; o outro projeto fica intocado).

## Visão arquitetural

```text
Portal Mestre Canto Ensino
├── MCE-RS-01  Responsive Stage (envolve Index e seis páginas internas)
├── MCE-HEAD-01  Identidade RIS + compartilhar
├── MCE-NAV-02   Acesso rápido
├── MCE-HOME-03  Homenagem inicial
├── MCE-HYM-A    O Cruzeiro (leitura contínua)
│   ├── MCE-STANZA-B  Estrofe com barras documentais
│   └── MCE-SEP-04    Sol · Lua · Estrela
├── MCE-HYM-B    Diversões do Mestre (expansível)
├── MCE-HYM-C    Santa Missa (expansível)
├── MCE-FLAG-05  Bandeiras RIS
├── MCE-STAGE-06 Palco de seis camadas + mixer
└── MCE-PAGES-07 Navegação interna
    ├── MCE-DOC-08  Decreto 1970
    ├── MCE-TRIBUTE-09 Homenagem visual
    ├── MCE-BIO-10 Vida e Obra
    ├── MCE-CAL-11 Calendário
    ├── MCE-HYM-HUB-13 Hinários (página)
    └── MCE-LINKS-12 Nossa Irmandade
```

## Catálogo

| Código | Módulo | Estado | Localização |
|---|---|---|---|
| `MCE-RS-01` | Responsive Stage | Existente | `index.html`, `homenagem/index.html`, `decreto-1970/index.html`, `vida-e-obra/index.html`, `calendario/index.html`, `hinarios/index.html`, `nossa-irmandade/index.html` |
| `MCE-HEAD-01` | Portal header / RIS identity | Existente | `index.html` |
| `MCE-NAV-02` | Acesso rápido | Existente | `index.html` |
| `MCE-HOME-03` | Homenagem de abertura | Existente | `index.html` |
| `MCE-HYM-A` | O Santo Cruzeiro Universal / leitura contínua | Existente | `index.html` |
| `MCE-STANZA-B` | Estrofe e linhas verticais — Modelo B | Existente | `index.html` |
| `MCE-SEP-04` | Sol · Lua · Estrela | Existente | `index.html` |
| `MCE-HYM-B` | Diversões do Mestre | Existente | `index.html` |
| `MCE-HYM-C` | Santa Missa | Existente | `index.html` |
| `MCE-FLAG-05` | RIS flag gallery | Existente | `index.html` |
| `MCE-STAGE-06` | Palco RIS seis camadas | Existente | `index.html` |
| `MCE-PAGES-07` | Navegação de páginas internas | Existente | `index.html` |
| `MCE-DOC-08` | Decreto 1970 | Existente | `decreto-1970/index.html` |
| `MCE-TRIBUTE-09` | Homenagem visual | Existente | `homenagem/index.html` |
| `MCE-BIO-10` | Vida e Obra | Existente | `vida-e-obra/index.html` |
| `MCE-CAL-11` | Calendário dos Trabalhos | Existente | `calendario/index.html` |
| `MCE-LINKS-12` | Nossa Irmandade — Links | Existente | `nossa-irmandade/index.html` |
| `MCE-HYM-HUB-13` | Página de Hinários | Existente | `hinarios/index.html` |
| `MCE-FINEART-20` | Fine Art & homenagem 55 anos | Planejado | — |
| `MCE-SPEECH-21` | Speech / audio player | Planejado | — |
| `MCE-SHARE-22` | Share por hino/estrofe | Planejado | — |

## Contrato de cada módulo

Os campos técnicos completos estão em `docs/mestre-canto-ensino-module-registry.json`. Cada registro contém HOW TO DO / RECORD / SHOW / CHECK / SPEAK, seletores, arquivos, dependências e regra para realocação.

### `MCE-RS-01` — Responsive Stage

- **Estado:** existing; shared presentation.
- **Localização:** index.html, homenagem/index.html, decreto-1970/index.html, vida-e-obra/index.html, calendario/index.html, hinarios/index.html, nossa-irmandade/index.html.
- **Seletores:** [data-siyayo-responsive-toolbar]; [data-siyayo-responsive-viewport].
- **Origem / controladores ou assets conhecidos:** js/ris-responsive-preview.js; css/ris-responsive-stage.css; css/ris-internal-responsive.css.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Local mode auto/portrait/landscape; no content or evidence changes.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Remove wrapper/toolbar plus CSS/JS references together; keep page content intact.

### `MCE-HEAD-01` — Portal header / RIS identity

- **Estado:** existing; presentation.
- **Localização:** index.html.
- **Seletores:** header; .ris-home; #site-share.
- **Origem / controladores ou assets conhecidos:** index.html (inline CSS and JavaScript).
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Site title, RIS home and share affordance.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Extract CSS + share event before moving.

### `MCE-NAV-02` — Acesso rápido

- **Estado:** existing; navigation.
- **Localização:** index.html.
- **Seletores:** .portal-shortcuts.
- **Origem / controladores ou assets conhecidos:** index.html (anchors).
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Anchor links into index sections; no hymn index.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Retarget href/id pairs upon relocation.

### `MCE-HOME-03` — Homenagem de abertura

- **Estado:** existing; content presentation.
- **Localização:** index.html.
- **Seletores:** .portal-hero.
- **Origem / controladores ou assets conhecidos:** index.html (authored copy).
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Commemorative text; independent of documentary hymn data.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Can move markup after extracting CSS.

### `MCE-HYM-A` — O Santo Cruzeiro Universal / leitura contínua

- **Estado:** existing; documentary presentation.
- **Localização:** index.html.
- **Seletores:** #cruzeiro; #leitura-continua; .hymn-entry.
- **Origem / controladores ou assets conhecidos:** index.html (authored partial hymn content).
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Sequential reading; only documented verses shown, no index.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Keep documented text provenance and separator; do not assume full corpus.

### `MCE-STANZA-B` — Estrofe e linhas verticais — Modelo B

- **Estado:** existing; layout controller.
- **Localização:** index.html.
- **Seletores:** .hymn-stanza; .stanza-tracks; .stanza-words.
- **Origem / controladores ou assets conhecidos:** index.html: layoutStanzaBars(); data-bars; data-bar-status.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Draw verified bars only, geometry from stanza line boxes.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Move render function, CSS and data contract as one unit; verified status gate is mandatory.

### `MCE-SEP-04` — Sol · Lua · Estrela

- **Estado:** existing; visual separator.
- **Localização:** index.html.
- **Seletores:** .hymn-separator.
- **Origem / controladores ou assets conhecidos:** index.html (inline SVG and CSS).
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** All gold; six-pointed star; no gold horizontal rule.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Move SVG + CSS without hymn indexing.

### `MCE-HYM-B` — Diversões do Mestre

- **Estado:** existing; expandable hymn container.
- **Localização:** index.html.
- **Seletores:** #diversoes-do-mestre; .gold-hymn-module.
- **Origem / controladores ou assets conhecidos:** index.html (placeholder; no verified full transcription).
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Gold expandable reader, currently documentary placeholder.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Preserve details/summary keyboard semantics; corpus pending.

### `MCE-HYM-C` — Santa Missa

- **Estado:** existing; expandable hymn container.
- **Localização:** index.html.
- **Seletores:** #santa-missa; .gold-hymn-module.
- **Origem / controladores ou assets conhecidos:** index.html (placeholder; no verified full transcription).
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Gold expandable reader, currently documentary placeholder.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Preserve details/summary; corpus pending.

### `MCE-FLAG-05` — RIS flag gallery

- **Estado:** existing; visual assets.
- **Localização:** index.html.
- **Seletores:** #bandeiras; .flag-gallery; .flag-canvas.
- **Origem / controladores ou assets conhecidos:** ris-green.png; ris-blue.png; eagle-white.png; eagle-blue-white.png.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Three variations with independent visual layers.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Keep image paths and proportions when moving.

### `MCE-STAGE-06` — Palco RIS seis camadas

- **Estado:** existing; media mixer.
- **Localização:** index.html.
- **Seletores:** #stage; #controls; #reset.
- **Origem / controladores ou assets conhecidos:** index.html (scene/layer definitions and inline JS); ris-green.png; ris-blue.png; eagle-white.png; eagle-blue-white.png.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Six layers and scenes; local file selectors for artwork.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Move stage+controls+events+image URLs together; do not reset other page state.

### `MCE-PAGES-07` — Navegação de páginas internas

- **Estado:** existing; navigation.
- **Localização:** index.html.
- **Seletores:** #paginas-internas; .portal-nav.
- **Origem / controladores ou assets conhecidos:** index.html (relative links).
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Links to six internal pages.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Update relative URLs when moved.

### `MCE-DOC-08` — Decreto 1970

- **Estado:** existing; documentary page.
- **Localização:** decreto-1970/index.html.
- **Seletores:** main; .two-col.
- **Origem / controladores ou assets conhecidos:** decreto-1970/index.html; assets/images/retrato-decreto.jpg.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Documentary shell with preserved portrait; decree text pending source.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Do not replace with reconstructed decree.

### `MCE-TRIBUTE-09` — Homenagem visual

- **Estado:** existing; gallery page.
- **Localização:** homenagem/index.html.
- **Seletores:** main; .gallery; .gold-frame.
- **Origem / controladores ou assets conhecidos:** homenagem/index.html; assets/images/*.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Historic gallery and 50 anos original artifact.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** 55-year creative art separate from historical original.

### `MCE-BIO-10` — Vida e Obra

- **Estado:** existing; documentary page.
- **Localização:** vida-e-obra/index.html.
- **Seletores:** main.
- **Origem / controladores ou assets conhecidos:** vida-e-obra/index.html.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Source-separated historical content.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Keep historical provenance.

### `MCE-CAL-11` — Calendário dos Trabalhos

- **Estado:** existing; page placeholder.
- **Localização:** calendario/index.html.
- **Seletores:** main; article.
- **Origem / controladores ou assets conhecidos:** calendario/index.html.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Page shell; dates/organizations not yet populated.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Never invent dates; source each calendar.

### `MCE-LINKS-12` — Nossa Irmandade — Links

- **Estado:** existing; page placeholder.
- **Localização:** nossa-irmandade/index.html.
- **Seletores:** main; article.
- **Origem / controladores ou assets conhecidos:** nossa-irmandade/index.html.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Directory shell; verified links not yet populated.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Verify destination and attribution.

### `MCE-HYM-HUB-13` — Página de Hinários

- **Estado:** existing; page placeholder.
- **Localização:** hinarios/index.html.
- **Seletores:** main; article.
- **Origem / controladores ou assets conhecidos:** hinarios/index.html.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Navigation shell; do not add searchable hymn index to continuous reader.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Keep hymn page distinct from index-free reading.

### `MCE-FINEART-20` — Fine Art & homenagem 55 anos

- **Estado:** planned; future creative media.
- **Localização:** planejado.
- **Seletores:** não definidos.
- **Origem / controladores ou assets conhecidos:** a definir.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Image library, portrait/landscape/square, not installed.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Require provenance and rights review.

### `MCE-SPEECH-21` — Speech / audio player

- **Estado:** planned; future media.
- **Localização:** planejado.
- **Seletores:** não definidos.
- **Origem / controladores ou assets conhecidos:** a definir.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Optional hymn playback and captions; no assessment semantics.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** Planned, not implemented.
- **Realocação:** Independent speech from SIYAYO pedagogical speech.

### `MCE-SHARE-22` — Share por hino/estrofe

- **Estado:** planned; future export.
- **Localização:** planejado.
- **Seletores:** não definidos.
- **Origem / controladores ou assets conhecidos:** a definir.
- **HOW TO DO:** Invoke only the explicitly documented behavior.
- **HOW TO RECORD:** No SIYAYO learner evidence or assessment credits.
- **HOW TO SHOW:** Sol Lua Estrela could trigger social share slides.
- **HOW TO CHECK:** Confirm source, selectors, assets, responsive layout and accessibility before moving.
- **HOW TO SPEAK:** No dedicated voice contract verified.
- **Realocação:** Respect text rights and page size.

## Procedimento para realocar um módulo

1. Buscar o código `MCE-*` no JSON; verificar caminho, seletores, controlador, dados, CSS, assets e consumidores.
2. Distinguir superfície visual de lógica e armazenamento. **Não recortar HTML isolado** quando há JS/estados associados.
3. Fazer alteração na branch de prévia do Mestre Canto Ensino, preservando nomes públicos e conteúdo.
4. Atualizar os links relativos, eventos, CSS responsivo RS-01 e referências do mapa.
5. Testar AUTO/PORTRAIT/LANDSCAPE, keyboard, imagens, estrofes e leitor contínuo sem índice.
6. Homologar visualmente e só então atualizar o estado do registro. Não alterar `main` nem `siyayoacademy/siyayo-academy`.

## Reutilização interprojetos

O Registry da SIYAYO é uma **fonte de contratos e arquitetura**, não uma permissão para copiar controle de avaliação. HOW TO DO / HOW TO RECORD / HOW TO SHOW / HOW TO CHECK / HOW TO SPEAK são responsabilidades transferíveis como padrão metodológico. Cada implementação no Mestre Canto Ensino tem dados, proprietários, seletores e regras próprias.

**Importante:** a base `data/corpus-3-hinarios.json` não está presente nesta branch verificada; portanto o registro não a declara instalada. Repertórios completos, áudio, Fine Art e compartilhamento especializado permanecem futuras integrações.
