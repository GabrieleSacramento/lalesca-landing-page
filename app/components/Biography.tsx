import Image from 'next/image';

const whatsappNumber = '5571993072172';
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Biography() {
    return (
        <section className="bg-[#B29671] min-h-[827px] lg:h-[827px] flex items-end pt-8 pb-0 lg:py-[0px]" id="sobre">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Left Side - Portrait */}
                    <div className="flex justify-center lg:justify-start items-end order-2 lg:order-1 pb-0 lg:pb-0">
                        <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:w-[600px] h-[420px] sm:h-[540px] md:h-[660px] lg:h-[900px] flex items-end">
                            <Image
                                src="/biography-photo.png"
                                alt="Lalesca Moreira"
                                fill
                                className="object-contain object-bottom"
                                quality={75}
                                sizes="(max-width: 640px) 340px, (max-width: 768px) 420px, (max-width: 1024px) 480px, 600px"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="flex flex-col justify-end h-full order-1 lg:order-2 pb-8 lg:pb-[64px]">
                        {/* Main Title */}
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1e1919] font-normal mb-2 sm:mb-3 md:mb-4 lg:mb-[22px]"
                            style={{
                                fontFamily: 'var(--font-abel), sans-serif',
                                fontSize: 'clamp(18px, 5vw, 60px)'
                            }}
                        >
                            LALESCA MOREIRA
                        </h2>

                        {/* Subtitle */}
                        <p
                            className="text-sm sm:text-base md:text-lg text-[#1e1919] font-normal mb-3 sm:mb-4 md:mb-6 lg:mb-[22px]"
                            style={{
                                fontFamily: 'var(--font-archivo), sans-serif',
                                fontSize: 'clamp(10px, 2vw, 18px)'
                            }}
                        >
                            ESPECIALISTA EM DIREITO PENAL
                        </p>

                        {/* Description */}
                        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-[22px] space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-[8px]">
                            <p
                                className="text-sm sm:text-base text-[#1e1919] font-normal leading-relaxed"
                                style={{
                                    fontFamily: 'var(--font-archivo), sans-serif',
                                    fontSize: 'clamp(10px, 1.5vw, 16px)'
                                }}
                            >
                                Minha trajetória no Direito começou em um curso preparatório para as carreiras policiais. Ao estudar as disciplinas de Direito Penal e Direito Constitucional, compreendi que minha verdadeira vocação era atuar na defesa, e não no ataque.
                            </p>
                            <p
                                className="text-sm sm:text-base text-[#1e1919] font-normal leading-relaxed"
                                style={{
                                    fontFamily: 'var(--font-archivo), sans-serif',
                                    fontSize: 'clamp(10px, 1.5vw, 16px)'
                                }}
                            >
                                Graduanda em Direito pela Unijorge, sou especialista em Direito Penal e Processo Penal pela Olga Mettig e pós-graduanda em Audiência de Custódia e Tribunal do Júri. Minha atuação é pautada por uma visão moderna e tecnológica, que permite entregar mais agilidade e estratégia do que a advocacia tradicional. Em vez de barreiras físicas e comunicação lenta, utilizo gestão processual digital, acompanhamento em tempo real e atendimento acessível, garantindo respostas rápidas e decisões precisas.
                            </p>
                            <p
                                className="text-sm sm:text-base text-[#1e1919] font-normal leading-relaxed"
                                style={{
                                    fontFamily: 'var(--font-archivo), sans-serif',
                                    fontSize: 'clamp(10px, 1.5vw, 16px)'
                                }}
                            >
                                Em apenas dois anos de atuação, essa metodologia possibilitou a condução de mais de 200 processos, inclusive em outros estados, sem perder a proximidade com o cliente. Para mim, a tecnologia não afasta; ela humaniza, organiza e fortalece a defesa.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-[#B29671] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-2.5 text-[11px] sm:text-xs md:text-sm lg:text-base font-normal text-[#1e1919] border border-[#1E1919] whitespace-nowrap w-fit min-h-[40px] sm:min-h-[44px] md:min-h-0 transition-opacity hover:opacity-90 active:opacity-75"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ENTRE EM CONTATO
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
