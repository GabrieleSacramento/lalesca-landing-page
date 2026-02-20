import Image from 'next/image';

const qualifications = [
    {
        logo: '/unijorge.jpg',
        title: 'GRADUADA EM DIREITO',
        institution: 'Unijorge',
    },
    {
        logo: '/olga.jpeg',
        title: 'ESPECIALISTA EM DIREITO PENAL',
        institution: 'Olga Metting',
    },
    {
        logo: '/olga.jpeg',
        title: 'ESPECIALISTA EM PROCESSO PENAL',
        institution: 'Olga Metting',
    },
];

export default function Qualifications() {
    return (
        <section className="bg-white min-h-[100px] lg:h-[100px] flex items-center py-8 lg:py-[64px]">
            <div className="mx-auto max-w-7xl w-full px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-12">
                    {qualifications.map((qualification, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 justify-center md:justify-start"
                        >
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[68px] lg:h-[65px]">
                                    <Image
                                        src={qualification.logo}
                                        alt={qualification.institution}
                                        fill
                                        className="object-contain"
                                        quality={75}
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col min-w-0">
                                <p
                                    className="text-[#1e1919] font-normal mb-0.5 sm:mb-1 md:mb-[4px]"
                                    style={{
                                        fontFamily: 'var(--font-archivo), sans-serif',
                                        fontSize: 'clamp(8px, 1.2vw, 16px)',
                                        lineHeight: '1.2'
                                    }}
                                >
                                    {qualification.title}
                                </p>
                                <p
                                    className="text-[#808080] font-normal"
                                    style={{
                                        fontFamily: 'var(--font-archivo), sans-serif',
                                        fontSize: 'clamp(7px, 1vw, 16px)',
                                        lineHeight: '1.2'
                                    }}
                                >
                                    {qualification.institution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
