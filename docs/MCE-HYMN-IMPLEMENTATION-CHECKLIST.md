# 🐆 MCE — CHECKLIST JAGUAR DE IMPLEMENTAÇÃO DOS HINÁRIOS

**Guia vivo para chats futuros:** `jaguar/mce-hymn-publishing-audit-20261026` · origem publicada `main` @ `dd5e1f62c0de5cb227f37ddc95daf777998ad919`. **Documento apenas; nenhuma alteração no runtime.** Atualizar estados com evidências de commit, teste e homologação, sem substituir silenciosamente decisões anteriores.

## Escopo e princípios
- Prioridades: **O Santo Cruzeiro Universal**, **Diversões do Mestre** e **Santa Missa**; cada hinário integralmente dentro de um módulo identificável, **sem páginas individuais por hino nem índice na leitura contínua**.
- O leitor continua intacto. A geração de imagem/impresso acontece em **frame isolado**, invisível durante a leitura, **mas renderizável para medir dimensões**; `display:none` não serve para medição direta.
- Zonas 1–5: **(1)** número/título; **(2)** ritmo; **(3)** barras verticais; **(4)** Sol·Lua·Estrela; **(5)** frame técnico. A área 5 engloba as áreas 1–4 e o texto das estrofes.
- **RS-01** AUTO/PORTRAIT/LANDSCAPE adapta a janela da página; **EXPORT 9:16** fixa a proporção dos pixels do material compartilhável; **PRINT A4** usa proporção ISO e dimensões físicas próprias, não 9:16.
- O mesmo layout-base A4 pode ser escalado para A5/A3, mas **deve comprovar legibilidade, margens e capacidade da impressora** no tamanho escolhido.

## Estudo anterior encontrado — barras
- `data/modelo-a-marcacoes.json`: Modelo A aprovado visualmente, referências a hinos **28 / 42 / 50 / 92** em páginas **143 / 173 / 193 / 295**, sem transcrição nem aplicação musical verificada.
- `data/modelo-b-componente.json`: **Modelo B**, até **3 barras**, `gap_px: 8`, segmentos por **verso**. Referências de `VALSA` e `MISTO` são **fictícias**, apenas demonstrações.
- `estudo-repeticoes/modelo-b-responsivo.html`: laboratório com 0–3 barras, até três colunas e resposta a versos quebrados. Suas palavras são fictícias.
- No leitor, a ativação pressupõe `data-bar-status="verified"` e `data-bars` confirmado. **Não atribuir marcadores a hinos reais por inferência.**
- Ritmo: **MARCHA** pode ser implícita quando verificada como padrão editorial; **VALSA / MAZURCA / MISTO** aparecem explicitamente conforme a fonte e o trecho. Não inserir indicações sem comprovação.

## Cinco HOW TO como contrato
| Pilar | Responsabilidade | Limite |
|---|---|---|
| **HOW TO DO** | Controlar dados revisados, compor frames, distribuir estrofes e ações de exportação | Não interpretar marcações musicais por conta própria |
| **HOW TO RECORD** | Rastrear fonte, revisão, presets, versões e homologação | Não inventar persistência que não existe |
| **HOW TO SHOW** | HTML/CSS, fontes, cores, barras, 9:16, A4, bordas, compartilhamento | Não transformar o leitor visível em carrossel de exportação |
| **HOW TO CHECK** | Medir ocupação real, coerência, dados, estrofes inteiras, print e export | Falhar fechado quando falta fonte ou espaço |
| **HOW TO SPEAK** | Reservado para áudio, música e leitura futura | Não aplicável nesta etapa |

## Checkpoints executáveis — marque conforme evidência
- [ ] **HIN-01 — Inventário e proteção** · Conferir três âncoras, código e arquivo de origem, fixar HEAD, separar leitor corrente de frame exportável. **Aceitação:** Index sem alteração; documento fonte identificado. **Estado inicial:** DOCUMENTED.
- [ ] **HIN-02 — Fonte única verificada** · Comparar versos autorados no Index com JSON documental, resolver divergências mediante revisão humana. **Aceitação:** Nenhum verso inventado; proveniência explícita. **Estado inicial:** PENDING.
- [ ] **HIN-03 — Unidade de hinário** · Um hinário inteiro por contêiner; hinos consecutivos sem índice ou páginas individuais. **Aceitação:** Ordem mantida; sem navegação NEXT entre hinos. **Estado inicial:** DOCUMENTED.
- [ ] **HIN-04 — Frame invisível 9:16** · Renderizar offscreen/isoladamente no compositor, não ocultar com display:none durante medição; centralizar no estágio AUTO/PORTRAIT/LANDSCAPE. **Aceitação:** 9:16 validado; sem moldura laranja no leitor; sem clipping. **Estado inicial:** PLANNED.
- [ ] **HIN-05 — Zonas de composição 1–5** · 1 número+título; 2 ritmo; 3 barras; 4 Sol Lua Estrela; 5 frame técnico de composição. **Aceitação:** áreas distintas e editáveis; coerência da leitura. **Estado inicial:** DOCUMENTED.
- [ ] **HIN-06 — Ritmo editorial** · MARCHA omitida por padrão quando padrão confirmado; VALSA/MAZURCA/MISTO explícitos conforme edição verificada. **Aceitação:** não atribuir ritmo sem fonte. **Estado inicial:** DOCUMENTED.
- [ ] **HIN-07 — Barras verticais Modelo B** · Reaproveitar linhas finas até 3, gap 8px como referência, alcance por versos, desenhar só com data-bar-status=verified. **Aceitação:** 0–3 linhas; sem bis indevido; legível com verso quebrado. **Estado inicial:** DOCUMENTED.
- [ ] **HIN-08 — Distribuição das estrofes** · Medir altura de cabeçalho, blocos e rodapé no frame real; respeitar 1–8 estrofes em sequência, dividir páginas sem cortar estrofes. **Aceitação:** nenhum trecho truncado; tamanho mínimo homologado; paginação reproduzível. **Estado inicial:** PLANNED.
- [ ] **HIN-09 — Master A4 de impressão** · Compor A4 (210×297mm) e permitir escala ISO A5/A3, considerar margens não imprimíveis e legibilidade da escala. **Aceitação:** print CSS page size; margens seguras; teste A5 legibilidade. **Estado inicial:** PLANNED.
- [ ] **HIN-10 — Capas retrato** · Separar capa editorial de páginas de letra, com zonas para título, imagem aprovada, moldura, proveniência. **Aceitação:** direitos e atribuição; resolução de impressão. **Estado inicial:** PLANNED.
- [ ] **HIN-11 — Ações Sol Lua Estrela** · Separador do leitor permanece não interativo; compartilhar pela ação associada no compositor acessível por teclado sem transformar símbolo decorativo em controle implícito. **Aceitação:** sem quebra de semântica; ação nomeada e acessível. **Estado inicial:** PLANNED.
- [ ] **HIN-12 — Exportar e imprimir** · PNG social 9:16 e impressão mestre A4; conferir fidelidade visual e permissões, evitar publicar automaticamente. **Aceitação:** PNG sem corte; folhas A4/A5/A3 legíveis; share opcional. **Estado inicial:** PLANNED.
- [ ] **HIN-13 — Registros e homologação** · Guardar presets/versionamento/estado de revisão sem confundir com runtime do usuário. **Aceitação:** status e commit verificáveis; rollback. **Estado inicial:** PLANNED.
- [ ] **HIN-14 — Som e audiovisual** · Áudio, vídeo, execução e partituras ficam fora do primeiro compositor até fonte e direitos confirmados. **Aceitação:** não instalado; sem claim de reprodução. **Estado inicial:** DEFERRED.

## Plano de execução em elos
1. **Pré-análise:** inventariar fontes de cada um dos três hinários; mapear hinos/estrofes verificados.
2. **Prova de layout:** frame isolado 9:16, testando título, ritmo, versos, barras e símbolos em retrato.
3. **Motor de medição:** acomodar estrofes inteiras (até 8 por hino) em um ou mais frames, sem truncar nem diminuir fonte abaixo do homologado.
4. **Print master:** página A4, conferir escalas A5 e A3 com impressão real/PDF.
5. **Share e impressão:** PNG e print com controles distintos, nomes de arquivos e dados de proveniência.
6. **Replicação controlada:** aplicar aos demais hinários e registrar por autor/atribuição/egrégora após revisão.

## Procedimento GO / NO-GO
**GO** somente depois de teste por formato, captura renderizada, revisão de letras e barras, e homologação do usuário. **NO-GO** se houver texto inventado, trecho cortado, barra não verificada, regressão no palco/RS-01 ou incoerência entre leitura e imagem.

**Este guia é complementado por:** `docs/mce-hymn-publishing-checklist.json`. Em novos chats, começar pela leitura de ambos; atualizar itens individualmente com branch, commit, fonte, teste, status e próxima ação.
