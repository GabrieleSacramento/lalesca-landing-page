'use client';

import Image from 'next/image';
import Link from 'next/link';

const whatsappNumber = '5511999999999'; // Replace with actual WhatsApp number
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Portrait Image */}
            <div className="absolute inset-0 z-0">
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

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex items-center px-12 py-20">
                <div className="w-full grid grid-cols-2 gap-0 items-center h-full">
                    {/* Left Side - Text Content */}
                    <div className="w-full max-w-none text-left flex flex-col justify-center h-full">
                        {/* Professional Title */}
                        <p
                            className="text-sm text-[#b29671] uppercase tracking-wide mb-[22px] leading-tight"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ADVOGADA ESPECIALISTA EM DIREITO PENAL
                        </p>

                        {/* Main Name */}
                        <h1
                            className="text-5xl text-white font-normal leading-none mb-[22px]"
                            style={{
                                fontFamily: 'var(--font-abel), sans-serif',
                                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8))',
                                WebkitFilter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8))',
                                letterSpacing: '0.05em'
                            }}
                        >
                            LALESCA MOREIRA
                        </h1>

                        {/* Biography */}
                        <div className="relative mb-[140px]">
                            <p
                                className="text-base text-white leading-relaxed max-w-[90%] relative z-10 drop-shadow-lg"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                Me apaixonei pelo direito em um cursinho preparatório para as carreiras policiais. Quando estudando as disciplinas de direito penal e direito constitucional eu vi que nasci para atuar na defesa e não no ataque.
                            </p>

                            {/* Lawyer name image between Biography and CTA Buttons */}
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
                        <div className="flex flex-row gap-[54px] relative z-10">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md bg-[#a87246] px-6 py-2.5 text-sm font-normal text-white whitespace-nowrap transition-opacity hover:opacity-90 active:opacity-75"
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
                                className="inline-flex items-center justify-center rounded-md bg-[#fae8d4] px-6 py-2.5 text-sm font-normal text-[#a87246] border border-[#a87246] whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                NOSSOS SERVIÇOS
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Empty, portrait is visible in background */}
                    <div />
                </div>
            </div>
        </section>
    );
}
