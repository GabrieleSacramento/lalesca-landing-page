import Link from 'next/link';

const navigation = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
];

const whatsappNumber = '5511999999999'; // Replace with actual WhatsApp number
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Header() {
    return (
        <>
            {/* Top border line */}
            <div className="fixed top-0 left-0 right-0 h-[1px] bg-[#2F5F5F] z-50" />

            <header className="fixed top-[1px] left-0 right-0 z-50 bg-[#fae8d4]">
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <span
                                    className="text-2xl text-[#001025] font-normal italic leading-none"
                                    style={{ fontFamily: 'var(--font-marcellus), serif' }}
                                >
                                    LALESCA MOREIRA
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-center lg:space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-normal text-[#a87246] whitespace-nowrap"
                                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Buttons - Desktop */}
                        <div className="hidden lg:flex lg:items-center lg:gap-3 flex-shrink-0">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md bg-[#a87246] px-5 py-2 text-sm font-normal text-white whitespace-nowrap"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                ENTRE EM CONTATO
                            </a>
                            <Link
                                href="#areas"
                                className="rounded-md bg-[#fae8d4] px-5 py-2 text-sm font-normal text-[#a87246] border border-[#a87246] whitespace-nowrap"
                                style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                            >
                                NOSSOS SERVIÇOS
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
