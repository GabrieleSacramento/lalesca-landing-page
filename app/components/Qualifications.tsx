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
        <section className="bg-white h-[100px] flex items-center">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {qualifications.map((qualification, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4"
                        >
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <div className="relative w-[68px] h-[65px]">
                                    <Image
                                        src={qualification.logo}
                                        alt={qualification.institution}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col">
                                <p
                                    className="text-[16px] text-[#1e1919] font-normal mb-[4px] whitespace-nowrap"
                                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                                >
                                    {qualification.title}
                                </p>
                                <p
                                    className="text-[16px] text-[#808080] font-normal whitespace-nowrap"
                                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
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
