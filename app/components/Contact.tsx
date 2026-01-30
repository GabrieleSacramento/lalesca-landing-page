import { MapPin } from 'lucide-react';

const whatsappNumber = '5571993072172';
const whatsappMessage = 'Olá, gostaria de agendar uma consulta.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Contact() {
    return (
        <section className="bg-[#FFFFFF] h-[796px] flex items-center" id="contato">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - All Content */}
                    <div className="flex flex-col">
                        {/* Heading */}
                        <h2
                            className="text-2xl lg:text-3xl text-[#B29671] font-normal mb-8"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            Onde estamos
                        </h2>

                        {/* Address Section */}
                        <div className="flex items-start gap-4 mb-8">
                            {/* Map Pin Icon */}
                            <MapPin className="w-8 h-8 text-[#B29671] flex-shrink-0 mt-1" />

                            {/* Address Details */}
                            <div className="flex flex-col text-left">
                                <p
                                    className="text-base lg:text-lg text-[#1e1919] font-normal"
                                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                                >
                                    Rua alceu amoroso lima, 314
                                </p>
                                <p
                                    className="text-base lg:text-lg text-[#1e1919] font-normal"
                                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                                >
                                    Edificio antares empresarial, sala 412
                                </p>
                                <p
                                    className="text-base lg:text-lg text-[#1e1919] font-normal"
                                    style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
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
                            className="inline-flex items-center justify-center rounded-md bg-[#B29671] px-8 py-3 text-sm lg:text-base font-normal text-white whitespace-nowrap w-fit ml-8"
                            style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                        >
                            ENTRE EM CONTATO
                        </a>
                    </div>

                    {/* Right Side - Map */}
                    <div className="hidden lg:block w-full h-full">
                        <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
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
