export default function CriminalDefense() {
    const description = "A advogada Lalesca Moreira acredita que por trás de cada processo existe uma história que merece ser ouvida e defendida com dignidade. Por isso, oferecemos uma advocacia criminal humanizada, onde a técnica jurídica caminha lado a lado com o acolhimento. Com sólida experiência em procedimentos de alta complexidade, como o Tribunal do Júri, e medidas urgentes, como Audiências de Custódia, garantimos uma gestão de defesa estratégica e sigilosa. Oferecemos ao constituinte um suporte jurídico integral, ágil e esclarecedor. Nosso pilar central é a proteção da liberdade e a preservação absoluta dos direitos do acusado.";

    // Words/phrases to highlight in color 1E1919
    const highlightPhrases = [
        'advogada Lalesca Moreira',
        'advocacia criminal humanizada',
        'acolhimento',
        'Tribunal do Júri',
        'e medidas urgentes, como Audiências de Custódia',
        'suporte jurídico integral'
    ];

    // Function to render description with highlighted phrases
    const renderDescription = (text: string) => {
        const parts: Array<{ text: string; highlight: boolean; start: number }> = [];
        
        // Find all highlight phrases and their positions
        highlightPhrases.forEach(phrase => {
            let searchIndex = 0;
            while (true) {
                const index = text.indexOf(phrase, searchIndex);
                if (index === -1) break;
                parts.push({ text: phrase, highlight: true, start: index });
                searchIndex = index + phrase.length;
            }
        });

        // Sort by position
        parts.sort((a, b) => a.start - b.start);

        // Build result array
        const result: Array<{ text: string; highlight: boolean }> = [];
        let lastIndex = 0;

        parts.forEach(part => {
            // Add text before this highlight
            if (part.start > lastIndex) {
                result.push({ text: text.substring(lastIndex, part.start), highlight: false });
            }
            // Add the highlight
            result.push({ text: part.text, highlight: true });
            lastIndex = part.start + part.text.length;
        });

        // Add remaining text
        if (lastIndex < text.length) {
            result.push({ text: text.substring(lastIndex), highlight: false });
        }

        // If no highlights found, return original text
        if (result.length === 0) {
            result.push({ text, highlight: false });
        }

        return result;
    };

    const descriptionParts = renderDescription(description);

    return (
        <section className="bg-[#FFFFFF] py-8 lg:py-[64px]">
            <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
                {/* Title */}
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-[#B29671] font-normal text-center mb-6 sm:mb-8 lg:mb-[46px]"
                    style={{ 
                        fontFamily: 'var(--font-abel), sans-serif',
                        fontSize: 'clamp(18px, 5vw, 64px)'
                    }}
                >
                    Defesa Criminal Estratégica e<br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>Humanizada
                </h2>

                {/* Description */}
                <p
                    className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl text-[#808080] font-normal leading-relaxed text-left max-w-5xl mx-auto"
                    style={{ 
                        fontFamily: 'var(--font-abel), sans-serif',
                        fontSize: 'clamp(12px, 3vw, 36px)'
                    }}
                >
                    {descriptionParts.map((part, index) => (
                        part.highlight ? (
                            <span key={index} className="text-[#1E1919] font-semibold">
                                {part.text}
                            </span>
                        ) : (
                            <span key={index}>{part.text}</span>
                        )
                    ))}
                </p>
            </div>
        </section>
    );
}
