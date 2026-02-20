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
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {qualifications.map((qualification, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start"
                        >
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[65px]">
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
                            <div className="flex flex-col">
                                <p
                                    className="text-sm sm:text-[15px] lg:text-[16px] text-[#1e1919] font-normal mb-1 sm:mb-[4px]"
                                    style={{ 
                                        fontFamily: 'var(--font-archivo), sans-serif',
                                        fontSize: 'clamp(11px, 1.5vw, 16px)'
                                    }}
                                >
                                    {qualification.title}
                                </p>
                                <p
                                    className="text-sm sm:text-[15px] lg:text-[16px] text-[#808080] font-normal"
                                    style={{ 
                                        fontFamily: 'var(--font-archivo), sans-serif',
                                        fontSize: 'clamp(11px, 1.5vw, 16px)'
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
