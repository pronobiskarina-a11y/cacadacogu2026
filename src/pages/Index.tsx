import { CalendarDays, Clock3, MapPin, Leaf, Sparkles, ArrowRight, Compass, BookOpen, ChefHat, Sprout, Award, Utensils, Wine, Users, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroForest from "@/assets/hero-forest.jpg";

import mushroomHand from "@/assets/new/mushroom-hand.jpg.asset.json";
import foodGardenImg from "@/assets/food-garden.jpg.asset.json";
import shiitakeImg from "@/assets/new/shiitake.jpg.asset.json";
import jeffersonImg from "@/assets/new/jefferson-timm.jpg.asset.json";
import bookImg from "@/assets/new/primavera-fungi-book.png.asset.json";

import t1 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.30.15.jpg.asset.json";
import t2 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.29.33.jpg.asset.json";
import t3 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.29.04.jpg.asset.json";
import t4 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.28.51.jpg.asset.json";
import t5 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.27.44.jpg.asset.json";
import t6 from "@/assets/testimonials/WhatsApp_Image_2026-06-06_at_04.27.13.jpg.asset.json";
import tn1 from "@/assets/new/testimonial-new-1.jpg.asset.json";
import tn2 from "@/assets/new/testimonial-new-2.jpg.asset.json";
import tn3 from "@/assets/new/testimonial-new-3.jpg.asset.json";

import mMomBasket from "@/assets/moments/mom-child-basket.jpg.asset.json";
import mParticipant from "@/assets/moments/participant-mushroom.jpg.asset.json";
import mCouple from "@/assets/moments/couple-foraging.jpg.asset.json";
import mHandThree from "@/assets/moments/hand-three-mushrooms.jpg.asset.json";
import mHandYellow from "@/assets/moments/hand-yellow-mushrooms.jpg.asset.json";




const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeafJnwxX6NYadnXhMwM1tpoiuZ9YqJSwouuoOwnHojsVNjDw/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGn_9JpZ6dCp-fVqrkQeJLDnwnrZnw4L9SkeqZksm1xjzV5pK8tn8qH_EYGcu8_aem_z3P9evHIRBtI6cwzQJkXnA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* WHATSAPP FLOATING */}
      <a
 href="https://wa.me/5541995472974"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-elegant flex items-center justify-center transition-transform hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        </svg>
      </a>

      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/40">
        <div className="container flex items-center justify-between py-3 gap-3">
          <div className="flex items-center gap-2 font-display font-bold text-sm sm:text-lg min-w-0">
            <Leaf className="w-5 h-5 text-sienna shrink-0" />
            <span className="truncate">Caçada de Cogumelos</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline text-sm sm:text-base font-bold uppercase tracking-wide text-sienna animate-pulse">
              2º LOTE · ÚLTIMAS VAGAS
            </span>
            <Button asChild size="sm" className="bg-sienna hover:bg-sienna/90 text-cream rounded-full shadow-glow">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer">Quero minha vaga</a>
            </Button>
          </div>
        </div>
        <div className="sm:hidden bg-sienna text-cream text-center text-sm font-bold py-2 px-3 animate-pulse">
          🍄 2º LOTE · ÚLTIMAS VAGAS
        </div>
      </nav>

      {/* HERO — editorial magazine layout */}
      <header className="relative min-h-screen pt-20 overflow-hidden bg-forest-deep">
        <img
          src={heroForest}
          alt="Floresta da Mata Atlântica com cogumelos silvestres"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/95 via-forest-deep/70 to-forest-deep/95" />

        {/* Vertical edition rail */}
        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 text-cream/70">
          <span className="font-stencil text-xs tracking-[0.3em]">EDIÇÃO</span>
          <div className="w-px h-24 bg-cream/30" />
          <span className="vertical-rl font-stencil text-sm tracking-[0.3em]">JULHO · 2026</span>
        </div>

        {/* Corner date stamp */}
        <div className="absolute top-24 right-6 sm:right-10 z-20 rotate-12">
          <div className="border-2 border-sienna-soft/80 rounded-full w-28 h-28 sm:w-36 sm:h-36 flex flex-col items-center justify-center text-center text-cream backdrop-blur-sm bg-forest-deep/30">
            <span className="font-stencil text-[10px] sm:text-xs tracking-[0.2em] text-sienna-soft">SÁBADO</span>
            <span className="font-display text-3xl sm:text-5xl font-black leading-none my-1">25</span>
            <span className="font-stencil text-sm sm:text-base tracking-[0.2em]">JUL · 2026</span>
          </div>
        </div>

        <div className="container relative z-10 py-16 lg:pl-24">
          <div className="max-w-4xl animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-sienna-soft" />
              <span className="font-stencil text-cream/80 text-sm sm:text-base tracking-[0.25em]">
                NOVA EDIÇÃO · MATA ATLÂNTICA
              </span>
            </div>

            <h1 className="font-display text-[3.5rem] sm:text-8xl lg:text-[9rem] font-black text-cream leading-[0.85] text-balance mb-2">
              Caçada de
            </h1>
            <h1 className="font-display italic text-[3.5rem] sm:text-8xl lg:text-[9rem] font-light text-sienna-soft leading-[0.85] text-balance mb-8 -mt-2">
              Cogumelos<span className="text-cream not-italic font-black">.</span>
            </h1>

            <p className="text-cream/90 text-lg sm:text-2xl max-w-2xl mb-10 leading-relaxed font-light">
              Um dia inteiro <strong className="font-semibold">caçando, identificando e degustando</strong> cogumelos silvestres na floresta, guiado por <strong className="font-semibold text-cream">Jeferson Timm</strong>, autor do livro <em className="text-sienna-soft">Primavera Fungi</em>.
            </p>

            <div className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start max-w-2xl mb-8">
              <div className="border-l-4 border-sienna pl-5">
                <p className="font-stencil text-cream/60 text-xs tracking-[0.3em] mb-1">2º LOTE · ATÉ 14/JUL 🔥</p>
                <p className="font-display text-5xl sm:text-6xl font-black text-cream leading-none">R$467</p>
                <p className="text-cream/80 text-sm mt-2">
                  ou <strong className="text-cream">4x sem juros</strong> · almoço + vinho inclusos
                </p>
              </div>

              <div className="bg-cream/5 backdrop-blur-md border border-cream/15 rounded-2xl p-4">
                <p className="text-cream text-sm font-medium leading-snug mb-2">
                  ✨ Casais, duplas e grupos com <strong>descontos especiais</strong>
                </p>
                <a
                  href="https://wa.me/5541995472974?text=Oi!%20Vi%20no%20site%20que%20tem%20desconto%20para%20casais%2C%20duplas%20ou%20grupos.%20Pode%20me%20passar%20os%20valores?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1ebe57] transition-colors"
                >
                  Garanta seu desconto →
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <Button asChild size="lg" className="bg-sienna hover:bg-sienna/90 text-cream rounded-none px-10 h-16 text-base font-bold uppercase tracking-wider shadow-glow group">
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                  Quero minha vaga
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <span className="font-stencil text-cream/70 text-sm tracking-[0.2em] ml-2 animate-pulse">
                ◉ VAGAS LIMITADAS
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* INVESTMENT / LOTES — compacto, logo após o hero */}
      <section id="investimento" className="py-12 sm:py-16 bg-forest-deep text-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-stencil text-sienna-soft text-sm tracking-[0.3em] mb-3">INVESTIMENTO</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-balance">
              Escolha o seu lote e <em className="text-sienna-soft not-italic">garanta sua vaga.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* 1º LOTE — ESGOTADO */}
            <div className="relative p-6 rounded-2xl border transition-smooth opacity-50 bg-cream/5 border-cream/10 select-none">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cream/20 text-cream/70 text-xs font-bold uppercase tracking-wider border border-cream/20">
                ESGOTADO
              </span>
              <p className="font-stencil text-xs tracking-[0.3em] mb-2 text-cream/50">1º LOTE</p>
              <p className="font-display text-5xl font-black leading-none mb-1 text-cream/40 line-through">R$437</p>
              <p className="text-sm mb-4 text-cream/40">até 07/Jul</p>
              <ul className="space-y-1.5 text-sm">
                {["PIX ou cartão em até 4x sem juros", "Almoço + vinho inclusos", "Grupo exclusivo pós-caçada"].map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-cream/30" />
                    <span className="text-cream/50">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2º LOTE — ATIVO */}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 rounded-2xl border transition-smooth block bg-sienna text-cream border-sienna-soft shadow-glow scale-[1.02]"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cream text-sienna text-xs font-bold uppercase tracking-wider">
                🔥 Ativo
              </span>
              <p className="font-stencil text-xs tracking-[0.3em] mb-2 text-cream/90">2º LOTE</p>
              <p className="font-display text-5xl font-black leading-none mb-1">R$467</p>
              <p className="text-sm mb-4 text-cream/90">até 14/Jul</p>
              <ul className="space-y-1.5 text-sm">
                {["PIX ou cartão em até 4x sem juros", "Almoço + vinho inclusos", "Grupo exclusivo pós-caçada"].map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-cream" />
                    <span className="text-cream/95">{f}</span>
                  </li>
                ))}
              </ul>
            </a>

            {/* 3º LOTE */}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 rounded-2xl border transition-smooth block bg-cream/5 border-cream/15"
            >
              <p className="font-stencil text-xs tracking-[0.3em] mb-2 text-sienna-soft">3º LOTE</p>
              <p className="font-display text-5xl font-black leading-none mb-1">R$497</p>
              <p className="text-sm mb-4 text-cream/70">até esgotar</p>
              <ul className="space-y-1.5 text-sm">
                {["PIX ou cartão em até 4x sem juros", "Almoço + vinho inclusos", "Grupo exclusivo pós-caçada"].map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-sienna-soft" />
                    <span className="text-cream/85">{f}</span>
                  </li>
                ))}
              </ul>
            </a>
          </div>

          <div className="max-w-3xl mx-auto mt-6 text-center space-y-3">
            <p className="text-cream/85 text-sm">
              🍄 <strong>Casais, duplas e grupos:</strong> descontos especiais 🍄‍🟫
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="bg-sienna hover:bg-sienna/90 text-cream rounded-none px-10 h-14 text-base font-bold uppercase tracking-wider shadow-glow group">
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                  Quero minha vaga · 2º lote R$467
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-8 h-14 text-base border-cream/30 text-cream hover:bg-cream hover:text-forest-deep">
                <a
                  href="https://wa.me/5541995472974?text=Oi!%20Quero%20saber%20sobre%20descontos%20para%20casais%2C%20duplas%20ou%20grupos%20na%20Ca%C3%A7ada%20de%20Cogumelos."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar sobre desconto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="detalhes" className="py-20 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {[
              { icon: CalendarDays, label: "Data", value: "25 Jul", sub: "2026" },
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

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-secondary/30 paper-grain">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-sienna" />
              <p className="font-stencil text-sienna text-sm tracking-[0.3em]">DEPOIMENTOS · EDIÇÕES ANTERIORES</p>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-forest-deep text-balance leading-[0.95]">
              Quem viveu, <em className="text-sienna font-light">conta.</em>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Mensagens reais de participantes — recebidas via WhatsApp depois da vivência.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="max-w-6xl mx-auto">
            <CarouselContent className="-ml-4">
              {[t3, t2, t1, t5, t4, t6, tn2, tn1, tn3].map((img, i) => (
                <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-3 rounded-2xl bg-background border border-border hover:border-sienna/40 hover:shadow-elegant transition-smooth">
                    <img
                      src={img.url}
                      alt={`Depoimento ${i + 1} da Caçada de Cogumelos`}
                      loading="lazy"
                      className="w-full h-auto rounded-xl object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-4 lg:-left-14" />
              <CarouselNext className="-right-4 lg:-right-14" />
            </div>
          </Carousel>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-sienna hover:bg-sienna/90 text-cream rounded-none px-10 h-16 text-base font-bold uppercase tracking-wider shadow-glow group">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                Quero minha vaga · 2º lote R$ 467
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl">
            {[
              { icon: Compass, title: "Caminhada guiada", desc: "Coleta e identificação na mata." },
              { icon: BookOpen, title: "Aprendizado", desc: "Com um dos maiores especialistas do Brasil." },
              { icon: Sprout, title: "Cultivo agroflorestal", desc: "Visita ao cultivo de Shiitake fresquinho." },
              { icon: ChefHat, title: "Almoço do Chef Felipe", desc: "Cozinha assinada do premiado Tekoa." },
              { icon: Wine, title: "Vinho harmonizado", desc: "Vinho do território acompanhando o almoço." },
              { icon: Users, title: "Comunidade no WhatsApp", desc: "Grupo exclusivo com especialistas depois da caçada." },
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



      {/* GUIDE */}
      <section className="py-24 sm:py-32 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
                <img src={jeffersonImg.url} alt="Jeferson Timm, biólogo, micólogo e autor do livro Primavera Fungi" className="w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Book overlay - bottom right */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-40 sm:w-56 lg:w-64 drop-shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500">
                <img src={bookImg.url} alt="Livro Primavera Fungi — Guia de Fungos do Sul do Brasil, por Jeferson Timm" className="w-full h-auto" loading="lazy" />
              </div>
            </div>

            <div>
              <p className="text-sienna text-sm uppercase tracking-widest mb-4 font-medium flex items-center gap-2">
                <Award className="w-4 h-4" /> Guiada por
              </p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-forest-deep mb-2 leading-tight">
                Jeferson Timm
              </h2>
              <p className="text-sienna font-medium mb-6 text-lg">Biólogo, micólogo e autor</p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                Referência nacional em fungos silvestres, Jeferson é autor do <strong className="text-forest-deep">Primavera Fungi, Guia de Fungos do Sul do Brasil</strong>, hoje em sua <strong>3ª edição revista e ampliada</strong>, com mais de 380 páginas e 170 espécies catalogadas. Uma obra inédita no Brasil.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Já guiou expedições micológicas em festivais gastronômicos pelo país e foi destaque em publicações como a <em>Revista Piauí</em> e <em>GZH</em>. Sua vivência une rigor taxonômico, ecologia, cultivo e gastronomia. Você sai do dia se sentindo, como já disseram, <em>"um micólogo de bolso"</em>.
              </p>

              <div className="grid grid-cols-3 gap-3 max-w-md">
                {[
                  { n: "170+", l: "Espécies catalogadas" },
                  { n: "3ª", l: "Edição do livro" },
                  { n: "15+", l: "Anos de pesquisa" },
                ].map((s) => (
                  <div key={s.l} className="text-center p-3 rounded-xl bg-background border border-border">
                    <p className="font-display text-2xl font-bold text-sienna">{s.n}</p>
                    <p className="text-xs text-muted-foreground leading-tight mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY AFTER — logo após o guia */}
      <section className="py-20 sm:py-28 bg-secondary/40">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-8 items-start p-8 sm:p-12 rounded-3xl bg-background border border-border shadow-soft">
            <div className="w-20 h-20 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-10 h-10 text-[#25D366]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="font-stencil text-sienna text-xs tracking-[0.3em] mb-3">A EXPERIÊNCIA CONTINUA</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest-deep leading-tight mb-4">
                Depois da caçada, você entra para um <em className="text-sienna not-italic">grupo exclusivo</em>.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Um grupo no WhatsApp com <strong className="text-forest-deep">alguns dos maiores especialistas em identificação de cogumelos do Brasil</strong> e outros participantes. Um espaço para trocar experiências, compartilhar descobertas e seguir aprendendo.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* FOOD / GASTRONOMY */}
<section className="py-24 sm:py-32 bg-forest-deep text-cream relative overflow-hidden">
  <div className="container relative z-10">
    <div className="max-w-3xl mb-12">
      <p className="text-sienna-soft text-sm uppercase tracking-widest mb-4 font-medium flex items-center gap-2">
        <Utensils className="w-4 h-4" /> Da floresta para a mesa
      </p>
      <h2 className="font-display text-4xl sm:text-6xl font-bold mb-6 leading-tight text-balance">
        Cace. Identifique. <em className="text-sienna-soft not-italic">Coma.</em>
      </h2>
      <div className="space-y-4 text-lg text-cream/85 leading-relaxed">
        <p>Esta não é apenas uma trilha, é uma <strong className="text-cream">experiência completa</strong>!</p>
        <p>🍷 <strong className="text-cream">Da floresta à mesa.</strong> Aprenda a identificar cogumelos silvestres com Jeferson Timm, conheça o cultivo agroflorestal de shiitake e desfrute de um <strong className="text-cream">almoço cogumeludo harmonizado com um bom vinho do território</strong>, preparado pelo <strong className="text-cream">Chef Felipe, do premiado Tekoa</strong>.</p>
        <p>Teremos um almoço orgânico do sítio com muita diversidade e muuuuuito cogumelo. Os comestíveis que você coletar na mata serão preparados na hora, junto com o nosso <strong className="text-cream">shiitake fresquinho, cultivado na madeira direto aqui do sítio</strong>.</p>
      </div>
    </div>

    <div className="grid grid-cols-12 gap-3 sm:gap-4 max-w-6xl">
      <div className="col-span-6 sm:col-span-4 aspect-square rounded-3xl overflow-hidden shadow-elegant">
        <img src={foodGardenImg.url} alt="Almoço orgânico no sítio, chef apresentando pratos na floresta" className="w-full h-full object-cover object-bottom" loading="lazy" />
      </div>
      <div className="col-span-6 sm:col-span-4 aspect-square rounded-3xl overflow-hidden shadow-elegant">
        <img src={shiitakeImg.url} alt="Shiitake fresco cultivado no Sítio Pronobis" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="col-span-12 sm:col-span-4 aspect-square rounded-3xl overflow-hidden shadow-elegant">
        <img src={mushroomHand.url} alt="Cogumelos silvestres recém colhidos" className="w-full h-full object-cover" loading="lazy" />
      </div>
    </div>

    <div className="flex flex-wrap gap-3 mt-10 max-w-4xl">
      {["Vinho do território harmonizado", "Chef Felipe · Tekoa", "Shiitake fresco do sítio", "Cogumelos silvestres preparados na hora", "Almoço orgânico do sítio", "Ingredientes da agrofloresta"].map((tag) => (
        <span key={tag} className="px-4 py-2 rounded-full border border-cream/25 bg-cream/5 text-sm text-cream/90">
          {tag}
        </span>
      ))}
    </div>
  </div>
</section>


      {/* MOMENTS GALLERY */}
      <section className="py-20 sm:py-28 bg-background paper-grain">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-sienna" />
              <p className="font-stencil text-sienna text-sm tracking-[0.3em]">MOMENTOS · EDIÇÕES ANTERIORES</p>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-forest-deep text-balance leading-[0.95]">
              A floresta <em className="text-sienna font-light">acontece</em> assim.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Sozinho, em dupla, com a família ou com a criançada. Cada edição vira memória.
            </p>
          </div>

          {/* Editorial bento mosaic */}
          <div className="grid grid-cols-6 grid-rows-2 gap-3 sm:gap-4 max-w-6xl h-[520px] sm:h-[640px]">
            <figure className="col-span-3 row-span-2 rounded-3xl overflow-hidden shadow-elegant relative group">
              <img src={mMomBasket.url} alt="Mãe e filho identificando cogumelos coletados numa caçada em família" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-cream font-stencil text-xs tracking-[0.25em] drop-shadow-lg">EM FAMÍLIA</figcaption>
            </figure>
            <figure className="col-span-3 sm:col-span-2 row-span-1 rounded-3xl overflow-hidden shadow-elegant relative group">
              <img src={mCouple.url} alt="Casal agachado observando cogumelos silvestres na mata" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <figcaption className="absolute bottom-3 left-4 text-cream font-stencil text-[10px] tracking-[0.25em] drop-shadow-lg">EM DUPLA</figcaption>
            </figure>
            <figure className="hidden sm:block col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-elegant relative group">
              <img src={mHandYellow.url} alt="Cogumelos silvestres coloridos coletados na mão" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </figure>
            <figure className="col-span-3 row-span-1 rounded-3xl overflow-hidden shadow-elegant relative group">
              <img src={mParticipant.url} alt="Participante da Caçada segurando um cogumelo silvestre encontrado na trilha" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <figcaption className="absolute bottom-3 left-4 text-cream font-stencil text-[10px] tracking-[0.25em] drop-shadow-lg">SUAS DESCOBERTAS</figcaption>
            </figure>
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
                <a href="https://wa.me/5541995472974" target="_blank" rel="noopener noreferrer">Fale conosco</a>
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
