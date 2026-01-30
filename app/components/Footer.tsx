export default function Footer() {
    return (
        <footer className="bg-[#B29671] h-[176px] flex items-center">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    {/* Copyright */}
                    <p
                        className="text-base lg:text-lg text-[#1e1919] font-normal"
                        style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                    >
                        © Dra. Lalesca Moreira. Todos os direitos reservados.
                        <br />
                        Desenvolvido por Gabriele Sacramento
                    </p>

                    {/* Disclaimer */}
                    <p
                        className="text-xs lg:text-sm text-[#1e1919] font-normal max-w-4xl"
                        style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
                    >
                        Este site não faz parte do Google nem do Facebook ou do Facebook Inc. Além disso, não oferecemos nenhum
                        tipo de serviço oficial do governo. Trabalhamos exclusivamente com serviços jurídicos.
                    </p>
                </div>
            </div>
        </footer>
    );
}
