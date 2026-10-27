# MCE — Importação UNAQUI · Portão de produção

**Fonte indicada pelo titular:** https://unaqui.wordpress.com/ · **Estado:** ingestão preparada, ainda não validada.

## Componentes criados
- `scripts/import_unaqui.py`: captura o HTML e extrai hinos em JSON, distinguindo ritmos explícitos, estrofes e títulos.
- `.github/workflows/mce-unaqui-import.yml`: GitHub Actions, restrito à branch `jaguar/mce-hymn-publishing-audit-20261026`.
- Saída esperada: `data/cruzeiro-unaqui-import.json`. **A saída não havia aparecido no último exame.**

## Checagens obrigatórias antes de ativar a leitura integral
1. Confirmar execução **SUCCESS** do workflow e existência da saída no GitHub.
2. Conferir títulos/numeração e lacunas (esperado aproximadamente 130 hinos, sem presumir que todos estejam completos).
3. Comparar contagem de estrofes e primeiros/últimos versos com a fonte, pois WordPress pode ter marcação HTML irregular.
4. Tratar `(tris)`, `(bis)`, reticências e versos abreviados como metadados/editorial; **não** inferir barras de repetição.
5. Conferir 01 Lua Branca (8 estrofes) e hinos irregulares amostrados (múltiplos ritmos, versos longos).
6. Integrar renderizador **progressivo** para leitura contínua, sem hinos em páginas separadas e sem índice. Um único contêiner, separadores dourados Sol Lua Estrela, título/ritmo apenas na abertura.
7. Inspecionar em AUTO/PORTRAIT/LANDSCAPE, verificar não regressão do Stage/mixer e páginas internas.
8. Somente após homologação visual do usuário, aprovar PR para `main` e aguardar deployment Cloudflare.

## NO-GO
- JSON inexistente ou incompleto; erro de parser; hino atribuído incorretamente; barra não comprovada; textos omitidos; regressão no site.
- Nunca promover script bruto à produção afirmando que o corpus está completo.

**Nota:** Esta etapa não altera `main`; a fonte pública foi localizada, mas a coleta completa não foi verificada.
