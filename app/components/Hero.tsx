'use client';

import Image from 'next/image';
import Link from 'next/link';

const whatsappNumber = '5511999999999'; // Replace with actual WhatsApp number
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background - Portrait image covering entire section */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/lalesca-portrait.png"
                    alt="Lalesca Moreira"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                    sizes="100vw"
                />
                {/* Blurred Lady Justice effect on left */}
                <div
                    className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-1/2 opacity-20"
                    style={{
                        backgroundImage: 'url(/lady-justice-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(40px)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 lg:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-20">
                <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-0 items-center h-full">
                    {/* Left Side - Text Content */}
                    <div className="lg:w-full lg:max-w-none text-left flex flex-col justify-center h-full">
                        {/* Professional Title */}
                        <p
                            className="text-xs sm:text-sm lg:text-base text-[#b29671] uppercase tracking-wide mb-3 sm:mb-[22px]"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ADVOGADA ESPECIALISTA EM DIREITO PENAL
                        </p>

                        {/* Main Name */}
                        <h1
                            className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-white font-normal italic leading-tight sm:leading-none mb-3 sm:mb-[22px] lg:whitespace-nowrap"
                            style={{ fontFamily: 'var(--font-marcellus), serif' }}
                        >
                            LALESCA MOREIRA
                        </h1>

                        {/* Biography */}
                        <div className="relative mb-16 sm:mb-24 lg:mb-[140px]">
                            <p
                                className="text-sm sm:text-base lg:text-lg text-white leading-relaxed max-w-full lg:max-w-[90%] relative z-10"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                Me apaixonei pelo direito em um cursinho preparatório para as carreiras policiais. Quando estudando as disciplinas de direito penal e direito constitucional eu vi que nasci para atuar na defesa e não no ataque.
                            </p>

                            {/* Lawyer name image between Biography and CTA Buttons */}
                            <div className="absolute top-full left-0 w-full h-32 sm:h-40 lg:h-[209px] opacity-30 sm:opacity-50 z-0 hidden sm:block">
                                <Image
                                    src="/lawyer-name.png"
                                    alt=""
                                    fill
                                    className="object-contain object-left"
                                    quality={90}
                                />
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-[54px] relative z-10">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md bg-[#a87246] px-4 sm:px-6 py-2 text-xs sm:text-sm font-normal text-white whitespace-nowrap"
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
                                className="inline-flex items-center justify-center rounded-md bg-[#fae8d4] px-4 sm:px-6 py-2 text-xs sm:text-sm font-normal text-[#a87246] border border-[#a87246] whitespace-nowrap cursor-pointer"
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
