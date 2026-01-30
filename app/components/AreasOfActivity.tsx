import Link from 'next/link';
import Image from 'next/image';

const whatsappNumber = '5571993072172'; // Replace with actual WhatsApp number
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const areas = [
    {
        title: 'Audiência de custódia',
        description: 'Identificação técnica de ilegalidades com foco na liberdade. Atuação ágil e rigorosa, decisiva para converter fundamentos jurídicos em decisões favoráveis.',
    },
    {
        title: 'Prisão em flagrante',
        description: 'Audiência de custódia Identificação técnica de ilegalidades com foco na liberdade. Atuação ágil e rigorosa, decisiva para converter fundamentos jurídicos em decisões favoráveis.',
    },
    {
        title: 'Tribunal do Júri',
        description: 'Defesa técnica e estratégica perante o Conselho de Sentença. Atuação rigorosa e humanizada, essencial para garantir a justiça e a liberdade no Tribunal do Júri.',
    },
    {
        title: 'Lei de drogas',
        description: 'Defesa técnica especializada com foco em desclassificações e garantias processuais. Atuação estratégica e rigorosa para assegurar a liberdade frente às acusações da Lei de Drogas.',
    },
    {
        title: 'Organização criminosa',
        description: 'Defesa especializada em crimes de organização criminosa com foco na proteção da liberdade. Atuação técnica e rigorosa para assegurar o devido processo legal e a justiça.',
    },
    {
        title: 'Violência doméstica',
        description: 'Atuação técnica e humanizada em processos de violência doméstica e medidas protetivas. Rigor estratégico decisivo para garantir o equilíbrio processual e a proteção de direitos.',
    },
    {
        title: 'Direito do Consumidor',
        description: 'Atuação técnica para assegurar indenizações justas e restabelecer o equilíbrio nas suas relações de consumo.',
    },
    {
        title: 'Direito da Família',
        description: 'Atuação em solucionar conflitos com sensibilidade e garantir a segurança jurídica do patrimônio e das relações.',
    },
];

export default function AreasOfActivity() {
    return (
        <section className="bg-[#B29671] py-16 lg:py-24" id="areas">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Title */}
                <div className="flex items-center justify-center mb-[32px]">
                    {/* Left Arrow */}
                    <div className="w-[100px] mr-[144px] flex items-center">
                        <Image
                            src="/arrow-left.svg"
                            alt=""
                            width={107}
                            height={12}
                            className="object-contain w-full h-auto"
                        />
                    </div>

                    <h2
                        className="h-[64px] flex items-center text-3xl lg:text-4xl xl:text-5xl text-[#FFFFFF] font-normal"
                        style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                    >
                        ÁREAS DE ATUAÇÃO
                    </h2>

                    {/* Right Arrow */}
                    <div className="w-[100px] ml-[144px] flex items-center">
                        <Image
                            src="/arrow-rigth.svg"
                            alt=""
                            width={107}
                            height={12}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[42px] mb-12 justify-items-center lg:justify-items-start">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[371px] h-[278px] bg-[#B29671] border border-[#FAE8D4] rounded-lg p-6 flex flex-col"
                        >
                            <h3
                                className="h-[32px] text-lg lg:text-xl text-[#1E1919] font-normal mb-[12px] flex items-center"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                {area.title}
                            </h3>
                            <p
                                className="h-[24px] text-sm lg:text-base text-[#FFFFFF] font-normal"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-[#FFFFFF] px-8 py-3 text-sm lg:text-base font-normal text-[#A87246] border border-[#b29671] whitespace-nowrap"
                        style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                    >
                        ENTRE EM CONTATO
                    </a>
                </div>
            </div>
        </section>
    );
}
