'use client';

const differentials = [
  {
    title: 'Transparência',
    description: 'Acompanhamento em tempo real e clareza absoluta. Utilizamos gestão digital para que você entenda cada etapa da sua defesa, com informações diretas e sem barreiras.',
  },
  {
    title: 'Individualização',
    description: 'Estratégias sob medida para casos únicos. Rejeitamos soluções genéricas. Construímos defesas específicas, focadas na melhor solução para a sua realidade.',
  },
  {
    title: 'Humanização',
    description: 'A tecnologia não afasta, ela aproxima. Atendimento direto e pessoal com quem realmente conduz o seu caso. Para nós, você não é um número de processo, é uma vida que merece ser ouvida.',
  },
  {
    title: 'Comunicação',
    description: 'O Direito sem complicações. Traduzimos o "juridiquês" para uma linguagem simples e acessível. Você sempre no controle e consciente de todas as decisões estratégicas.',
  },
  {
    title: 'Advocacia digital',
    description: 'Agilidade sem fronteiras. Nossa estrutura tecnológica garante presença e resposta imediata em qualquer lugar, unindo a força da defesa tradicional à velocidade do mundo moderno.',
  },
];

export default function Differentials() {
  return (
    <section className="bg-[#FFFFFF] py-8 lg:py-[64px]" id="diferenciais">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Title */}
        <div className="flex items-center justify-center mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal flex items-center text-center px-2 sm:px-4"
            style={{
              fontFamily: 'var(--font-abel), sans-serif',
              fontSize: 'clamp(18px, 5vw, 64px)',
              minHeight: 'clamp(22px, 5vw, 64px)'
            }}
          >
            <span style={{ color: '#B29671' }}>NOSSOS DIFERENCIAIS</span>
          </h2>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-x-[144px] lg:gap-y-[44px] justify-items-start">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className={`w-full max-w-[550px] min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px] bg-[#FFFFFF] p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col animate-slide-in-right`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
                borderRadius: '0',
                boxShadow: '-4px 4px 4px rgba(178, 150, 113, 0.1)'
              }}
            >
              <h3
                className="text-[#1E1919] font-normal mb-[12px] flex items-center"
                style={{
                  fontFamily: 'var(--font-archivo), sans-serif',
                  fontSize: 'clamp(16px, 2.5vw, 30px)',
                  lineHeight: '23px',
                  minHeight: 'clamp(18px, 2.5vw, 32px)',
                  fontWeight: 600
                }}
              >
                {differential.title}
              </h3>
              <p
                className="text-[#808080] font-normal flex-1"
                style={{
                  fontFamily: 'var(--font-abel), sans-serif',
                  fontSize: 'clamp(12px, 2vw, 24px)',
                  lineHeight: '29px'
                }}
              >
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
