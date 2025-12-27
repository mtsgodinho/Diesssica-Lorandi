
import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Calendar, 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  Instagram,
  MapPin,
  Maximize2,
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// --- Constants & Data ---

const WHATSAPP_LINK = "https://call.whatsapp.com/voice/7cBoKMd5oLPayKVUaiaYME";
const EXPERT_NAME = "Diesssica Lorandi";
const EXPERT_TITLE = "Especialista em Endodontia e Ortodontia • Harmonização facial • Odontologia do Sono";
const ADDRESS = "Av. Pedro Adams Filho, 4710 - Patria Nova, Novo Hamburgo 93410-148";

const IMAGES = {
  hero: "https://i.imgur.com/KfBHrpB.png",
  authority: [
    "https://i.imgur.com/xiEYlIN.png",
    "https://i.imgur.com/6NK5XR8.png"
  ],
  results: [
    "https://i.imgur.com/NPN7bmd.png",
    "https://i.imgur.com/OVJOHlL.png",
    "https://i.imgur.com/eEBj2s4.png",
    "https://i.imgur.com/QtOE1k8.png",
    "https://i.imgur.com/W5vjWUc.png",
    "https://i.imgur.com/KotXmzz.png",
    "https://i.imgur.com/TwfT1Ge.png"
  ],
  career: [
    "https://i.imgur.com/XVA4VCw.png",
    "https://i.imgur.com/jqPYB0e.png",
    "https://i.imgur.com/lLBcqGB.png",
    "https://i.imgur.com/5XCLXj6.png",
    "https://i.imgur.com/Jx0Hd2Y.png"
  ]
};

// --- Components ---

const Button = ({ children, className = "", onClick }: { children?: React.ReactNode, className?: string, onClick?: () => void }) => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 text-center leading-tight uppercase tracking-wide ${className}`}
  >
    {children}
  </a>
);

const Lightbox = ({ image, onClose }: { image: string, onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
    <button className="absolute top-6 right-6 text-white" onClick={onClose}>
      <X size={32} />
    </button>
    <img src={image} alt="Resultado" className="max-w-full max-h-full object-contain" />
  </div>
);

const SectionTitle = ({ children, subtitle }: { children?: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-3">{children}</h2>
    {subtitle && <p className="text-[#666] text-sm md:text-base max-w-lg mx-auto leading-relaxed">{subtitle}</p>}
    <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-6"></div>
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const careerCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCareer = (direction: 'left' | 'right') => {
    if (careerCarouselRef.current) {
      const { scrollLeft, clientWidth } = careerCarouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      careerCarouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#333] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO (Primeira Dobra) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-20 md:opacity-100">
          <img 
            src={IMAGES.hero} 
            alt="Dra. Diesssica Lorandi" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-start pt-12 md:pt-0">
          <div className="max-w-xl">
            <span className="inline-block py-1 px-3 bg-[#d4af37]/10 text-[#a68925] text-xs font-semibold rounded-full mb-6 uppercase tracking-widest">
              Excelência & Cuidado
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] leading-tight mb-6">
              Eu sou a Dra. <br/> <span className="italic">Diesssica Lorandi.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555] mb-10 leading-relaxed font-light">
              Especialista em transformar sorrisos e resgatar a sua melhor versão através de uma odontologia de alto nível e harmonização facial personalizada.
            </p>
            
            <div className="flex flex-col items-start gap-3">
              <Button className="w-full md:w-auto text-sm md:text-base">
                <Phone size={20} />
                Ligar agora para agendar consulta grátis
              </Button>
              <p className="text-xs text-[#999] uppercase tracking-tighter w-full text-center md:text-left">
                * Vagas limitadas para avaliação sem compromisso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOCO QUEM SOU EU */}
      <section className="py-24 bg-[#f4f1ea]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                  src={IMAGES.authority[0]} 
                  alt="Dra. Diesssica Lorandi Atendimento" 
                  className="rounded-2xl shadow-2xl grayscale-[20%]"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border-4 border-[#d4af37] rounded-2xl -z-10 hidden md:block"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-serif text-[#1a1a1a]">Compromisso com o seu bem-estar</h2>
              <div className="space-y-4 text-[#555] leading-relaxed">
                <p>
                  Minha missão vai além da clínica. Eu acredito que cada paciente é único e merece um atendimento que une ciência, tecnologia e, acima de tudo, humanidade.
                </p>
                <p>
                  Com especializações em áreas complexas como Endodontia e Ortodontia, além de dominar a Harmonização Facial e Odontologia do Sono, ofereço um cuidado 360º para que você durma melhor, sorria mais e se sinta bem com o espelho.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 gap-4 pt-4">
                {[
                  "Avaliação individualizada e sem pressa",
                  "Domínio das técnicas mais modernas do mercado",
                  "Foco total na experiência e conforto do paciente",
                  "Resultados naturais e harmônicos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#1a1a1a]">
                    <CheckCircle2 className="text-[#d4af37]" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLOCO RESULTADOS REAIS (CARROSSEL) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Deslize para ver as transformações reais de pacientes que confiaram no meu trabalho.">
            Resultados Reais
          </SectionTitle>
        </div>

        <div className="relative group">
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 px-6 md:px-[15%] pb-8">
            {IMAGES.results.map((img, i) => (
              <div 
                key={i} 
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] snap-center relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-xl"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-full">
                    <Maximize2 size={16} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold">Toque para ampliar</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {IMAGES.results.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <p className="mt-12 text-xs text-[#999] italic">
            *Resultados individuais podem variar. Fotos autorizadas para fins informativos de saúde e estética.
          </p>
        </div>
      </section>

      {/* 4. BLOCO POR QUE CONFIAR EM MIM */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Por que escolher o meu atendimento?</h2>
            <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="text-[#d4af37]" size={32} />,
                title: "Atendimento Comigo",
                text: "Você não será atendido por assistentes genéricos. Todo o planejamento e execução são feitos pessoalmente por mim."
              },
              {
                icon: <ShieldCheck className="text-[#d4af37]" size={32} />,
                title: "Segurança Total",
                text: "Utilizo os melhores materiais e protocolos de biossegurança do mercado para garantir a sua tranquilidade."
              },
              {
                icon: <Sparkles className="text-[#d4af37]" size={32} />,
                title: "Clareza e Honestidade",
                text: "Explico cada passo do tratamento de forma simples, sem termos técnicos confusos, para que você saiba exatamente o que esperar."
              },
              {
                icon: <Calendar className="text-[#d4af37]" size={32} />,
                title: "Sua Primeira Consulta é Grátis",
                text: "Quero que você conheça meu trabalho e receba uma orientação profissional honesta antes de tomar qualquer decisão."
              }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-medium mb-4">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-[#d4af37]/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-8 leading-relaxed">
            Ainda tem dúvidas se este é o momento certo? <br className="hidden md:block"/> 
            Ligue agora e agende sua conversa.
          </h2>
          <Button>
            <Phone size={20} />
            Ligar para a Dra. agora
          </Button>
        </div>
      </section>

      {/* 6. BLOCO COMO FUNCIONA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Processo simples e descomplicado para você começar sua jornada.">
            Como funciona a primeira consulta?
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Ligação via WhatsApp",
                text: "Clique no botão e inicie uma chamada. Minha equipe ou eu mesma atenderemos para te ouvir."
              },
              {
                step: "02",
                title: "Agendamento de Horário",
                text: "Encontraremos o melhor dia e horário na minha agenda em Novo Hamburgo que se adapte à sua rotina."
              },
              {
                step: "03",
                title: "Avaliação Gratuita",
                text: "No dia marcado, faremos uma análise profunda e te entregarei um plano de ação completo, sem custos."
              }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="text-6xl font-serif text-[#d4af37]/20 absolute -top-8 left-1/2 -translate-x-1/2 -z-0">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-[#1a1a1a]">{item.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="inline-block py-2 px-6 border-2 border-[#d4af37] text-[#1a1a1a] font-bold rounded-full uppercase text-xs tracking-widest">
              Garantido: Gratuito e Sem Compromisso
            </p>
          </div>
        </div>
      </section>

      {/* 7. BLOCO MAIS PROVAS (BASTIDORES EM CARROSSEL COMPLETO COM SETAS) */}
      <section className="py-24 bg-[#f9f9f9] overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Conheça a infraestrutura e os momentos que marcam a excelência do meu atendimento.">
            Bastidores & Autoridade
          </SectionTitle>
        </div>

        <div className="relative group max-w-[1400px] mx-auto">
          {/* Setas de Navegação (Desktop) */}
          <button 
            onClick={() => scrollCareer('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/80 backdrop-blur hover:bg-[#d4af37] hover:text-white rounded-full shadow-lg transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scrollCareer('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/80 backdrop-blur hover:bg-[#d4af37] hover:text-white rounded-full shadow-lg transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={careerCarouselRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 px-6 md:px-[10%] pb-10"
          >
            {IMAGES.career.map((img, i) => (
              <div 
                key={i} 
                className="min-w-[80%] md:min-w-[40%] snap-center h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 relative group/item"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Bastidores ${i + 1}`} 
                  className="w-full h-full object-cover grayscale-[15%] group-hover/item:grayscale-0 transition-all duration-700 hover:scale-110 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover/item:opacity-100 transition-opacity">
                  <span className="text-xs uppercase tracking-widest font-light border-l-2 border-[#d4af37] pl-3 italic">
                    {i === 0 ? "Tecnologia de ponta" : i === 1 ? "Cuidado humanizado" : i === 2 ? "Excelência clínica" : i === 3 ? "Ambiente exclusivo" : "Diferencial Premium"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicadores de Carrossel */}
          <div className="flex justify-center gap-3 mt-2">
            {IMAGES.career.map((_, i) => (
              <div key={i} className="w-10 h-1 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full bg-[#d4af37]/30"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f4f1ea] opacity-40"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-8 leading-tight">
            Pronto para conquistar o sorriso que você sempre sonhou?
          </h2>
          <p className="text-lg md:text-xl text-[#555] mb-12 max-w-2xl mx-auto font-light">
            Não deixe sua autoestima para depois. Clique abaixo e ligue para garantir sua vaga para uma avaliação gratuita comigo agora mesmo.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button className="w-full md:w-auto px-12 py-5 text-lg">
              Ligar e agendar consulta gratuita
            </Button>
            <div className="flex items-center gap-2 text-[#a68925]">
              <MapPin size={18} />
              <span className="text-xs md:text-sm font-medium tracking-wide">NOVO HAMBURGO, PATRIA NOVA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPE SIMPLES */}
      <footer className="py-16 bg-[#1a1a1a] text-white border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-signature text-[#d4af37]">Dra. Diesssica Lorandi</h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest leading-loose">
              {EXPERT_TITLE} <br/>
              RT - CRO/RS 0000
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-2 text-sm text-gray-500 italic">
            <p>{ADDRESS}</p>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://instagram.com/dradiessicalorandi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#d4af37] transition-colors flex items-center gap-2 text-sm"
            >
              <Instagram size={20} />
              @dradiessicalorandi
            </a>
          </div>

          <div className="pt-8 border-t border-white/5">
            <p className="text-[10px] text-gray-600 uppercase tracking-tighter">
              &copy; {new Date().getFullYear()} Dra. Diesssica Lorandi. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[80]">
        <Button className="w-full shadow-2xl py-5">
          <Phone size={20} />
          Ligar e Agendar Agora
        </Button>
      </div>

    </div>
  );
}
