import { CalendarDays, Clock3, MapPin, Leaf, Sparkles, ArrowRight, Compass, BookOpen, ChefHat, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroForest from "@/assets/hero-forest.jpg";
import foraging from "@/assets/foraging.jpg";

import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import t1 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.30.15.jpg.asset.json";
import t2 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.29.33.jpg.asset.json";
import t3 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.29.04.jpg.asset.json";
import t4 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.28.51.jpg.asset.json";
import t5 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.27.44.jpg.asset.json";
import t6 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.27.13.jpg.asset.json";


const FORM_URL = "https://forms.gle/PretBL7rMkjdisvC7";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/5541997411989"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-elegant flex items-center justify-center transition-transform hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        </svg>
      </a>

      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <Leaf className="w-5 h-5 text-sienna" />
            <span>Caçada de Cogumelos</span>
          </div>
          <Button asChild size="sm" className="bg-forest-deep hover:bg-forest-mid text-cream rounded-full">
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">Inscreva-se</a>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <img
          src={heroForest}
          alt="Floresta da Mata Atlântica com cogumelos silvestres"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }} />
        <div className="absolute inset-0 bg-forest-deep/40" />

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/15 backdrop-blur-sm border border-cream/20 text-cream text-base mb-8">
              <Sparkles className="w-4 h-4 text-sienna-soft" />
              <span>20 de Junho 2026 - Campo Largo/ Paraná</span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] text-balance mb-6">
              Caçada de <em className="text-sienna-soft not-italic">Cogumelos</em> Silvestres
            </h1>

            <p className="text-cream/85 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed whitespace-pre-line">
              Tem experiências que a gente explica.{"\n"}
              E tem experiências que precisam ser vividas!{"\n\n"}
              Então, viva a natureza, descubra sabores, aprenda e se conecte. Um dia inteiro de imersão guiado por um dos maiores especialistas do Brasil.{"\n\n"}
              Vamos Caçar Cogumelos Silvestres, aprender a identificar, e claro que também vamos comer muito COGU!
            </p>

            <div className="mb-8">
              <p className="font-display text-4xl sm:text-5xl font-bold text-cream leading-none">
                R$ 497,00
              </p>
              <p className="text-cream/80 text-sm sm:text-base mt-2">
                Com almoço agroecológico preparado pelo Chef Felipe — TEKOA incluso
              </p>
              <p className="text-cream/70 text-xs sm:text-sm mt-1">
                em até 4x no cartão
              </p>
              <p className="inline-block mt-3 px-3 py-1 rounded-full bg-sienna/90 text-cream text-sm font-medium">
                Restam 8 vagas!
              </p>

            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-sienna hover:bg-sienna/90 text-cream rounded-full px-8 h-14 text-base shadow-glow group">
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                  Maiores informações
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-transparent border-cream/40 text-cream hover:bg-cream hover:text-forest-deep">
                <a href="#detalhes">Ver detalhes</a>
              </Button>
            </div>

          </div>
        </div>

        {/* Floating info card */}
        <div className="hidden lg:block absolute bottom-12 right-12 z-10 animate-float">
          <div className="bg-cream/95 backdrop-blur-md rounded-3xl p-6 shadow-elegant max-w-xs">
            <p className="font-display text-sm text-forest-deep/70 mb-1 text-xl">Para todas as pessoas</p>
            <p className="font-display text-xl font-semibold text-forest-deep leading-tight">
              curiosas, apaixonadas por cogumelos e pela natureza 🍄
            </p>
          </div>
        </div>
      </header>

      {/* DETAILS */}
      <section id="detalhes" className="py-20 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {[
              { icon: CalendarDays, label: "Data", value: "20 Jun", sub: "2026" },
              { icon: Clock3, label: "Horário", value: "9h–16h30", sub: "Dia completo" },
              { icon: MapPin, label: "Local", value: "Sítio Pronobis", sub: "Campo Largo · PR" },
            ].map((item, i) => (
              <div key={i} className="group aspect-square p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-sienna/40 transition-smooth hover:shadow-soft flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-sienna group-hover:text-cream transition-smooth">
                  <item.icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-tight">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 sm:py-24 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-sienna text-sm uppercase tracking-widest mb-4 font-medium">A vivência</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep text-balance leading-tight">
              Um dia inteiro mergulhado na floresta.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
            {[
              { icon: Compass, title: "Caminhada", desc: "Coleta e identificação na mata." },
              { icon: BookOpen, title: "Aprendizado", desc: "Com um dos maiores especialistas do Brasil." },
              { icon: ChefHat, title: "Degustação", desc: "Cogumelos preparados na hora." },
              { icon: Sprout, title: "Cultivo", desc: "Visita ao cultivo de Shiitake." },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/60 hover:shadow-soft hover:border-sienna/40 transition-smooth">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-sienna/10 flex items-center justify-center text-sienna">
                  <item.icon className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-forest-deep leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-snug mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-24 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-sienna text-sm uppercase tracking-widest mb-4 font-medium">Depoimentos</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep text-balance leading-tight">
              Quem viveu, conta.
            </h2>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg">
              Mensagens reais de participantes da caçada do ano passado.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  text: "Pessoal, a experiência foi incrível demais! Amei conhecer todos vocês 🤍",
                  author: "Participante",
                },
                {
                  text: "Olá queridos, ontem foi um dia muito especial. Gratidão pela acolhida e pela linda experiência. Almoço delicioso, sobremesa incrível, uma explosão de sabores. Paisagem fantástica. A companhia de todos os participantes foi muito agradável. Gratidão profunda 🙏✨",
                  author: "Participante",
                },
                {
                  text: "Nós (Christian, Iris e Benício) amamooos tbm! Obrigada a todos os envolvidos, foi uma delícia participar dessa experiência! 🍄",
                  author: "Christian, Iris e Benício",
                },
                {
                  text: "Ontem cheguei satisfeita e dormi numa floresta! Agradecer cada um e principalmente a equipe organizadora. Foi um dia agradabilíssimo!",
                  author: "Participante",
                },
                {
                  text: "Pessoal, Amanda aqui! Hoje foi um dia muito especial, sinto que sou uma mulher muito mais feliz com os conhecimentos, práticas e trocas de hoje! Muito obrigada a todes! Foi incrível!!",
                  author: "Amanda",
                },
                {
                  text: "Adorei. Parabéns Tales, Karina, Jefferson e chef Felipe. Dia incrível. 🍄👏",
                  author: "Participante",
                },
                {
                  text: "Dia incrível! Obrigada pela experiência, pelo almoço e a todos pela recepção!",
                  author: "@erica_ayabe",
                },
                {
                  text: "Muito obrigada, pessoal! Foi um dia maravilhoso! ❤️🍄",
                  author: "@gihakemi",
                },
                {
                  text: "Tales e Karina! Foi um prazer imenso conhecê-los!! Muito obrigada por dividirem conosco um pouco da experiência de vocês!! ❤️🍄🍄",
                  author: "Participante",
                },
              ].map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-6 rounded-2xl bg-background border border-border hover:border-sienna/40 hover:shadow-soft transition-smooth flex flex-col">
                    <Quote className="w-6 h-6 text-sienna mb-4 shrink-0" strokeWidth={1.5} />
                    <p className="text-foreground/90 leading-relaxed text-base flex-1">
                      {t.text}
                    </p>
                    <p className="mt-4 text-sm font-medium text-sienna">— {t.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-4 lg:-left-12" />
              <CarouselNext className="-right-4 lg:-right-12" />
            </div>
          </Carousel>
        </div>
      </section>



      {/* GUIDE */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
                <img src={foraging} alt="Mãos colhendo cogumelos" className="w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
              </div>
            </div>

            <div>
              <p className="text-sienna text-sm uppercase tracking-widest mb-4 font-medium">Guiada por</p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-forest-deep mb-6 leading-tight">
                Jefferson Timm
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Um dos maiores especialistas em cogumelos do Brasil, Jefferson conduz a vivência compartilhando o conhecimento profundo sobre identificação, cultivo e gastronomia dos fungos silvestres.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sua paixão pela floresta e pelos cogumelos transforma cada caminhada em uma descoberta única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="py-24 sm:py-32 bg-forest-deep text-cream relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <p className="text-sienna-soft text-sm uppercase tracking-widest mb-4 font-medium">Alimentação inclusa</p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6 leading-tight text-balance">
                Sabores agroecológicos do mundo dos cogumelos.
              </h2>
              <p className="text-lg text-cream/80 leading-relaxed mb-8">
                Cardápio inspirado nos cogumelos e nos ingredientes da agrofloresta. Uma experiência gastronômica completa para fechar o dia com chave de ouro.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Vegetariano", "Agroecológico", "Cogumelos frescos", "Ingredientes da floresta"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-cream/20 text-sm text-cream/90">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src={food1} alt="Prato preparado com cogumelos silvestres" className="w-full h-full object-cover" loading="lazy" width={1600} height={1600} />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden mt-12">
                <img src={food2} alt="Refeição agroecológica da vivência" className="w-full h-full object-cover" loading="lazy" width={1600} height={1600} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="w-10 h-10 text-sienna mx-auto mb-8" />
            <h2 className="font-display text-5xl sm:text-7xl font-bold text-forest-deep mb-6 leading-[1.05] text-balance">
              Vagas limitadas.<br />
              <em className="text-sienna not-italic">Garanta a sua.</em>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Reserve já o seu lugar nesta vivência única na Mata Atlântica e deixe-se guiar pela floresta.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-forest-deep hover:bg-forest-mid text-cream rounded-full px-10 h-14 text-base group">
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                  Inscreva-se agora
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-forest-deep/20 text-forest-deep hover:bg-forest-deep hover:text-cream">
                <a href="https://wa.me/5541997411989" target="_blank" rel="noopener noreferrer">Fale conosco</a>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border">
        <div className="container flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display">
            <Leaf className="w-4 h-4 text-sienna" />
            <span>Caçada de Cogumelos Silvestres · 2026</span>
          </div>
          <p>Sítio Pronobis Agroflorestal · Campo Largo, PR</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
