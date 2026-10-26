# MCE REG-02 — Backstage & Flow Registry

**DOCUMENTAL.** Fonte auditada: `siyayoacademy/mestrecantoensino` → `jaguar/portal-preview-v25` @ `be95888dbf9709df00ee8a9969381536c0df4dd7`. Referência: SIYAYO REG-02 na `jaguar/module-governance-reg03-impact-20261025`; não transportar runtime.

## Cinco HOW TO

- **HOW TO DO:** Native links, details and inline stage/bar/share scripts plus dedicated preview controller
- **HOW TO RECORD:** RS-01 localStorage mode only; no database, learner evidence or durable hymn state verified
- **HOW TO SHOW:** Page HTML, inline and shared CSS, RIS images, SVG
- **HOW TO CHECK:** Documentary provenance and verified bar flag; manual checks; no automated global registry enforcement
- **HOW TO SPEAK:** No verified TTS or audio subsystem in the Index

## Fluxo

**FONTE → CONTROLADOR → VERIFICAÇÃO → APRESENTAÇÃO → INTERAÇÃO → REGISTRO**, somente onde houver uma responsabilidade comprovada. Eventos de apresentação não são autoria nem edição documental.

## Eventos existentes

- **RS-01:** click [data-preview] → `js/ris-responsive-preview.js` → data-preview, aria-pressed, localStorage ris-responsive-preview-mode, ris:responsive-preview-changed.
- **MCE-NAV-02:** click shortcut href → `native anchor navigation` → scroll to named module.
- **MCE-HYM-B/C:** summary click → `native details HTML` → toggle section without app store.
- **MCE-STANZA-B:** resize and initial rendering → `layoutStanzaBars() inline` → decorative bars only when data-bar-status verified.
- **MCE-STAGE-06:** prev/next keyboard, scene select and layer controls → `index.html inline script` → selected composition in browser session.
- **MCE-HEAD-01:** share click → `index.html inline script` → navigator.share or fallback.

## Fornecedores → consumidores

- `data/santo-cruzeiro-universal.json` → MCE-HYM-A, MCE-STANZA-B; natureza `documentary_only_not_fetched_by_index`.
- `data/modelo-a-marcacoes.json` → MCE-STANZA-B; natureza `research_not_runtime`.
- `data/modelo-b-componente.json` → MCE-STANZA-B; natureza `research_not_runtime`.
- `index.html#leitura-continua` → MCE-HYM-A, MCE-STANZA-B, MCE-SEP-04; natureza `verified_markup`.
- `index.html#layoutStanzaBars` → MCE-STANZA-B; natureza `verified_inline_controller`.
- `index.html#scenes` → MCE-STAGE-06; natureza `verified_inline_controller`.
- `index.html#site-share` → MCE-HEAD-01; natureza `verified_inline_controller`.
- `index.html (inline CSS)` → MCE-HYM-A, MCE-HYM-B, MCE-HYM-C, MCE-FLAG-05, MCE-STAGE-06; natureza `verified_style`.
- `js/ris-responsive-preview.js` → MCE-RS-01; natureza `verified_controller`.
- `css/ris-responsive-stage.css` → MCE-RS-01, MCE-HYM-A, MCE-NAV-02; natureza `verified_style`.
- `css/ris-internal-responsive.css` → MCE-RS-01, MCE-TRIBUTE-09, MCE-DOC-08, MCE-BIO-10, MCE-CAL-11, MCE-HYM-HUB-13, MCE-LINKS-12; natureza `verified_style`.
- `ris-green.png` → MCE-FLAG-05, MCE-STAGE-06; natureza `verified_asset`.
- `ris-blue.png` → MCE-FLAG-05, MCE-STAGE-06; natureza `verified_asset`.
- `eagle-white.png` → MCE-FLAG-05, MCE-STAGE-06; natureza `verified_asset`.
- `eagle-blue-white.png` → MCE-FLAG-05, MCE-STAGE-06; natureza `verified_asset`.
- `assets/images/arte-50-anos-original.jpg` → MCE-TRIBUTE-09; natureza `verified_asset`.
- `assets/images/retrato-corpo-inteiro.jpg` → MCE-TRIBUTE-09; natureza `verified_asset`.
- `assets/images/primeiros-discipulos.jpg` → MCE-TRIBUTE-09; natureza `verified_asset`.
- `assets/images/retrato-decreto.jpg` → MCE-DOC-08; natureza `verified_asset`.

## Lacunas e prevenção de duplicatas

- O JSON `data/santo-cruzeiro-universal.json` existe e mantém proveniência; o Index atual não o carrega automaticamente, mantendo outra cópia visível dos versos. Não anunciar fonte única implementada sem migração explícita.
- `data/modelo-a-marcacoes.json` e `data/modelo-b-componente.json` são estudos documentais, não controladores ativos. O Modelo B registra gap de 8px: conferir CSS real antes de propor unificação.
- Não foram verificados áudio, partitura operacional, banco de dados, autenticação, compartilhamento por estrofe, avaliador SIYAYO ou observador automático de impacto.
- RS-01 adaptado utiliza `window.RISResponsivePreview`, evento `ris:responsive-preview-changed` e a chave `ris-responsive-preview-mode`; estes diferem dos nomes canônicos de origem SIYAYO.

Mapa estruturado: `docs/mce-backstage-flow-registry.json`.
## Fine Art RIS — ELO 1A (REG-02)

**Estado: PROPOSTO / REGISTRADO, NÃO IMPLEMENTADO.** O módulo `MCE-FINEART-20`, contêiner de acesso “Estúdio Fine Art / Mestre Canto Ensino RIS”, palco e mixer preservados, controles horizontal, vertical, focal e inward/outward, formatos paisagem e portrait e saída share/download estão especificados em [Arquitetura Fine Art](MCE-FINEART-20-ARCHITECTURE.md) e [JSON de contrato](mce-fineart-20-spec.json). A página `/fine-art/` ainda não existe; nenhuma alteração visual ou runtime foi executada.
