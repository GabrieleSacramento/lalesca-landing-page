import Image from 'next/image';

const whatsappNumber = '5571993072172';
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function CallToAction() {
    return (
        <section className="bg-[#FFFFFF] pt-4 pb-8 lg:py-[64px]">
            <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    {/* WhatsApp Icon */}
                    <div className="mb-6 sm:mb-8">
                        <Image
                            src="/whatsapp.svg"
                            alt="WhatsApp"
                            width={64}
                            height={64}
                            className="w-12 h-12 sm:w-16 sm:h-16"
                        />
                    </div>

                    {/* Title */}
                    <h2
                        className="mb-4 sm:mb-6 lg:mb-[24px] font-normal px-4"
                        style={{
                            fontFamily: 'var(--font-archivo), sans-serif',
                            fontSize: 'clamp(18px, 5vw, 64px)',
                            color: '#1F1919'
                        }}
                    >
                        Inicie agora seu atendimento!
                    </h2>

                    {/* Description */}
                    <p
                        className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-normal max-w-3xl mx-auto px-4"
                        style={{
                            fontFamily: 'var(--font-archivo), sans-serif',
                            fontSize: 'clamp(12px, 3vw, 32px)',
                            color: '#808080'
                        }}
                    >
                        O suporte de uma advocacia criminal qualificada é indispensável para garantir que seus direitos sejam respeitados e sua voz ouvida.
                    </p>

                    {/* CTA Button */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#BF9874] text-[#FFFFFF] whitespace-nowrap transition-opacity hover:opacity-90 active:opacity-75 px-6 sm:px-8 py-3 sm:py-4"
                        style={{
                            fontFamily: 'var(--font-archivo), sans-serif',
                            fontSize: 'clamp(14px, 2vw, 24px)',
                            fontWeight: 600,
                            borderRadius: '8px'
                        }}
                    >
                        ENTRE EM CONTATO
                    </a>
                </div>
            </div>
        </section>
    );
}
