/* ============================================================================
   DADOS DO PLANO — edite aqui.
   Este arquivo tem só conteúdo (semanas, fases, disciplinas, datas). Nenhuma
   lógica. Mexer aqui não quebra o funcionamento do painel.
   Carregado como script clássico: cada `const` abaixo vira global usado por
   index.html.
   ========================================================================== */

/* Provas de referência — fonte única de verdade para os contadores no topo
   e para o selo "Prova do ..." nas semanas (campo examId em `weeks`). */
const exams = [
  { id:'tcdf',  nome:'TCDF',   data:'2026-11-22' },
  { id:'tcego', nome:'TCE-GO', data:'2027-01-17' }
];

const weeks = [
  {n:1, faseId:1, start:'2026-08-31', end:'2026-09-06', foco:'Diagnóstico: reunir PDFs de legislação, montar caderno de erros, configurar Estratégia Concursos. Iniciar Português e Direito Administrativo (conceitos-base).'},
  {n:2, faseId:1, start:'2026-09-07', end:'2026-09-13', foco:'Direito Constitucional (conceitos-base) + continuar Português.'},
  {n:3, faseId:1, start:'2026-09-14', end:'2026-09-20', foco:'Direito Administrativo: ato administrativo, agentes públicos, poderes da administração.'},
  {n:4, faseId:1, start:'2026-09-21', end:'2026-09-27', foco:'AFO: orçamento público, ciclo orçamentário, PPA, LDO, LOA.'},
  {n:5, faseId:2, start:'2026-09-28', end:'2026-10-04', foco:'Licitações — Lei 14.133/2021 completa.'},
  {n:6, faseId:2, start:'2026-10-05', end:'2026-10-11', foco:'Administração Geral e Pública: evolução, governança, funções administrativas.'},
  {n:7, faseId:2, start:'2026-10-12', end:'2026-10-18', foco:'Controle Externo/Auditoria: instrumentos de fiscalização, tipos de auditoria.'},
  {n:8, faseId:2, start:'2026-10-19', end:'2026-10-25', foco:'Controle Externo/Auditoria: jurisprudência do TCU por tema + revisão de Direito Administrativo.'},
  {n:9, faseId:2, start:'2026-10-26', end:'2026-11-01', foco:'AFO aprofundado: LRF, Lei 4.320/1964, dívida pública.'},
  {n:10, faseId:2, start:'2026-11-02', end:'2026-11-08', foco:'Revisão geral do núcleo + questões de fixação.'},
  {n:11, faseId:3, start:'2026-11-09', end:'2026-11-15', foco:'Reforço final de Direito Administrativo e Controle Externo para o TCDF.'},
  {n:12, faseId:3, start:'2026-11-16', end:'2026-11-22', foco:'Semana da prova do TCDF — comparecer sem meta de aprovação, só para sentir o Cebraspe na prática.', examId:'tcdf'},
  {n:13, faseId:3, start:'2026-11-23', end:'2026-11-29', foco:'Revisão pós-prova: ajustar o plano com base nas dificuldades sentidas no formato Certo/Errado.'},
  {n:14, faseId:3, start:'2026-11-30', end:'2026-12-06', foco:'Retomar núcleo com foco no formato FCC: Contabilidade Pública, Gestão de Pessoas.'},
  {n:15, faseId:3, start:'2026-12-07', end:'2026-12-13', foco:'Matemática/Raciocínio Lógico + Legislação institucional do TCE-GO (leitura literal).'},
  {n:16, faseId:4, start:'2026-12-14', end:'2026-12-20', foco:'Simulado completo cronometrado (formato FCC) + revisão de erros.'},
  {n:17, faseId:4, start:'2026-12-21', end:'2026-12-27', foco:'Revisão ativa da legislação institucional do TCE-GO + questões específicas.'},
  {n:18, faseId:4, start:'2026-12-28', end:'2027-01-03', foco:'Simulado completo nº 2 + revisão de pontos fracos.'},
  {n:19, faseId:4, start:'2027-01-04', end:'2027-01-10', foco:'Últimos ajustes: caderno de erros, ajuste de sono e rotina para o horário da prova.'},
  {n:20, faseId:4, start:'2027-01-11', end:'2027-01-16', foco:'Reta final — sem conteúdo novo, só revisão leve. Confirmar local de prova.', examId:'tcego'},
  {n:21, faseId:5, start:'2027-01-18', end:null, foco:'Sem prova confirmada — retomar construção do núcleo, aprofundar Controle Externo/Auditoria. Monitorar editais de CGU, TCE-SP, TCE-PB, TCE-RJ e TCU.'}
];

const phases = [
  {id:1, nome:'Fase 1 — Base', range:'31/08 a 27/09/2026', plataforma:'Estratégia Concursos'},
  {id:2, nome:'Fase 2 — Construção ampla', range:'28/09 a 08/11/2026', plataforma:'Estratégia + TEC + Qconcursos (filtro Cebraspe)'},
  {id:3, nome:'Fase 3 — Primeira prova real', range:'09/11 a 13/12/2026', plataforma:'Mesma base, foco na experiência do TCDF'},
  {id:4, nome:'Fase 4 — Reta final TCE-GO', range:'14/12/2026 a 16/01/2027', plataforma:'Foco no formato FCC'},
  {id:5, nome:'Fase 5 — Continuidade', range:'a partir de 18/01/2027', plataforma:'Estratégia + TEC + Qconcursos, contínuo'}
];

const nucleoCore = [
  {id:'portugues', nome:'Língua Portuguesa', topicos:['Interpretação textual','Ortografia e crase','Coesão textual','Morfossintaxe','Concordância e regência','Reescrita de frases']},
  {id:'constitucional', nome:'Direito Constitucional', topicos:['Princípios fundamentais','Aplicabilidade das normas','Direitos e garantias fundamentais','Organização do Estado','Fiscalização contábil, financeira e orçamentária']},
  {id:'administrativo', nome:'Direito Administrativo', topicos:['Ato administrativo','Agentes públicos','Poderes da administração','Responsabilidade civil do Estado','Licitações — Lei 14.133/2021','Improbidade administrativa']},
  {id:'afo', nome:'Administração Financeira e Orçamentária', topicos:['Orçamento público e ciclo orçamentário','PPA, LDO, LOA','Receita e despesa pública','Lei de Responsabilidade Fiscal','Lei 4.320/1964']},
  {id:'admgeral', nome:'Administração Geral e Pública', topicos:['Evolução da administração','Governança pública','Funções administrativas','Ferramentas de gestão','Gestão de projetos']},
  {id:'controle', nome:'Controle Externo / Auditoria', topicos:['Sistema constitucional de controle','Instrumentos de fiscalização','Tipos de auditoria','Jurisprudência do TCU por tema']}
];

const nucleoExtra = [
  {id:'contabilidade', nome:'Contabilidade Pública', topicos:['NBC TSP','MCASP','Plano de contas aplicado ao setor público']},
  {id:'rh', nome:'Gestão de Pessoas', topicos:['Recrutamento e seleção','Avaliação de desempenho','Gestão por competências']},
  {id:'raciocinio', nome:'Matemática e Raciocínio Lógico', topicos:['Estruturas lógicas','Lógica sentencial','Matemática financeira']},
  {id:'tdcivtri', nome:'Previdenciário, Civil e Tributário', topicos:['Relevante apenas se for prestar o TCDF']},
  {id:'dadosia', nome:'Análise de Dados, Estatística e IA', topicos:['Estatística descritiva','Visualização de dados','IA generativa aplicada']},
  {id:'ingles', nome:'Língua Inglesa técnica', topicos:['Leitura técnica — ativar quando sair edital do TCU']}
];

const platforms = [
  {nome:'Estratégia Concursos', funcao:'Teoria, PDFs, edital verticalizado', ativarFase:1},
  {nome:'TEC Concursos', funcao:'Filtro por banca, controle por incidência', ativarFase:2},
  {nome:'Qconcursos', funcao:'Volume de questões, provas anteriores completas', ativarFase:2}
];

const keyDates = [
  {label:'Isenção de taxa TCE-GO', data:'2026-09-10'},
  {label:'Fim das inscrições do TCDF', data:'2026-09-17'},
  {label:'Fim das inscrições do TCE-GO', data:'2026-11-06'},
  {label:'Pagamento da taxa TCE-GO', data:'2026-11-09'},
  {label:'Prova do TCDF', data:'2026-11-22', destaque:true},
  {label:'Edital de convocação TCE-GO', data:'2026-12-11'},
  {label:'Prova do TCE-GO', data:'2027-01-17', destaque:true},
  {label:'Resultado preliminar TCE-GO', data:'2027-03-19'},
  {label:'Resultado final TCE-GO', data:'2027-06-16'}
];

const opportunistic = [
  {nome:'CGU', status:'Anunciado, edital até dez/2026 (não confirmado)'},
  {nome:'TCE-SP', status:'Comissão formada, sem data'},
  {nome:'TCE-PB', status:'Edital esperado, sem data certa'},
  {nome:'TCE-RJ', status:'Previsto no orçamento 2027'},
  {nome:'TCU', status:'Foco principal — o núcleo já é a preparação'}
];

/* Rotina semanal por dia (0 = domingo … 6 = sábado). */
const rotina = {
  0:'Descanso ou revisão leve',
  1:'Direito Administrativo + Licitações',
  2:'Português + prática discursiva Cebraspe',
  3:'Direito Constitucional + Controle Externo',
  4:'AFO + Administração Geral e Pública',
  5:'Complementares (rotativo)',
  6:'Bateria de questões (Cebraspe) + discursiva FCC'
};
