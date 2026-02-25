'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const cases = [
    {
        image: '/enterview-one.png',
        description: 'Defesa, de forma preventiva, em sede de medida protetiva de urgência. A pessoa estava sendo acusada de ter cinco medidas protetivas em seu ambiente de trabalho.',
    },
    {
        image: '/enterview-two.png',
        description: 'A atuação em sede de assistente de acusação na defesa da vítima, que foi atropelada por um motorista que estava embriagado em alta velocidade. Sendo esse um caso de grande na capital Salvador.',
        link: 'https://www.instagram.com/p/DTgKV38D5z0/',
    },
    {
        image: '/enterview-three.png',
        description: 'Parecer jurídico sobre esse caso em que uma turista cometeu racismo com uma trabalhadora no centro histórico de Salvador.',
        link: 'https://www.instagram.com/p/DT5i_6rEfix/',
    },
];

export default function LandmarkCases() {
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
        <section className="bg-[#FFFFFF] pb-4 pt-8 lg:py-[64px]" id="casos">
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
                        CASOS DE REPERCUÇÃO
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

                {/* Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[42px] justify-items-center">
                    {cases.map((caseItem, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardRefs.current[index] = el; }}
                            className="flex flex-col w-full max-w-[334px]"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animationFillMode: 'both',
                                opacity: 0
                            }}
                        >
                            {/* Interview Image */}
                            <div className="relative w-full aspect-[334/184]" style={{
                                borderRadius: '0',
                                boxShadow: '-4px 0px 4px rgba(178, 150, 113, 0.1)'
                            }}>
                                <Image
                                    src={caseItem.image}
                                    alt={`Caso ${index + 1}`}
                                    fill
                                    className="object-cover object-center"
                                    quality={75}
                                    sizes="(max-width: 768px) 100vw, 334px"
                                    loading="lazy"
                                />
                            </div>

                            {/* Description */}
                            <div className="w-full min-h-[184px] bg-[#FFFFFF] p-4 sm:p-5 md:p-6 flex flex-col items-start" style={{
                                borderRadius: '0',
                                boxShadow: '-6px 4px 4px rgba(178, 150, 113, 0.1)'
                            }}>
                                <p
                                    className={`text-[#B29671] font-normal leading-relaxed ${index !== 0 ? 'mb-3 sm:mb-4' : ''}`}
                                    style={{
                                        fontFamily: 'var(--font-abel), sans-serif',
                                        fontSize: 'clamp(13px, 2vw, 24px)',
                                        lineHeight: '29px'
                                    }}
                                >
                                    {caseItem.description}
                                </p>
                                {index !== 0 && (
                                    caseItem.link ? (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                window.open(caseItem.link, '_blank', 'noopener,noreferrer');
                                            }}
                                            className="text-[#B29671] font-normal hover:opacity-80 transition-opacity cursor-pointer inline-block text-left"
                                            style={{
                                                fontFamily: 'var(--font-abel), sans-serif',
                                                fontSize: 'clamp(13px, 2vw, 24px)',
                                                lineHeight: '29px',
                                                textDecoration: 'underline',
                                                position: 'relative',
                                                zIndex: 10,
                                                pointerEvents: 'auto',
                                                background: 'none',
                                                border: 'none',
                                                padding: 0
                                            }}
                                        >
                                            Saiba mais
                                        </button>
                                    ) : (
                                        <button
                                            className="text-[#B29671] font-normal hover:opacity-80 transition-opacity cursor-pointer"
                                            style={{
                                                fontFamily: 'var(--font-abel), sans-serif',
                                                fontSize: 'clamp(13px, 2vw, 24px)',
                                                lineHeight: '29px',
                                                textDecoration: 'underline'
                                            }}
                                        >
                                            Saiba mais
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
