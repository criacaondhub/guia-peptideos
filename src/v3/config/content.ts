export const HERO_CONTENT = {
  // Quebras fixas só valem pro desktop. No mobile a `bold`/`accent` de cada
  // segmento se mantém, mas tudo vira uma linha só (sem `<br>`) pra fluir
  // naturalmente. No título, `accent` (cor da marca, sem engrossar) é o
  // destaque de "você vai saber exatamente o que fazer."; na subline, o
  // destaque de "Direto ao ponto..." é `bold` puro (mesmo padrão da V2).
  titleLines: [
    [{ text: 'Da próxima vez que o paciente', bold: false, accent: false }],
    [
      { text: 'falar de peptídeo, ', bold: false, accent: false },
      { text: 'você vai', bold: false, accent: true },
    ],
    [{ text: 'saber exatamente o que fazer.', bold: false, accent: true }],
  ],
  titleLinesMobile: [
    [
      { text: 'Da próxima vez que o paciente falar de peptídeo, ', bold: false, accent: false },
      { text: 'você vai saber exatamente o que fazer.', bold: false, accent: true },
    ],
  ],
  subtitleLines: [
    [{ text: 'Este guia pega cada classe de peptídeo e mostra', bold: false }],
    [{ text: 'o que ela faz, por que o paciente procura e como', bold: false }],
    [
      { text: 'você conduz na consulta. ', bold: false },
      { text: 'Direto ao ponto, do', bold: true },
    ],
    [{ text: 'jeito que a coisa acontece no consultório.', bold: true }],
  ],
  subtitleLinesMobile: [
    [
      {
        text: 'Este guia pega cada classe de peptídeo e mostra o que ela faz, por que o paciente procura e como você conduz na consulta. ',
        bold: false,
      },
      {
        text: 'Direto ao ponto, do jeito que a coisa acontece no consultório.',
        bold: true,
      },
    ],
  ],
  ctaOldPrice: 'R$197,00',
  ctaNewPrice: 'R$47,00',
  ctaHref: '#preco',
} as const

// UNLOCK_CONTENT: mesma estrutura de volumes da V2 do manual-peptideos — são
// os mesmos 6 ebooks/classes, só que aqui empacotados no guia único (sem o
// item de Workshop, que não existe neste produto).
export const UNLOCK_CONTENT = {
  titleLines: ['Conheça os 6 volumes que resolvem', 'as situações mais difíceis do consultório'],
  titleLinesMobile: ['Conheça os 6 volumes que resolvem as situações mais difíceis do consultório'],
  subtitleLines: [
    'Cada volume mostra, na prática, o que cada peptídeo faz e',
    'como você deve agir quando o paciente chega com o assunto.',
  ],
  subtitleLinesMobile: [
    'Cada volume mostra, na prática,',
    'o que cada peptídeo faz e como',
    'você deve agir quando o paciente',
    'chega com o assunto.',
  ],
  items: [
    {
      eyebrow: 'Volume 01',
      title: 'O paciente quer foco e memória',
      description:
        'Chega pedindo Semax, Selank, "aquele negócio de cognição". No volume de Peptídeos Cognitivos você sabe o que tem respaldo, o que é só hype e o que responder.',
      image: 'assets/volume-1.webp',
      imageAlt: 'Mockup do volume Peptídeos Cognitivos',
    },
    {
      eyebrow: 'Volume 02',
      title: 'O paciente toca no assunto sexual e o clima pesa',
      description:
        'A classe que mais gera dúvida e desconforto na consulta. No volume de Função Sexual você conduz esse tema com segurança, sem gaguejar.',
      image: 'assets/volume-2.webp',
      imageAlt: 'Mockup do volume Peptídeos para Função Sexual',
    },
    {
      eyebrow: 'Volume 03',
      title: 'O paciente chega com o "protocolo Wolverine"',
      description:
        'BPC-157, GHK de cobre, cura milagrosa de lesão. No volume de Regeneração & Glow você entende o que ele usa escondido, os riscos e o que fazer.',
      image: 'assets/volume-3.webp',
      imageAlt: 'Mockup do volume Peptídeos de Regeneração Tecidual e Glow',
    },
    {
      eyebrow: 'Volume 04',
      title: 'O paciente da longevidade senta na sua frente',
      description:
        'O que quer performar acima da média, viver mais e melhor. No volume de Mitocondriais e Longevidade você separa o que é sério do que é só promessa.',
      image: 'assets/volume-4.webp',
      imageAlt: 'Mockup do volume Peptídeos Mitocondriais e Longevidade',
    },
    {
      eyebrow: 'Volume 05',
      title: 'O paciente traz o combo da academia',
      description:
        'Tesamorelina, Ipamorelina, aquele protocolo que alguém passou pra ele. No volume de Secretagogos de GH você sabe a indicação real de cada um.',
      image: 'assets/volume-5.webp',
      imageAlt: 'Mockup do volume Peptídeos Secretagogos de GH e Fragmentos',
    },
    {
      eyebrow: 'Volume 06',
      title: 'O paciente quer "desinflamar tudo"',
      description:
        'No volume de anti-inflamatórios você separa o que a ciência sustenta do que é puro marketing.',
      image: 'assets/volume-6.webp',
      imageAlt: 'Mockup do volume Incretinas, Anti-inflamatórios e Terapêuticos Avançados',
    },
  ],
  ctaLabel: 'QUERO OS 6 VOLUMES',
  ctaLabelLinesMobile: ['QUERO OS 6 VOLUMES'],
  ctaHref: '#preco',
} as const

// SOCIAL_PROOF_CONTENT: os mesmos depoimentos do manual-peptideos, a pedido
// do cliente ("traga exatamente os mesmos do manual").
export const SOCIAL_PROOF_CONTENT = {
  titleLines: [
    [
      { text: 'Mais de 250 médicos', bold: true },
      { text: ' já mudaram', bold: false },
    ],
    [{ text: 'a forma como atendem peptídeos', bold: false }],
  ],
  titleLinesMobile: [
    [{ text: 'Mais de 250 médicos', bold: true }],
    [{ text: 'já mudaram a forma', bold: false }],
    [{ text: 'como atendem peptídeos', bold: false }],
  ],
  testimonials: [
    {
      image: 'assets/depoimento-1.webp',
      author: 'Dr. Rafael Valença',
      quote:
        'Tenho usado bastante os e-books na clínica. Me ajudam a organizar o raciocínio e entender melhor como seguir com cada caso.',
      reply:
        'Que bom saber disso, Rafael! A ideia é justamente que o material seja útil na rotina da clínica. Obrigado por compartilhar!',
    },
    {
      image: 'assets/depoimento-2.webp',
      author: 'Dra. Emanuelle Monteiro',
      quote:
        'Antes, ficava insegura quando o assunto era peptídeos. Estudar pelos materiais me ajudou a conduzir melhor essas conversas e ter mais confiança no valor da minha consulta.',
      reply:
        'Emanuelle, essa confiança faz diferença mesmo. Muito bom saber que os materiais têm ajudado você nesse processo!',
    },
    {
      image: 'assets/depoimento-3.webp',
      author: 'Dr. Luiz Fernando',
      quote:
        'Eu acabava encaminhando alguns casos por não me sentir preparado. Os e-books me deram uma base melhor pra entender o que consigo acompanhar e quando preciso encaminhar.',
      reply:
        'Luiz, você trouxe um ponto muito importante: reconhecer quando acompanhar e quando encaminhar. Feliz em contribuir com esse aprendizado!',
    },
    {
      image: 'assets/depoimento-4.webp',
      author: 'Dr. Augusto',
      quote:
        'Os pacientes já chegam perguntando sobre peptídeos, né? Comprei os manuais porque precisava estudar mais o assunto. Hoje consigo explicar melhor, inclusive quando algo não faz sentido pro caso.',
      reply:
        'É verdade, Augusto! Muitas vezes o paciente chega com a pergunta antes mesmo de a gente ter parado pra estudar o assunto. Que bom que os manuais estão ajudando nessas conversas.',
    },
    {
      image: 'assets/depoimento-5.webp',
      author: 'Dra. Giovana Alencar',
      quote:
        'Eu sentia que precisava me atualizar, mas faltava um material pra orientar os estudos. Os e-books têm me ajudado nisso. Volto neles quando surge alguma dúvida no dia a dia.',
      reply:
        'Bom saber que você continua consultando os materiais, Giovana! Foi pensando nesse uso no dia a dia que organizamos o conteúdo. Obrigado pelo retorno!',
    },
  ],
  ctaLabel: 'QUERO ESSE RESULTADO NA MINHA CLÍNICA',
  ctaLabelLinesMobile: ['QUERO ESSE RESULTADO', 'NA MINHA CLÍNICA'],
  ctaHref: '#preco',
} as const

// FOUNDER_CONTENT / PRICE_CONTENT / FAQ_CONTENT / FOOTER_CONTENT / CONFIG:
// idênticos aos da V1 do guia — essas seções não mudaram na V2.
export const FOUNDER_CONTENT = {
  title: {
    mobileLines: [
      [
        { text: 'Aprenda com quem ', bold: false },
        { text: 'foi', bold: true },
      ],
      [{ text: 'pioneiro com Mounjaro no', bold: true }],
      [
        { text: 'Brasil', bold: true },
        { text: ' e agora está antecipando', bold: false },
      ],
      [{ text: 'mais uma tendência', bold: false }],
    ],
    desktopLines: [
      'Aprenda com quem foi pioneiro com',
      'Mounjaro no Brasil e agora está',
      'antecipando mais uma tendência',
    ],
  },
  imageAlt: 'Foto do médico pioneiro em Mounjaro no Brasil',
  paragraphs: [
    {
      mobile: [
        { text: 'O médico que ', bold: false },
        { text: 'foi pioneiro no Mounjaro no Brasil', bold: true },
        { text: ' e construiu uma clínica de ', bold: false },
        { text: 'R$ 15 milhões', bold: true },
        { text: ' por ano do zero.', bold: false },
      ],
      desktopLines: [
        [
          { text: 'O médico que ', bold: false },
          { text: 'foi pioneiro no Mounjaro no Brasil', bold: true },
          { text: ' e', bold: false },
        ],
        [
          { text: 'construiu uma clínica de ', bold: false },
          { text: 'R$ 15 milhões', bold: true },
          { text: ' por ano do zero.', bold: false },
        ],
      ],
    },
    {
      mobile: [
        {
          text: 'Nutrólogo, CEO do Instituto LongLife, pós-graduado em Nutrologia e Psiquiatria pelo ',
          bold: false,
        },
        { text: 'Hospital Albert Einstein', bold: true },
        { text: ', com passagem pelo ', bold: false },
        { text: 'Trinity College Dublin', bold: true },
        { text: ' e MBA pela Link School of Business.', bold: false },
      ],
      desktopLines: [
        [{ text: 'Nutrólogo, CEO do Instituto LongLife, pós-graduado em', bold: false }],
        [
          { text: 'Nutrologia e Psiquiatria pelo ', bold: false },
          { text: 'Hospital Albert Einstein', bold: true },
          { text: ', com', bold: false },
        ],
        [
          { text: 'passagem pelo ', bold: false },
          { text: 'Trinity College Dublin', bold: true },
          { text: ' e MBA pela', bold: false },
        ],
        [{ text: 'Link School of Business.', bold: false }],
      ],
    },
    {
      mobile: [
        { text: 'Palestrante em instituições como ', bold: false },
        { text: 'Harvard, Yale e Trinity College.', bold: true },
      ],
      desktopLines: [
        [
          { text: 'Palestrante em instituições como ', bold: false },
          { text: 'Harvard, Yale e Trinity College.', bold: true },
        ],
      ],
    },
    {
      mobile: [
        { text: 'Homenageado pela Assembleia Legislativa de São Paulo com a ', bold: false },
        { text: 'Medalha de Honra ao Mérito Legislativo em 2025.', bold: true },
        { text: ' Quando quase ninguém no Brasil falava em Mounjaro, ', bold: false },
        { text: 'ele já', bold: true },
        { text: ' acompanhava pacientes com o medicamento.', bold: false },
      ],
      desktopLines: [
        [{ text: 'Homenageado pela Assembleia Legislativa de São Paulo', bold: false }],
        [
          { text: 'com a ', bold: false },
          { text: 'Medalha de Honra ao Mérito Legislativo em 2025.', bold: true },
        ],
        [{ text: 'Quando quase ninguém no Brasil falava em Mounjaro,', bold: false }],
        [
          { text: 'ele já', bold: true },
          { text: ' acompanhava pacientes com o medicamento.', bold: false },
        ],
      ],
    },
    {
      mobile: [
        { text: 'Pioneiro na prática, assim como está sendo no peptídeo. ', bold: false },
        { text: 'Mais de 50 milhões faturados nos últimos 12 meses.', bold: true },
        {
          text: ' Mais de 245 mil seguidores, referência no Brasil sobre nutrologia. Foi essa vivência de clínica, de protocolo, de resultado real que deu origem a essa imersão. ',
          bold: false,
        },
        { text: 'Não é teoria.', bold: true },
        { text: ' É o que ele faz todo dia, aberto pra você pela primeira vez.', bold: false },
      ],
      desktopLines: [
        [{ text: 'Pioneiro na prática, assim como está sendo no peptídeo.', bold: false }],
        [
          { text: 'Mais de 50 milhões faturados nos últimos 12 meses.', bold: true },
          { text: ' Mais', bold: false },
        ],
        [{ text: 'de 245 mil seguidores, referência no Brasil sobre nutrologia.', bold: false }],
        [{ text: 'Foi essa vivência de clínica, de protocolo, de resultado real', bold: false }],
        [
          { text: 'que deu origem a essa imersão. ', bold: false },
          { text: 'Não é teoria.', bold: true },
          { text: ' É o que ele faz', bold: false },
        ],
        [{ text: 'todo dia, aberto pra você pela primeira vez.', bold: false }],
      ],
    },
  ],
} as const

export const PRICE_CONTENT = {
  checks: [
    'Acesso Imediato',
    '7 dias de garantia incondicional',
    'Desconto exclusivo de lançamento',
    'Guia completo de peptídeos em PDF, organizado por classe',
    'Versão atualizada 2026',
  ],
  price: {
    oldPrice: 'R$197,00',
    newPrice: 'R$47,00',
    installment: 'R$ 4,85',
  },
  ctaLabel: 'Quero acessar agora',
  ctaLabelLinesMobile: ['Quero acessar', 'agora'],
  ctaHref: 'https://checkout.thebank.com.br/pt-BR/7493043529305485312',
} as const

export const FAQ_CONTENT = {
  title: 'Perguntas Frequentes',
  items: [
    {
      question: 'Após a compra, como acesso o material?',
      answer:
        'Assim que você finalizar sua compra será enviado no seu e-mail o acesso a nossa área de membros exclusiva onde todos os materiais estarão disponíveis.',
    },
    {
      question: 'Peptídeos não são permitidos no Brasil. Por que eu deveria comprar este material?',
      answer:
        'Os médicos mais bem sucedidos do Brasil estão sempre em constante evolução, se atualizando das maiores novidades e tendências ao redor do mundo. Dominar o tema "peptídeos" é extremamente importante para todo médico que se preocupa com a sua carreira e com a atualização do seu próprio conhecimento frente ao mercado.',
    },
    {
      question: 'E se eu não gostar?',
      answer:
        'Você tem liberdade para, dentro de 7 dias, pedir reembolso do treinamento. Faremos ele de maneira integral, sem qualquer tipo de dor de cabeça.',
    },
    {
      question: 'Posso acessar de onde quiser?',
      answer:
        'Sim. Este é um material 100% online em PDF. Você pode baixar e consultar quando e de onde quiser. Muitos médicos usam como material de apoio no dia a dia do consultório.',
    },
  ],
} as const

export const FOOTER_CONTENT = {
  copyright: '© 2026 Dr. Gustavo Sá',
  disclaimer:
    'Todos os dados coletados são usados exclusivamente para envio do acesso ao treinamento e comunicações relacionadas.',
  credit: {
    prefix: 'Desenvolvido por: ',
    name: 'Nova Dimensão',
    href: 'https://escala.novadimensaohub.com.br/aceleracao-de-experts/',
  },
} as const

export const CONFIG = {
  // ⚠️ PENDENTE — preencher antes do deploy
  FORM_ENDPOINT: '⚠️ PENDENTE',
  WHATSAPP_URL: '⚠️ PENDENTE',
  WHATSAPP_NUMBER: '⚠️ PENDENTE',
  CONTACT_EMAIL: '⚠️ PENDENTE',
  CONTACT_PHONE: '⚠️ PENDENTE',
  DOMAIN: '⚠️ PENDENTE',

  // ⚠️ PREENCHER
  COMPANY_NAME: '⚠️ PREENCHER',
} as const
