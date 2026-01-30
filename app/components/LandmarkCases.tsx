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
        <section className="bg-[#B29671] h-[644px] py-16 lg:py-24" id="casos">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Title */}
                <div className="flex items-center justify-center mb-[32px]">
                    {/* Left Arrow */}
                    <div className="w-[100px] mr-[144px] flex items-center">
                        <Image
                            src="/arrow-left.svg"
                            alt=""
                            width={107}
                            height={12}
                            className="object-contain w-full h-auto"
                        />
                    </div>

                    <h2
                        className="h-[64px] flex items-center text-3xl lg:text-4xl xl:text-5xl text-[#FFFFFF] font-normal"
                        style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                    >
                        CASOS DE REPERCUÇÃO
                    </h2>

                    {/* Right Arrow */}
                    <div className="w-[100px] ml-[144px] flex items-center">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {cases.map((caseItem, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Interview Image */}
                            <div className="relative w-[334px] h-[184px]">
                                <Image
                                    src={caseItem.image}
                                    alt={`Caso ${index + 1}`}
                                    fill
                                    className="object-cover object-center"
                                    quality={90}
                                />
                            </div>

                            {/* Description */}
                            <div className="w-[334px] h-[184px] bg-[#FFFFFF] p-4 flex items-center">
                                <p
                                    className="text-sm lg:text-base text-[#B29671] font-normal leading-relaxed"
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
