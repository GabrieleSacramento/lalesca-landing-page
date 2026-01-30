import Image from 'next/image';

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
    <section className="bg-[#FFFFFF] h-[880px] py-16 lg:py-24" id="diferenciais">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-[418px] h-[72px] bg-[#B29671] rounded-lg flex items-center justify-center gap-3 px-6">
            <Image
              src="/Star.svg"
              alt=""
              width={48}
              height={48}
              className="object-contain"
            />
            <h2
              className="h-[36px] text-xl lg:text-2xl text-[#FFFFFF] font-normal flex items-center"
              style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
            >
              DIFERENCIAIS
            </h2>
          </div>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[144px] gap-y-[44px] justify-items-center">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className={`w-[470px] h-[185px] bg-[#B29671] rounded-lg p-6 flex flex-col ${index === 4 ? 'md:col-span-2 md:mx-auto' : ''
                }`}
            >
              <h3
                className="h-[24px] text-lg lg:text-xl text-[#1E1919] font-normal mb-3 flex items-center"
                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
              >
                {differential.title}
              </h3>
              <p
                className="text-sm lg:text-base text-[#FFFFFF] font-normal leading-relaxed flex-1"
                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
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
