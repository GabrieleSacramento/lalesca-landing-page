'use client';

import Image from 'next/image';
import Link from 'next/link';

const whatsappNumber = '5571993072172';
const whatsappMessage = 'Estou vindo da sua landing page, quenga';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Hero() {
    return (
        <section className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-[#FFFFFF]">
            {/* Mobile: Portrait Image as Background */}
            <div className="lg:hidden relative w-full min-h-screen">
                <Image
                    src="/lalesca-mobile.png"
                    alt="Lalesca Moreira"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={75}
                    sizes="100vw"
                    loading="eager"
                />

                {/* Mobile Content - Overlay on Image */}
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-8 bg-gradient-to-b from-transparent via-transparent to-[#e8d4b8]">
                    {/* Professional Title */}
                    <p
                        className="text-white uppercase tracking-wide mb-4 leading-tight"
                        style={{
                            fontFamily: 'var(--font-archivo), sans-serif',
                            fontSize: 'clamp(10px, 2vw, 14px)',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        ADVOGADA ESPECIALISTA EM DIREITO PENAL
                    </p>

                    {/* Main Name - Image */}
                    <div className="relative w-full max-w-md h-[120px] sm:h-[150px] mb-4">
                        <Image
                            src="/lawyer-name.png"
                            alt="Lalesca Moreira"
                            fill
                            className="object-contain object-center"
                            quality={75}
                            sizes="(max-width: 640px) 100vw, 512px"
                            loading="eager"
                        />
                    </div>

                    {/* Biography */}
                    <p
                        className="text-[#FFFFFF] leading-relaxed max-w-lg mb-6"
                        style={{
                            fontFamily: 'var(--font-archivo), sans-serif',
                            fontSize: 'clamp(12px, 2vw, 16px)'
                        }}
                    >
                        Me apaixonei pelo direito em um cursinho preparatório para as carreiras policiais. Quando estudando as disciplinas de direito penal e direito constitucional eu vi que nasci para atuar na defesa e não no ataque.
                    </p>

                    {/* CTA Button */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-[#BF9874] px-8 py-3 text-white whitespace-nowrap transition-opacity hover:opacity-90 active:opacity-75"
                        style={{
                            fontFamily: 'var(--font-archivo), sans-serif',
                            fontSize: 'clamp(14px, 2vw, 18px)',
                            fontWeight: 500
                        }}
                    >
                        ENTRE EM CONTATO
                    </a>
                </div>
            </div>

            {/* Desktop: Background Portrait Image */}
            <div className="hidden lg:block absolute inset-0 z-0">
                <Image
                    src="/lalesca-portrait.png"
                    alt="Lalesca Moreira"
                    fill
                    className="object-cover object-right"
                    priority
                    quality={75}
                    sizes="100vw"
                    loading="eager"
                />
            </div>

            {/* Desktop Content Overlay */}
            <div className="hidden lg:block relative z-10 w-full h-full flex items-center px-12 py-20">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center h-full">
                    {/* Text Content */}
                    <div className="w-full max-w-none text-left flex flex-col justify-center h-full">
                        {/* Professional Title */}
                        <p
                            className="text-xs sm:text-sm text-[#b29671] uppercase tracking-wide mb-[22px] leading-tight"
                            style={{
                                fontFamily: 'var(--font-archivo), sans-serif',
                                fontSize: 'clamp(9px, 1.5vw, 14px)'
                            }}
                        >
                            ADVOGADA ESPECIALISTA EM DIREITO PENAL
                        </p>

                        {/* Main Name */}
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-none mb-[22px]"
                            style={{
                                fontFamily: 'var(--font-abel), sans-serif',
                                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8))',
                                WebkitFilter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8))',
                                letterSpacing: '0.05em',
                                color: '#FFFFFF',
                                fontSize: 'clamp(20px, 4vw, 80px)'
                            }}
                        >
                            LALESCA MOREIRA
                        </h1>

                        {/* Biography */}
                        <div className="relative mb-[140px]">
                            <p
                                className="text-sm sm:text-base text-white leading-relaxed max-w-[90%] relative z-10 drop-shadow-lg"
                                style={{
                                    fontFamily: 'var(--font-archivo), sans-serif',
                                    fontSize: 'clamp(11px, 1.5vw, 16px)'
                                }}
                            >
                                Me apaixonei pelo direito em um cursinho preparatório para as carreiras policiais. Quando estudando as disciplinas de direito penal e direito constitucional eu vi que nasci para atuar na defesa e não no ataque.
                            </p>

                            {/* Lawyer name image between Biography and CTA Buttons - Desktop only */}
                            <div className="absolute top-full left-0 w-full h-[209px] opacity-50 z-0">
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
                        <div className="flex flex-col sm:flex-row gap-[54px] relative z-10">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md bg-[#a87246] px-6 py-2.5 text-sm font-normal text-white whitespace-nowrap transition-opacity hover:opacity-90 active:opacity-75"
                                style={{
                                    fontFamily: 'var(--font-archivo), sans-serif',
                                    fontSize: 'clamp(12px, 1.5vw, 14px)'
                                }}
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
                                className="inline-flex items-center justify-center rounded-md bg-[#fae8d4] px-6 py-2.5 text-sm font-normal text-[#a87246] border border-[#a87246] whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
                                style={{
                                    fontFamily: 'var(--font-archivo), sans-serif',
                                    fontSize: 'clamp(12px, 1.5vw, 14px)'
                                }}
                            >
                                NOSSOS SERVIÇOS
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Empty, portrait is visible in background (Desktop only) */}
                    <div className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
}
