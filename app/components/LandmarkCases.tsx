import Image from 'next/image';

const cases = [
    {
        image: '/enterview-one.png',
        description: 'Defesa, de forma preventiva, em sede de medida protetiva de urgência. A pessoa estava sendo acusada de ter cinco medidas protetivas em seu ambiente de trabalho.',
    },
    {
        image: '/enterview-two.png',
        description: 'A atuação em sede de assistente de acusação na defesa da vítima, que foi atropelada por um motorista que estava embriagado em alta velocidade. Sendo esse um caso de grande na capital Salvador.',
    },
    {
        image: '/enterview-three.png',
        description: 'Parecer jurídico sobre esse caso em que uma turista cometeu racismo com uma trabalhadora no centro histórico de Salvador.',
    },
];

export default function LandmarkCases() {
    return (
        <section className="bg-[#B29671] min-h-[644px] lg:h-[644px] py-12 sm:py-16 lg:py-24" id="casos">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Title */}
                <div className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-[32px]">
                    {/* Left Arrow */}
                    <div className="hidden sm:flex w-[50px] sm:w-[80px] lg:w-[100px] mr-4 sm:mr-8 lg:mr-[144px] items-center">
                        <Image
                            src="/arrow-left.svg"
                            alt=""
                            width={107}
                            height={12}
                            className="object-contain w-full h-auto"
                        />
                    </div>

                    <h2
                        className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#FFFFFF] font-normal min-h-[40px] sm:min-h-[50px] lg:h-[64px] flex items-center text-center px-4"
                        style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
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
                        />
                    </div>
                </div>

                {/* Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 justify-items-center">
                    {cases.map((caseItem, index) => (
                        <div key={index} className="flex flex-col w-full max-w-[334px]">
                            {/* Interview Image */}
                            <div className="relative w-full aspect-[334/184]">
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
                            <div className="w-full aspect-[334/184] bg-[#FFFFFF] p-3 sm:p-4 flex items-center">
                                <p
                                    className="text-xs sm:text-sm lg:text-base text-[#B29671] font-normal leading-relaxed"
                                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                                >
                                    {caseItem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
