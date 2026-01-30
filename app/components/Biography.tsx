import Image from 'next/image';

const whatsappNumber = '5571993072172'; // Replace with actual WhatsApp number
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Biography() {
    return (
        <section className="bg-[#FFFFFF] min-h-[827px] lg:h-[827px] flex items-end py-6 sm:py-8 lg:py-0" id="sobre">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Left Side - Portrait */}
                    <div className="flex justify-center lg:justify-start items-end order-2 lg:order-1">
                        <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:w-[499px] h-[350px] sm:h-[450px] md:h-[550px] lg:h-[754px] flex items-end">
                            <Image
                                src="/biography-photo.png"
                                alt="Lalesca Moreira"
                                fill
                                className="object-contain object-bottom"
                                quality={75}
                                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 499px"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="flex flex-col pt-2 sm:pt-4 lg:pt-6 order-1 lg:order-2">
                        {/* Main Title */}
                        <h2
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1e1919] font-normal mb-3 sm:mb-4 lg:mb-[22px] flex items-center"
                            style={{ fontFamily: 'var(--font-marcellus), serif' }}
                        >
                            LALESCA MOREIRA
                        </h2>

                        {/* Subtitle */}
                        <p
                            className="text-xs sm:text-sm md:text-base lg:text-lg text-[#1e1919] font-normal mb-4 sm:mb-6 lg:mb-[54px] flex items-center"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ESPECIALISTA EM DIREITO PENAL
                        </p>

                        {/* Description */}
                        <div className="mb-5 sm:mb-6 lg:mb-[54px] space-y-3 sm:space-y-4 lg:space-y-[8px]">
                            <p
                                className="text-sm sm:text-base text-[#1e1919] font-normal leading-relaxed"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                Minha trajetória no Direito começou em um curso preparatório para as carreiras policiais. Ao estudar as disciplinas de Direito Penal e Direito Constitucional, compreendi que minha verdadeira vocação era atuar na defesa, e não no ataque.
                            </p>
                            <p
                                className="text-sm sm:text-base text-[#1e1919] font-normal leading-relaxed"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                Graduanda em Direito pela Unijorge, sou especialista em Direito Penal e Processo Penal pela Olga Mettig e pós-graduanda em Audiência de Custódia e Tribunal do Júri. Minha atuação é pautada por uma visão moderna e tecnológica, que permite entregar mais agilidade e estratégia do que a advocacia tradicional. Em vez de barreiras físicas e comunicação lenta, utilizo gestão processual digital, acompanhamento em tempo real e atendimento acessível, garantindo respostas rápidas e decisões precisas.
                            </p>
                            <p
                                className="text-sm sm:text-base text-[#1e1919] font-normal leading-relaxed"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                Em apenas dois anos de atuação, essa metodologia possibilitou a condução de mais de 200 processos, inclusive em outros estados, sem perder a proximidade com o cliente. Para mim, a tecnologia não afasta; ela humaniza, organiza e fortalece a defesa.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-[#FFFFFF] px-6 sm:px-8 py-3 sm:py-2.5 text-xs sm:text-sm lg:text-base font-normal text-[#1e1919] border border-[#1E1919] whitespace-nowrap w-fit min-h-[44px] sm:min-h-0 transition-opacity hover:opacity-90 active:opacity-75"
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
