import Image from 'next/image';

const whatsappNumber = '5571993072172'; // Replace with actual WhatsApp number
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Biography() {
    return (
        <section className="bg-[#FFFFFF] h-[827px] flex items-end" id="sobre">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Side - Portrait */}
                    <div className="flex justify-center lg:justify-start items-end">
                        <div className="relative w-[499px] h-[754px] flex items-end">
                            <Image
                                src="/biography-photo.png"
                                alt="Lalesca Moreira"
                                fill
                                className="object-contain object-bottom"
                                quality={90}
                                sizes="499px"
                            />
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="flex flex-col pt-8 lg:pt-12">
                        {/* Main Title */}
                        <h2
                            className="h-[60px] text-3xl lg:text-4xl xl:text-5xl text-[#1e1919] font-normal mb-[22px] flex items-center"
                            style={{ fontFamily: 'var(--font-marcellus), serif' }}
                        >
                            LALESCA MOREIRA
                        </h2>

                        {/* Subtitle */}
                        <p
                            className="h-[24px] text-base lg:text-lg text-[#1e1919] font-normal mb-[54px] flex items-center"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ESPECIALISTA EM DIREITO PENAL
                        </p>

                        {/* Description */}
                        <div className="mb-[54px] space-y-[8px]">
                            <p
                                className="text-sm lg:text-base text-[#1e1919] font-normal leading-relaxed"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                Minha trajetória no Direito começou em um curso preparatório para as carreiras policiais. Ao estudar as disciplinas de Direito Penal e Direito Constitucional, compreendi que minha verdadeira vocação era atuar na defesa, e não no ataque.
                            </p>
                            <p
                                className="text-sm lg:text-base text-[#1e1919] font-normal leading-relaxed"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                Graduanda em Direito pela Unijorge, sou especialista em Direito Penal e Processo Penal pela Olga Mettig e pós-graduanda em Audiência de Custódia e Tribunal do Júri. Minha atuação é pautada por uma visão moderna e tecnológica, que permite entregar mais agilidade e estratégia do que a advocacia tradicional. Em vez de barreiras físicas e comunicação lenta, utilizo gestão processual digital, acompanhamento em tempo real e atendimento acessível, garantindo respostas rápidas e decisões precisas.
                            </p>
                            <p
                                className="text-sm lg:text-base text-[#1e1919] font-normal leading-relaxed"
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
                            className="inline-flex items-center justify-center rounded-md bg-[#FFFFFF] px-8 py-3 text-sm lg:text-base font-normal text-[#1e1919] border border-[#1E1919] whitespace-nowrap w-fit"
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
