# JAGUAR ELO 1A — Estúdio Fine Art Mestre Canto Ensino RIS

**Estado:** registro documental para estúdio experimental — controladores e página ainda não implementados.
**Branch exclusiva:** `jaguar/mce-fineart-share-stage-20261026`.
**Referência congelada:** `jaguar/mce-modular-governance-reg123-20261025` @ `aaa118507e760ea670b9d608fb83e732d91d0a99`.
**Referência do palco existente:** `jaguar/portal-preview-v25` @ `be95888dbf9709df00ee8a9969381536c0df4dd7`.
**URL de destino reservada:** `/fine-art/` (somente funcionará depois de criar `fine-art/index.html` e publicar na Cloudflare).

## Homologações recebidas
- Nome do contêiner de acesso no Index: **Estúdio Fine Art** seguido de **Mestre Canto Ensino RIS**, em duas linhas.
- Preservação **integral** dos módulos funcionais **Palco RIS · Seis camadas** e **CAMADAS · MIXER** existentes no Index; novo estúdio não os remove nem os substitui.
- Acrescentar perspectiva **horizontal**, **vertical**, **profundidade/focal** e **inward/outward** (ou equivalente tecnicamente comprovado).
- Layout de saída em **paisagem** e **portrait/vertical**, com núcleo comum; proporções-padrão propostas 16:9 e 9:16, configuráveis depois.
- Saída em imagem compartilhável e arquivo para download; processamento local e direitos/proveniência das imagens são pré-condições.

## Estrutura
```text
Index: MCE-FINEART-20A (futuro cartão com link)
  └── /fine-art/: MCE-FINEART-20 (estúdio)
      ├── 20B palco de seis camadas adaptado
      ├── 20C mixer preservado
      ├── 20D perspectiva e geometria
      ├── 20E proporções e export/share
      └── 20F presets
```

## Limite essencial
**RS-01** alterna o tamanho da *prévia da página* (AUTO/PORTRAIT/LANDSCAPE). O **20E** alternará a proporção dos *pixels exportados* da arte (landscape/portrait). Nunca misturar estados e formatos.

## Cinco HOW TO
- **HOW TO DO:** controlador de composição gerencia transformações por camada, com entrada numérica limitada e ações reversíveis.
- **HOW TO RECORD:** presets estruturados (parâmetros, não PNG sobrescritos); armazenamento local opcional sujeito à confirmação; nada de histórico privado nem backend presumido.
- **HOW TO SHOW:** palco e mixer dourado-azul RIS preservados; controles retráteis; viewport RS-01 adaptado sem distorcer as camadas.
- **HOW TO CHECK:** verificação de exportação, consistência da transformação, dimensões, imagens carregadas, riscos CORS/canvas tainted, responsividade e acesso por teclado.
- **HOW TO SPEAK:** não aplicável nesta etapa; módulo de áudio futuro distinto.

## Sequência de integração controlada
1. Criar registro em REG-01/02/03 na branch própria — **este elo**.
2. Criar `fine-art/index.html` e links experimentais sem modificar o Index oficial; estudar dependências de JS inline e imagens originais.
3. Adaptar palco e mixer mantendo os seis controles e quatro cenas comprovadas; conferir AUTO/PORTRAIT/LANDSCAPE.
4. Integrar controles de geometria com limites e botão RESTAURAR; aferir transformação visual independente para cada camada.
5. Implementar comutação de proporção paisagem/portrait e exportar PNG; verificar assets/CORS; opcionalmente compartilhar via Web Share se suportado.
6. Quando validado, adicionar o cartão de acesso ao Index **da branch experimental**; testar navegação e realizar homologação antes de qualquer proposta de merge.

## Critérios GO/NO-GO
**GO** apenas se 6 camadas, presets de cena, imagens RIS, opacidade e controles originais continuarem operando, a imagem exportada corresponder à prévia, os formatos não cortarem conteúdo indevidamente, e a página suportar desktop e smartphone. **NO-GO** se a importação destruir o mixer, deformar o símbolo RIS, duplicar controlador ou produzir arquivo inconsistente.

## Isolamento
Nenhuma alteração na `main`, na branch de prévia homologada, na SIYAYO Academy ou em produção. Os códigos documentais não renomeiam seletores existentes.
