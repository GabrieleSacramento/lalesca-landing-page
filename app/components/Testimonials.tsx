import Image from 'next/image';

const whatsappNumber = '5571993072172';
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const testimonials = [
    {
        text: 'Passando para agradecer o excelente trabalho que vcs tem feito, obrigada por me orientar e me acalmar, vcs fizeram um excelente trabalho, que Deus abençoe a vida de vcs hoje e sempre, mais uma vez Obrigada por tudo, tenham uma boa noite.',
    },
    {
        text: 'Desejo, inclusive, agradecer pelo vosso desempenho na condução da defesa de meu filho. Muitíssimo obrigada! Deus, Ogum e Oxala abençoem todos vocês!',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#B29671] py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Top Section - Call to Action */}
                <div className="mb-12 sm:mb-16 lg:mb-24">
                    <div className="bg-[#FFFFFF] rounded-lg p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto text-center">
                        <h2
                            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#1e1919] font-normal mb-4 sm:mb-6 lg:mb-8"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            Você ou alguém próximo está sofrendo um processo criminal? Estamos prontos para atender você.
                        </h2>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-[#B29671] px-6 sm:px-8 py-3 sm:py-2.5 text-xs sm:text-sm lg:text-base font-normal text-white whitespace-nowrap mb-3 sm:mb-4 min-h-[44px] sm:min-h-0 transition-opacity hover:opacity-90 active:opacity-75"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ENTRE EM CONTATO
                        </a>
                        <p
                            className="text-xs sm:text-sm lg:text-base text-[#1e1919] font-normal"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            Sede - SA - Atendimento em todo o Brasil.
                        </p>
                    </div>
                </div>

                {/* Bottom Section - Feedbacks */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                    {/* Left Side - Title */}
                    <div className="flex flex-col">
                        <h3
                            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#FFFFFF] font-normal leading-tight mb-4"
                            style={{ fontFamily: 'var(--font-marcellus), serif' }}
                        >
                            FEEDBACKS
                            <br />
                            DOS NOSSOS CLIENTES
                        </h3>
                        {/* Decorative line with diamond */}
                        <div className="flex items-center gap-2">
                            <div className="h-[1px] bg-[#FFFFFF] flex-1" />
                            <div className="w-2 h-2 bg-[#FFFFFF] rounded-full" />
                            <div className="h-[1px] bg-[#FFFFFF] flex-1" />
                        </div>
                    </div>

                    {/* Right Side - Testimonials */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="border border-[#FAE8D4] rounded-lg p-4 sm:p-6 bg-transparent"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-3 sm:mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Image
                                            key={i}
                                            src="/Star.svg"
                                            alt=""
                                            width={16}
                                            height={16}
                                            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                        />
                                    ))}
                                </div>
                                {/* Testimonial Text */}
                                <p
                                    className="text-xs sm:text-sm lg:text-base text-[#FFFFFF] font-normal leading-relaxed"
                                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                                >
                                    {testimonial.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
