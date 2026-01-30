'use client';

import Image from 'next/image';
import Link from 'next/link';

const whatsappNumber = '5511999999999'; // Replace with actual WhatsApp number
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Hero() {
    return (
        <section className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row items-stretch overflow-hidden">
            {/* Mobile: Portrait Image at Top */}
            <div className="relative w-full h-[50vh] lg:hidden">
                <Image
                    src="/lalesca-portrait.png"
                    alt="Lalesca Moreira"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={75}
                    sizes="100vw"
                    loading="eager"
                />
                {/* Blurred Lady Justice effect */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'url(/lady-justice-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(40px)',
                    }}
                />
                {/* Lawyer name overlay on image */}
                <div className="absolute bottom-0 left-0 w-full h-24 opacity-50 z-10">
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
                {/* Blurred Lady Justice effect on left */}
                <div
                    className="absolute inset-y-0 left-0 w-1/2 opacity-20"
                    style={{
                        backgroundImage: 'url(/lady-justice-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(40px)',
                    }}
                />
            </div>

            {/* Mobile: Content Section Below Image */}
            <div className="lg:hidden w-full bg-black text-white px-4 py-8 flex flex-col">
                {/* Professional Title */}
                <p
                    className="text-[9px] text-[#b29671] uppercase tracking-wide mb-2 leading-tight"
                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                >
                    ADVOGADA ESPECIALISTA EM DIREITO PENAL
                </p>

                {/* Main Name */}
                <h1
                    className="text-lg text-white font-normal italic leading-[1.05] mb-2"
                    style={{ fontFamily: 'var(--font-marcellus), serif' }}
                >
                    LALESCA MOREIRA
                </h1>

                {/* Biography */}
                <p
                    className="text-[11px] text-white leading-relaxed mb-6"
                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                >
                    Me apaixonei pelo direito em um cursinho preparatório para as carreiras policiais. Quando estudando as disciplinas de direito penal e direito constitucional eu vi que nasci para atuar na defesa e não no ataque.
                </p>

                {/* CTA Button */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-[#a87246] px-4 py-3 text-[11px] font-normal text-white whitespace-nowrap min-h-[44px] transition-opacity hover:opacity-90 active:opacity-75 w-full"
                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                >
                    ENTRE EM CONTATO
                </a>
            </div>

            {/* Desktop: Content Overlay */}
            <div className="hidden lg:flex relative z-10 w-full h-full items-center px-8 lg:px-12 xl:px-16 py-20">
                <div className="w-full grid lg:grid-cols-2 gap-0 items-center h-full">
                    {/* Left Side - Text Content */}
                    <div className="lg:w-full lg:max-w-none text-left flex flex-col justify-center h-full">
                        {/* Professional Title */}
                        <p
                            className="text-sm xl:text-base text-[#b29671] uppercase tracking-wide mb-[22px] leading-tight"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ADVOGADA ESPECIALISTA EM DIREITO PENAL
                        </p>

                        {/* Main Name */}
                        <h1
                            className="text-5xl xl:text-6xl text-white font-normal italic leading-none mb-[22px]"
                            style={{ fontFamily: 'var(--font-marcellus), serif' }}
                        >
                            LALESCA MOREIRA
                        </h1>

                        {/* Biography */}
                        <div className="relative mb-[140px]">
                            <p
                                className="text-base xl:text-lg text-white leading-relaxed max-w-[90%] relative z-10 drop-shadow-lg"
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
                    <div className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
}
