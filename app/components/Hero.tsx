'use client';

import Image from 'next/image';
import Link from 'next/link';

const whatsappNumber = '5511999999999'; // Replace with actual WhatsApp number
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Hero() {
    return (
        <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden">
            {/* Background - Portrait image covering entire section */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/lalesca-portrait.png"
                    alt="Lalesca Moreira"
                    fill
                    className="object-cover object-center lg:object-right"
                    priority
                    quality={75}
                    sizes="100vw"
                    loading="eager"
                />
                {/* Blurred Lady Justice effect on left */}
                <div
                    className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-1/2 opacity-10 sm:opacity-15 lg:opacity-20"
                    style={{
                        backgroundImage: 'url(/lady-justice-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(40px)',
                    }}
                />
                {/* Dark overlay for better text readability on mobile */}
                <div className="absolute inset-0 bg-black/20 lg:bg-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 lg:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
                <div className="w-full grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-0 items-center h-full">
                    {/* Left Side - Text Content */}
                    <div className="lg:w-full lg:max-w-none text-left flex flex-col justify-center h-full">
                        {/* Professional Title */}
                        <p
                            className="text-[10px] sm:text-xs lg:text-sm xl:text-base text-[#b29671] uppercase tracking-wide mb-2 sm:mb-3 lg:mb-[22px] leading-tight"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ADVOGADA ESPECIALISTA EM DIREITO PENAL
                        </p>

                        {/* Main Name */}
                        <h1
                            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-normal italic leading-[1.1] sm:leading-tight lg:leading-none mb-3 sm:mb-4 lg:mb-[22px]"
                            style={{ fontFamily: 'var(--font-marcellus), serif' }}
                        >
                            LALESCA MOREIRA
                        </h1>

                        {/* Biography */}
                        <div className="relative mb-8 sm:mb-12 lg:mb-[140px]">
                            <p
                                className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed max-w-full lg:max-w-[90%] relative z-10 drop-shadow-lg"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                Me apaixonei pelo direito em um cursinho preparatório para as carreiras policiais. Quando estudando as disciplinas de direito penal e direito constitucional eu vi que nasci para atuar na defesa e não no ataque.
                            </p>

                            {/* Lawyer name image between Biography and CTA Buttons */}
                            <div className="absolute top-full left-0 w-full h-24 sm:h-32 lg:h-[209px] opacity-20 sm:opacity-30 lg:opacity-50 z-0 hidden sm:block">
                                <Image
                                    src="/lawyer-name.png"
                                    alt=""
                                    fill
                                    className="object-contain object-left"
                                    quality={60}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-[54px] relative z-10">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md bg-[#a87246] px-5 sm:px-6 py-3 sm:py-2.5 text-xs sm:text-sm font-normal text-white whitespace-nowrap min-h-[44px] sm:min-h-0 transition-opacity hover:opacity-90 active:opacity-75"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                ENTRE EM CONTATO
                            </a>
                            <a
                                href="#areas"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('areas');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className="inline-flex items-center justify-center rounded-md bg-[#fae8d4] px-5 sm:px-6 py-3 sm:py-2.5 text-xs sm:text-sm font-normal text-[#a87246] border border-[#a87246] whitespace-nowrap cursor-pointer min-h-[44px] sm:min-h-0 transition-opacity hover:opacity-90 active:opacity-75"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                NOSSOS SERVIÇOS
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Empty, portrait is visible in background */}
                    <div className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
}
