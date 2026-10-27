# MCE · HIN-07 — Corpus PT prioritário / EN preservado · 2026-10-27

## Diretriz do titular
**Somente português aparece no leitor público do MCE.** Traduções em inglês são mantidas em coleção de dados separada e não aparecem automaticamente, reservadas para futuros módulos próprios.

## PDFs fornecidos e extraídos
- **Diversões do Mestre** (26 páginas): dez hinos PT, dez correspondentes EN, alternados página a página. Hinos 5 e 9 têm continuação em outra página do mesmo idioma.
- **A Santa Missa** (21 páginas): dez hinos PT. O PDF também inclui cinco cânticos de **Songs of the Souls** — seção separada, sem confundir a numeração com a Missa.

Foi executada extração local para `mce-diversoes-do-mestre-source.json` e `mce-santa-missa-source.json`, contendo páginas de proveniência, estrofes e linhas verticais desenhadas. Os dois arquivos estão preparados para auditoria, **ainda não são arquivos do repositório**. As divisões de estrofes, barras e 2x/3x requerem cotejamento visual antes de marcar como homologadas.

## Contrato de integração
- Index: `#diversoes-do-mestre` e `#santa-missa` receberão **somente `hymns_portuguese`**, em sequência contínua dentro de cada contêiner dourado já existente.
- Dados EN: `hymns_english` armazenados como fonte de futuras experiências de tradução/estudo, sem link público ativo por padrão.
- Santa Missa: `additional_songs_of_souls` separado, sem apresentação indevida como hinos nº 11 a 15.
- Marcadores: geometria vetorial extraída deve ser vinculada manualmente a versos; indicativos 2x/3x são dados documentais, não barras ativadas automaticamente.
- Preservar o módulo O Santo Cruzeiro, Palco, Fine Art, RS-01, bandeiras, retratos e navegação.
- Homologar preview antes de mesclar em `main`.

## Portão de conclusão
1. Confirmar versões JSON cotejadas e commitadas na branch experimental.
2. Ligar leitor PT a ambos os contêineres; testar páginas longas e hinários com continuações.
3. Conferir em AUTO/PORTRAIT/LANDSCAPE e impressão A5.
4. Somente depois da conferência visual do usuário e teste de regressão, promover ao site oficial.
