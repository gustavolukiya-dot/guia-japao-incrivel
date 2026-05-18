import { WhyAccordion } from "../components/WhyAccordion";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { MobileMenu } from "../components/MobileMenu";
const WA_LINK = "https://wa.me/819065931930";
const stats = [
  ["pin", "15+", "Destinos incríveis"],
  ["users", "500+", "Turistas satisfeitos"],
  ["clock", "20+", "Anos no Japão"],
];

const reasons = [
  {
    title: "+23 anos de Japão",
    text: "Vivência real no país, domínio da cultura local e repertório para transformar cada passeio em uma experiência fluida.",
  },
  {
    title: "Intérprete bilíngue",
    text: "Português e japonês lado a lado para reservas, deslocamentos, compras, restaurantes e situações do dia a dia.",
  },
  {
    title: "Espírito Omotenashi",
    text: "A hospitalidade japonesa aplicada ao cuidado com cada detalhe, do roteiro ao ritmo ideal para sua viagem.",
  },
];

const services = [
  {
    icon: "chat",
    title: "Consultoria Personalizada",
    text: "Conversa inicial para entender seus interesses, preferências e necessidades de viagem.",
    textMobile: "Planejamento personalizado para sua viagem",
  },
  {
    icon: "pin",
    title: "Roteiros Sob Medida",
    text: "Criamos roteiros exclusivos que combinam cultura, gastronomia, natureza e experiências autênticas.",
    textMobile: "Roteiros que combinam com sua vontade",
  },
  {
    icon: "car",
    title: "Transporte Particular",
    text: "Carro privativo com motorista para explorar o Japão no seu ritmo, sem depender de horários ou transporte público.",
    textMobile: "Carro privativo para explorar o Japão no seu ritmo",
  },
  {
    icon: "plane",
    title: "Transfer de Aeroportos",
    text: "Transporte com conforto e pontualidade para aeroportos, hotéis e portos pelo Japão inteiro.",
    textMobile: "Transporte pontual para aeroportos, hotéis e portos",
  },
  {
    icon: "calendar",
    title: "Auxílio em Reservas",
    text: "Ajuda com reservas de restaurantes, ingressos e experiências exclusivas no Japão.",
    textMobile: "Reservas de restaurantes, ingressos e shinkansen",
  },
  {
    icon: "shield",
    title: "Suporte Completo",
    text: "Disponibilidade antes, durante e depois da viagem para qualquer dúvida ou necessidade.",
    textMobile: "Suporte antes, durante e após a viagem",
  },
];

const destinations = [
  {
    image: "/image/shibuya.jpg",
    name: "Tóquio",
    description: "A capital do Japão moderno com templos antigos, shoppings futuristas e cultura vibrante.",
  },
  {
    image: "/image/fuji.jpg",
    name: "Monte Fuji",
    description: "O ícone do Japão: a sagrada montanha onde a natureza encontra a espiritualidade.",
  },
  {
      image: "/image/kyoto.jpeg",
    name: "Kyoto",
    description: "Templos milenares, geishas e a alma tradicional do Japão preservada no tempo.",
  },
  {
    image: "/image/osaka.jpg",
    name: "Osaka",
    description: "A cozinha do Japão: gastronomia incomparável, ruas vibrantes e energia contagiante.",
  },
  {
    image: "/image/hakone.jpg",
    name: "Hakone",
    description: "Onsen naturais, montanhas e vistas do Monte Fuji em um cenário de conto de fadas.",
  },
  {
    image: "/image/hiroshima.jpg",
    name: "Hiroshima",
    description: "História, paz e memória: um lugar que toca o coração de quem o visita.",
  },
  {
    image: "/image/kanazawa.jpg",
    name: "Kanazawa",
    description: "O Japão que o tempo preservou. Jardins de séculos, geishas e uma culinária única.",
  },
  {
    image: "/image/nara.jpg",
    name: "Nara",
    description: "Veados selvagens, templos históricos e atmosfera serena e mágica.",
  },
];

const guides = [
  {
    name: "Bruno",
    image: "/image/pai.jpg",
    imageClassName: "object-[center_42%]",
    text: [
      "Vivo no Japão há mais de 24 anos. Além de guia, trabalho como intérprete, o que me ajudou a entender a fundo a cultura e o jeito de ser dos japoneses.",
      "Depois de anos trabalhando em ambientes formais, percebi que o que realmente me dá prazer é ver o brilho no olho de quem descobre um detalhe curioso da cultura.",
      "Sou aquele guia que adora uma boa conversa, que faz questão de explicar os porquês de cada costume e que garante que você se sinta um convidado, e não apenas um turista!",
    ],
  },
  {
    name: "Jacque",
    image: "/image/mae.jpg",
    imageClassName: "object-[center_53%]",
    text: [
      "Viver no Japão há mais de 20 anos me deu muito mais do que a fluência no idioma; me deu uma nova forma de enxergar o mundo.",
      "Minha trajetória como guia nasceu do desejo de mostrar que o Japão pode ser acolhedor e surpreendente ao mesmo tempo. Adoro planejar cada logística e garantir que tudo flua com leveza.",
      "Meu propósito é que você não precise se preocupar com nada, apenas em curtir a viagem e criar memórias inesquecíveis com o carinho de quem está viajando com uma amiga!",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-japan-paper text-japan-ink">
      <section
        id="inicio"
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(18,16,15,.76), rgba(18,16,15,.28)), url('/image/hero.jpg')",
        }}
      >
<nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <a href="#inicio" className="font-serifDisplay text-xl text-white md:text-2xl">
              Guia Japão Incrível
            </a>
            <div className="hidden items-center gap-8 text-sm text-white md:flex">
              <a className="transition hover:text-white" href="#inicio">Início</a>
              <a className="transition hover:text-white" href="#sobre">Sobre</a>
              <a className="transition hover:text-white" href="#servicos">Serviços</a>
              <a
                className="rounded-full bg-japan-ink px-5 py-3 text-white transition hover:bg-black"
                href="#contato"
              >
                Entre em contato
              </a>
            </div>
            <MobileMenu />
          </div>
        </nav>

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-10 pt-28 md:px-8 md:pb-16">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-white/72">
              Tours privativos em português
            </p>
            <h1 className="font-serifDisplay text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Descubra o Japão com Quem Conhece
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 md:text-xl">
              Tours personalizados em português por guias brasileiros que vivem no Japão há
              mais de 20 anos.
            </p>
           <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
            href="#servicos" className="rounded-full bg-white/15 px-10 py-4 text-center text-sm font-semibold text-white backdrop-blur border border-white/55 transition hover:bg-white/25 sm:min-w-[220px]">
              Serviços
            </a>
            <a href="#contato" className="rounded-full bg-japan-red px-10 py-4 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-[#a81f1f] sm:min-w-[220px]">
              Fale conosco
            </a>
          </div>
          </div>

          <div className="mt-12 grid max-w-4xl grid-cols-3 gap-2 md:gap-3">
            {stats.map(([icon, value, label]) => (
              <div
                key={label}
                className="flex min-h-[120px] flex-col items-center justify-center rounded-lg border border-white/30 bg-black/18 p-4 text-center text-white shadow-soft backdrop-blur-2xl"
              >
                <StatIcon icon={icon} />
                <strong className="mt-2 font-serifDisplay text-2xl md:text-4xl">{value}</strong>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-white/78 md:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section id="escolher" className="why-section bg-[#faf8f3] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="why-inner flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* Esquerda — título + accordion */}
            <div className="why-copy lg:order-1 lg:w-[48%]">
              <h2 className="font-serifDisplay text-5xl leading-[1.08] md:text-6xl">
                Por que nos escolher?
              </h2>
              <div className="mt-2">
                <WhyAccordion reasons={reasons} />
              </div>
            </div>

            {/* Direita — foto */}
            <div className="why-photo relative mx-auto w-full max-w-[420px] lg:order-2 lg:mx-0 lg:w-[44%]">
              <div className="why-frame relative ml-auto h-[340px] w-[84%] md:h-[480px] lg:h-[560px]">
                <div className="why-red-block absolute inset-0 bg-japan-red" aria-hidden="true" />
                <img
                  src="/image/pai-mae.jpg"
                  alt="Bruno e Jacque, guias brasileiros no Japão"
                  className="relative h-full w-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="sobre" className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-japan-red">Sobre nós</p>
            <h2 className="mt-4 font-serifDisplay text-4xl leading-tight md:text-6xl">
              Quem somos nós?
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/68">
              Somos o Bruno e a Jacque, seus guias brasileiros no Japão.
            </p>
            <p className="mt-3 text-lg leading-8 text-black/68">
              Vivemos aqui há mais de 20 anos e queremos que você experimente o país de forma
              autêntica, segura e sem preocupações.
            </p>
          </div>
<div className="mt-12 grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <article key={guide.name} className="bg-japan-cream">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className={`h-72 w-full object-cover ${guide.imageClassName}`}
                />
                <div className="p-7 text-center md:p-9 md:text-left">
                  <h3 className="font-serifDisplay text-4xl">{guide.name}</h3>
                  <div className="mt-4 space-y-4 leading-8 text-black/68">
                    {guide.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

<section id="servicos" className="bg-[#faf8f3] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serifDisplay text-4xl leading-tight md:text-5xl">
              Nossos serviços
            </h2>
            <p className="mt-8 leading-8 text-black/68">
              Oferecemos experiências completas e personalizadas para sua viagem perfeita.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 md:mt-20 md:gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-black/5 bg-white p-6 shadow-[0_18px_45px_rgba(18,16,15,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(18,16,15,0.1)] md:p-9"
              >
                <ServiceIcon icon={service.icon} />
                <h3 className="mt-4 font-serifDisplay text-lg md:mt-6 md:text-xl">{service.title}</h3>
            <p className="hidden md:block mt-4 text-sm leading-7 text-black/62">{service.text}</p>
                <p className="md:hidden mt-3 text-xs leading-6 text-black/62">{service.textMobile}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-xl bg-japan-ink px-8 py-12 text-center text-white md:mt-20">
            <h3 className="font-serifDisplay text-2xl md:text-3xl">
              Solicite um orçamento personalizado
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/60">
              Entre em contato conosco para discutir suas preferências e criarmos o roteiro perfeito para você.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-japan-red px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a81f1f]"
            >
              <WhatsAppIcon />
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </section>

<section id="destinos" className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serifDisplay text-4xl leading-tight md:text-5xl">
              Experiências no Japão
            </h2>
            <p className="mt-5 leading-8 text-black/62">
              Estes são apenas alguns dos destinos que oferecemos. Entre em contato para
              conhecer todas as possibilidades!
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {destinations.map((dest) => (
              <article
                key={dest.name}
                className="overflow-hidden rounded-xl border border-black/6 bg-white shadow-[0_4px_20px_rgba(18,16,15,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(18,16,15,0.12)]"
              >
<div className="h-28 overflow-hidden md:h-52">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="font-serifDisplay text-xl md:text-2xl">{dest.name}</h3>
                  <p className="mt-1 text-xs leading-6 text-black/62 md:mt-3 md:text-sm md:leading-7">{dest.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

<TestimonialsCarousel />

      <section id="contato" className="bg-japan-ink px-5 py-24 text-white md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-white/58">Próximo passo</p>
          <h2 className="mt-4 font-serifDisplay text-4xl leading-tight md:text-6xl">
            Vamos planejar sua viagem dos sonhos?
          </h2>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-japan-red px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a81f1f]"
          >
            <WhatsAppIcon />
            Chamar no WhatsApp
          </a>
          <div className="mt-10 w-full max-w-sm">
  <div className="flex items-center gap-3 text-white/50">
    <div className="h-px flex-1 bg-white/20" />
    <span className="text-xs text-white/50">Acompanhe nosso dia a dia no Japão:</span>
    <div className="h-px flex-1 bg-white/20" />
  </div>

  <div className="mt-6 flex justify-center gap-10">
    <a href="https://instagram.com/guiajapao_incrivel" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-japan-red">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
      <span className="text-xs text-white/60">guiajapao_incrivel</span>
    </a>

    <a href="https://tiktok.com/@guiajapao_incrivel" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-japan-red">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
      <span className="text-xs text-white/60">guiajapao_incrivel</span>
    </a>

    <a href="https://www.facebook.com/profile.php?id=61584766612881&locale=pt_BR" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-japan-red">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
      <span className="text-xs text-white/60">Guia Japão Incrível</span>
    </a>
  </div>
</div>
        </div>
      </section>

      <footer className="bg-japan-red px-5 py-8 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <h2 className="font-serifDisplay text-3xl">Guia Japão Incrível</h2>
            <p className="mt-4 max-w-sm leading-7 text-white/78">
              Tours personalizados para viver o Japão com conforto, contexto e acolhimento em português.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Navegação</h3>
            <div className="mt-4 grid gap-3 text-white/86">
              <a href="#inicio" className="hover:text-white">Início</a>
              <a href="#sobre" className="hover:text-white">Sobre</a>
              <a href="#servicos" className="hover:text-white">Serviços</a>
              <a href="#destinos" className="hover:text-white">Destinos</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl border-t border-white/20 pt-6 text-center text-xs text-white/50 md:text-left">
          © {new Date().getFullYear()} Guia Japão Incrível. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}

function StatIcon({ icon }: { icon: string }) {
  const commonProps = {
    className: "h-7 w-7",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  if (icon === "users") {
    return (
      <svg {...commonProps} aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (icon === "clock") {
    return (
      <svg {...commonProps} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ServiceIcon({ icon }: { icon: string }) {
  const commonProps = {
    className: "h-8 w-8 text-japan-red",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
  };

  if (icon === "pin") {
    return (
      <svg {...commonProps} aria-hidden="true">
        <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </svg>
    );
  }

  if (icon === "car") {
    return (
      <svg {...commonProps} aria-hidden="true">
        <path d="M5 16h14" />
        <path d="M6.5 16 8 10.5A2 2 0 0 1 9.9 9h4.2a2 2 0 0 1 1.9 1.5L17.5 16" />
        <path d="M8 12h8" />
        <circle cx="8" cy="17" r="1.8" />
        <circle cx="16" cy="17" r="1.8" />
      </svg>
    );
  }

  if (icon === "plane") {
    return (
      <svg {...commonProps} aria-hidden="true">
        <path d="M16 3 9.5 21l-2-7-6-2.5L16 3Z" />
        <path d="m9.5 14 4-4" />
      </svg>
    );
  }

  if (icon === "calendar") {
    return (
      <svg {...commonProps} aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M3 11h18" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg {...commonProps} aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} aria-hidden="true">
      <path d="M21 12a7.5 7.5 0 0 1-7.5 7.5H8l-5 2 1.7-4.2A7.5 7.5 0 1 1 21 12Z" />
      <path d="M8 11h8" />
      <path d="M8 14h5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
