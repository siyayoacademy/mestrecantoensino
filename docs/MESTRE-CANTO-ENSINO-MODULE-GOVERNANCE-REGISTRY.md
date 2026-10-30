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

## REG-01/02/03 — snapshot de auditoria (2026-10-25)

- **Repositório de destino:** `siyayoacademy/mestrecantoensino`; fonte inspecionada `jaguar/portal-preview-v25` @ `be95888dbf9709df00ee8a9969381536c0df4dd7` (40 arquivos); branch documental `jaguar/mce-modular-governance-reg123-20261025`.
- **Referência metodológica:** `siyayoacademy/siyayo-academy` @ `jaguar/module-governance-reg03-impact-20261025`. Não é importação do Verb Explorer.
- **REG-02:** [Backstage & Flow Registry](MCE-BACKSTAGE-FLOW-REGISTRY.md) · [JSON](mce-backstage-flow-registry.json).
- **REG-03:** [Impact & Integration Map](MCE-IMPACT-INTEGRATION-MAP.md) · [JSON](mce-impact-integration-map.json).
- **Correção de proveniência:** `data/santo-cruzeiro-universal.json` existe nesta branch. O Index ainda apresenta trechos escritos diretamente no HTML; não existe consumo automático confirmado deste JSON.
- **RS-01:** a adaptação usa `RISResponsivePreview` e evento `ris:responsive-preview-changed`; não atribuir nomes SIYAYO ao controlador do portal.
- **Limites:** nomes MCE são aliases documentais; nenhum runtime, CSS, produção, `main`, ou avaliador pedagógico foi alterado.

## Fine Art RIS — ELO 1A (REG-01)

**Estado: PROPOSTO / REGISTRADO, NÃO IMPLEMENTADO.** O módulo `MCE-FINEART-20`, contêiner de acesso “Estúdio Fine Art / Mestre Canto Ensino RIS”, palco e mixer preservados, controles horizontal, vertical, focal e inward/outward, formatos paisagem e portrait e saída share/download estão especificados em [Arquitetura Fine Art](MCE-FINEART-20-ARCHITECTURE.md) e [JSON de contrato](mce-fineart-20-spec.json). A página `/fine-art/` ainda não existe; nenhuma alteração visual ou runtime foi executada.

## MCE HIN-10.6 — Integração canônica no Index e SEP-04 especializado (30/10/2026)

**Homologação editorial 01–10:** os dez hinos, barras individuais, campo de oferta oculto quando vazio, ritmo excepcional à direita acima da primeira estrofe, borda dourada e respiro interno foram homologados na etapa HIN-10.5. Não reescrever ou duplicar manualmente suas letras/intervalos ao integrar.

**HOW TO DO (MCE-HYM-A):** o módulo `#cruzeiro` do Index incorpora por `iframe` same-origin o leitor de origem `estudo-repeticoes/hin-09-3-layout.html?embed=1`; ele se mantém como fonte canônica dos 10 hinos e de futuros lotes de dez. A página isolada permanece acessível para auditoria. A altura do iframe é ajustada pelo documento interno e ResizeObserver, sem navegação de índice entre hinos. Os outros módulos do Index não devem ser removidos, nem a ordem deles alterada.

**HOW TO SHOW (MCE-STANZA-B):** módulo individual com borda dourada; número/título centralizados; campo `offeredTo` opcional invisível quando vazio, porém com posição semântica reservada; `MARCHA` implícita sem rótulo; `VALSA`, `MAZURCA` ou ritmo misto em itálico no limite direito da coluna da primeira estrofe; barras de repetição por intervalos de versos, inclusive segmentos distintos e trilhos paralelos; respiro simétrico de referência 36px entre fim da última estrofe e símbolos, e entre símbolos e borda inferior; 36px desde a borda superior até o título. Respeitar diferenças entre altura CSS e dimensão visual real (verificação no navegador).

**HOW TO DO / HOW TO SHOW (MCE-SEP-04):** o separador dourado Sol · Lua · Estrela, com estrela de seis pontas, pertence ao módulo de seu hino. Os caracteres dourados presentes estão aprovados visualmente: NÃO substituir por SVG apenas por motivo tecnológico. O componente é especializado e futuramente terá ações ligadas ao hino pai: (a) capturar como imagem apenas o módulo do hino associado, sem menu/toolbar; (b) oferecer compartilhamento da imagem e/ou link do hino em redes sociais; (c) adaptar captura e saída aos formatos PORTRAIT/LANDSCAPE/AUTO; (d) manter tipografia, borda, barras, oferta quando houver, ritmo e respiros. As ações ainda NÃO estão implementadas, não afirmar que os símbolos são clicáveis. Compartilhamento depende das APIs e suporte do navegador, com confirmação explícita do usuário antes de divulgar. Captura futura deve preservar legibilidade em hinos longos e não alterar a leitura contínua.

**HOW TO RECORD:** armazenar cada configuração de intervalo, oferta, ritmo e elemento do hino vinculada ao seu identificador imutável, com fonte editorial; contratos de captura/exportação futuros devem referenciar esse mesmo ID, sem misturar conteúdo de hinos adjacentes.

**HOW TO CHECK:** confirmar com URL pública `/index.html#cruzeiro` e leitor isolado `/estudo-repeticoes/hin-09-3-layout.html`; conferir hinos 01–10, barras 06 segmentadas, 09 paralelas, respiro HIN-10.5, ritmos, ausência de índice, carregamento/altura do iframe sem segunda barra de rolagem; testar AUTO, PORTRAIT e LANDSCAPE, e preservar homenagem, Diversões do Mestre, Santa Missa, bandeiras, palco e páginas internas. Commit GitHub não substitui homologação do Cloudflare.
