# MCE — Auditoria de integração Index, acervo e deploy · 2026-10-26

## Situação verificada
- Produção GitHub `main`: `676996d001b1b5109dd3bf9829cf51fa2790d5c5`. Site oficial Cloudflare Pages conectado a `main`; por isso não apresenta o portal mais recente.
- Portal `jaguar/portal-preview-v25`: `be95888dbf9709df00ee8a9969381536c0df4dd7`, 15 commits adiante de main.
- Governança `jaguar/mce-modular-governance-reg123-20261025`: `aaa118507e760ea670b9d608fb83e732d91d0a99`.
- Fine Art `jaguar/mce-fineart-share-stage-20261026`: originou-se da governança e inclui portal, estúdio, controlador de perspectiva, artboard e PNG. Índice recebeu acesso rápido Fine Art nesta branch.
- **Nenhum merge em main; produção não atualizada.** PR ou merge exigirá homologação separada.

## Mapa do Index real (Fine Art)
- `#cruzeiro` → leitura contínua / `#leitura-continua` / hinos parciais; manter sem índice individual.
- `#diversoes-do-mestre`, `#santa-missa` → acordeões nativos, ainda sem transcrição integral verificada.
- `#bandeiras` → três versões RIS.
- `#palco` → Palco RIS seis camadas + `#controls` mixer.
- `#estudio-fine-art-ris` → cartão com destino `fine-art/`.
- `#paginas-internas` → decreto, homenagem, vida e obra, calendário, hinários, nossa irmandade.
- `.portal-shortcuts` → navegação rápida, incluindo Fine Art na branch experimental.

## Inventário de dados e recursos (git)
| Caminho | Papel | Situação |
|---|---|---|
| `data/santo-cruzeiro-universal.json` | pesquisa/hinos do Cruzeiro | Existe, não é automaticamente carregado pelo Index |
| `data/modelo-a-marcacoes.json` | estudo de marcações | Existe, referência documental |
| `data/modelo-b-componente.json` | modelo das barras | Existe, não substitui o JS de barras |
| `assets/images/arte-50-anos-original.jpg` | original histórico | Preservar |
| `assets/images/primeiros-discipulos.jpg` | acervo histórico | Existe |
| `assets/images/retrato-corpo-inteiro.jpg` | retrato | Existe |
| `assets/images/retrato-decreto.jpg` | retrato do decreto | Existe |
| `background-ris.png`, `bandeira-brasil.jpg` | fundo e bandeira | Existem |
| `eagle-white.png`, `eagle-blue-white.png` | Águia Lua | Existem |
| `ris-green.png`, `ris-blue.png` | marca RIS | Existem |
| `fine-art/index.html`, `perspective.js`, `perspective.css`, `format.js`, `export.js` | Fine Art especializado | Presentes somente nas branches posteriores ao portal |
| `css/ris-responsive-stage.css`, `css/ris-internal-responsive.css`, `js/ris-responsive-preview.js` | RS-01 adaptado | Presentes |
| `estudo-repeticoes/` | cinco páginas experimentais | Preservadas |

## Outras fontes consultadas
Busca na Biblioteca ChatGPT retornou as cópias `index(20261024-221713).html` e `index(20261015-080904).html`. São fontes históricas de comparação, não fontes canônicas de produção; não foram sobrescritas nem importadas em massa.

## Regras de integração GO / NO-GO
- Fixar HEAD e revisar diff completo antes de propor produção.
- Verificar existência de todas as URLs internas, inclusive `fine-art/`.
- Não copiar a prévia antiga por cima do Index Fine Art: isso apagaria o cartão e seu link.
- Registrar direitos e proveniência de fotos, letras e partituras antes de publicação de acervo completo.
- Manter componentes do hinário: título, ritmo se verificado, barras documentadas e separador Sol · Lua · Estrela.
- Falta conferir visualmente em desktop/portrait/landscape e verificar imagens exportadas; a prévia Fine Art demonstrou PNG landscape, não homologação integral de portrait.
- Corrigir problemas de cabeçalho estreito e posicionamento visual de subtítulos apenas após nova homologação.
- Não promover nem mesclar na `main` nesta auditoria.

## Próximas oportunidades
1. Registrar cinco HOW TO do módulo de hino e do novo contêiner invisível de composição share/print (o print do usuário é estudo visual, não markup instalado).
2. Abrir implementação do compositor de estrofes por capacidade da página (1–8 estrofes, conforme medição real e limites de legibilidade).
3. Separar fonte canônica de texto do HTML autorado sem inventar textos ausentes.
4. Preparar módulos de capa portrait, mural A3 e slides de acervo como propostas vinculadas a REG-01/02/03.
5. Revisar o conjunto completo de alterações para um eventual pedido de promoção a produção, sob autorização específica.
