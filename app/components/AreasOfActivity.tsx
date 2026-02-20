'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const whatsappNumber = '5571993072172';
const whatsappMessage = 'Estou vindo da sua landing page, quenga';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const areas = [
    {
        title: 'Audiência de custódia',
        description: 'Identificação técnica de ilegalidades com foco na liberdade. Atuação ágil e rigorosa, decisiva para converter fundamentos jurídicos em decisões favoráveis.',
    },
    {
        title: 'Prisão em flagrante',
        description: 'Audiência de custódia Identificação técnica de ilegalidades com foco na liberdade. Atuação ágil e rigorosa, decisiva para converter fundamentos jurídicos em decisões favoráveis.',
    },
    {
        title: 'Tribunal do Júri',
        description: 'Defesa técnica e estratégica perante o Conselho de Sentença. Atuação rigorosa e humanizada, essencial para garantir a justiça e a liberdade no Tribunal do Júri.',
    },
    {
        title: 'Lei de drogas',
        description: 'Defesa técnica especializada com foco em desclassificações e garantias processuais. Atuação estratégica e rigorosa para assegurar a liberdade frente às acusações da Lei de Drogas.',
    },
    {
        title: 'Organização criminosa',
        description: 'Defesa especializada em crimes de organização criminosa com foco na proteção da liberdade. Atuação técnica e rigorosa para assegurar o devido processo legal e a justiça.',
    },
    {
        title: 'Violência doméstica',
        description: 'Atuação técnica e humanizada em processos de violência doméstica e medidas protetivas. Rigor estratégico decisivo para garantir o equilíbrio processual e a proteção de direitos.',
    },
    {
        title: 'Direito do Consumidor',
        description: 'Atuação técnica para assegurar indenizações justas e restabelecer o equilíbrio nas suas relações de consumo.',
    },
    {
        title: 'Direito da Família',
        description: 'Atuação em solucionar conflitos com sensibilidade e garantir a segurança jurídica do patrimônio e das relações.',
    },
];

export default function AreasOfActivity() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = cardRefs.current.map((card) => {
            if (!card) return null;

            // Check if element is already visible (for desktop)
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                // Add animation class immediately if already visible
                setTimeout(() => {
                    card.classList.add('animate-slide-in-right');
                }, 100);
                return null;
            }

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-slide-in-right');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            observer.observe(card);
            return observer;
        });

        return () => {
            observers.forEach((observer) => {
                if (observer) {
                    observer.disconnect();
                }
            });
        };
    }, []);

    return (
        <section className="bg-[#FFFFFF] pb-4 pt-8 lg:py-[64px]" id="areas">
            <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
                {/* Main Title */}
                <div className="flex items-center justify-center mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]">
                    {/* Left Arrow */}
                    <div className="hidden sm:flex w-[50px] sm:w-[80px] lg:w-[100px] mr-4 sm:mr-8 lg:mr-[144px] items-center">
                        <Image
                            src="/arrow-left.svg"
                            alt=""
                            width={107}
                            height={12}
                            className="object-contain w-full h-auto"
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(67%) sepia(12%) saturate(1200%) hue-rotate(5deg) brightness(95%) contrast(90%)',
                                color: '#B29671'
                            }}
                        />
                    </div>

                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal flex items-center text-center px-2 sm:px-4"
                        style={{
                            fontFamily: 'var(--font-abel), sans-serif',
                            fontSize: 'clamp(18px, 5vw, 64px)',
                            color: '#B29671',
                            minHeight: 'clamp(22px, 5vw, 64px)'
                        }}
                    >
                        ÁREAS DE ATUAÇÃO
                    </h2>

                    {/* Right Arrow */}
                    <div className="hidden sm:flex w-[50px] sm:w-[80px] lg:w-[100px] ml-4 sm:ml-8 lg:ml-[144px] items-center">
                        <Image
                            src="/arrow-rigth.svg"
                            alt=""
                            width={107}
                            height={12}
                            className="object-contain w-full h-auto"
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(67%) sepia(12%) saturate(1200%) hue-rotate(5deg) brightness(95%) contrast(90%)',
                                color: '#B29671'
                            }}
                        />
                    </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[42px] mb-6 sm:mb-8 md:mb-12 justify-items-center">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardRefs.current[index] = el; }}
                            className="w-full max-w-[371px] min-h-[160px] sm:min-h-[180px] md:min-h-[220px] lg:h-[278px] bg-[#FFFFFF] p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animationFillMode: 'both',
                                borderRadius: '0',
                                boxShadow: '-4px 4px 4px rgba(0, 0, 0, 0.1)',
                                opacity: 0
                            }}
                        >
                            <h3
                                className="text-[#B29671] font-normal mb-[12px] flex items-center"
                                style={{
                                    fontFamily: 'var(--font-archivo), sans-serif',
                                    fontSize: 'clamp(16px, 2.5vw, 30px)',
                                    lineHeight: '23px',
                                    minHeight: 'clamp(18px, 2.5vw, 32px)'
                                }}
                            >
                                {area.title}
                            </h3>
                            <p
                                className="text-[#808080] font-normal flex-1"
                                style={{
                                    fontFamily: 'var(--font-abel), sans-serif',
                                    fontSize: 'clamp(13px, 2vw, 24px)',
                                    lineHeight: '29px'
                                }}
                            >
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-[#FFFFFF] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 text-[11px] sm:text-xs md:text-sm lg:text-base font-normal text-[#A87246] border border-[#b29671] whitespace-nowrap min-h-[40px] sm:min-h-[44px] transition-opacity hover:opacity-90 active:opacity-75"
                        style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                    >
                        ENTRE EM CONTATO
                    </a>
                </div>
            </div>
        </section>
    );
}
