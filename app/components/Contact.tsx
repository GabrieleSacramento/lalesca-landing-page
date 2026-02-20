import { MapPin } from 'lucide-react';

const whatsappNumber = '5571993072172';
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Contact() {
    return (
        <section className="bg-[#FFFFFF] min-h-[796px] lg:h-[796px] flex items-center py-8 lg:py-[64px]" id="contato">
            <div className="mx-auto max-w-7xl w-full px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
                    {/* Left Side - All Content */}
                    <div className="flex flex-col">
                        {/* Heading */}
                        <h2
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#B29671] font-normal mb-4 sm:mb-6 md:mb-8"
                            style={{ 
                                fontFamily: 'var(--font-archivo), sans-serif',
                                fontSize: 'clamp(16px, 2.5vw, 30px)'
                            }}
                        >
                            Onde estamos
                        </h2>

                        {/* Address Section */}
                        <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                            {/* Map Pin Icon */}
                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#B29671] flex-shrink-0 mt-1" />

                            {/* Address Details */}
                            <div className="flex flex-col text-left">
                                <p
                                    className="text-xs sm:text-sm md:text-base lg:text-lg text-[#1e1919] font-normal"
                                    style={{ 
                                        fontFamily: 'var(--font-archivo), sans-serif',
                                        fontSize: 'clamp(11px, 1.5vw, 18px)'
                                    }}
                                >
                                    Rua alceu amoroso lima, 314
                                </p>
                                <p
                                    className="text-xs sm:text-sm md:text-base lg:text-lg text-[#1e1919] font-normal"
                                    style={{ 
                                        fontFamily: 'var(--font-archivo), sans-serif',
                                        fontSize: 'clamp(11px, 1.5vw, 18px)'
                                    }}
                                >
                                    Edificio antares empresarial, sala 412
                                </p>
                                <p
                                    className="text-xs sm:text-sm md:text-base lg:text-lg text-[#1e1919] font-normal"
                                    style={{ 
                                        fontFamily: 'var(--font-archivo), sans-serif',
                                        fontSize: 'clamp(11px, 1.5vw, 18px)'
                                    }}
                                >
                                    Caminho das árvores, Salvador/Ba, CEP: 41820-770
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-[#B29671] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-2.5 text-[11px] sm:text-xs md:text-sm lg:text-base font-normal text-white whitespace-nowrap w-fit lg:ml-8 min-h-[40px] sm:min-h-[44px] md:min-h-0 transition-opacity hover:opacity-90 active:opacity-75"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ENTRE EM CONTATO
                        </a>
                    </div>

                    {/* Right Side - Map */}
                    <div className="w-full h-full order-first lg:order-last">
                        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d-38.4!3d-13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716037ca23ca5b5%3A0x0!2zQ2FtaW5obyBkYXMgw6Fydm9yZXMsIFNhbHZhZG9yIC0gQkEsIDQxODIwLTc3MA!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização - Rua alceu amoroso lima, 314, Caminho das árvores, Salvador/BA"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
