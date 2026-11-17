"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Flame,
  Sparkles,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Star,
  ShieldCheck,
  Hand,
  Repeat,
  Gem,
  Users,
  BadgeDollarSign,
  Zap,
  Layers,
  Crosshair,
  ArrowRight,
  MessageCircle,
  Send,
  X,
  PhoneCall,
  Menu,
  Download,
} from "lucide-react";

export default function Home() {
  // Mobile Nav State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Agendar Demonstração Gratuita");

  // Toast State
  const [toast, setToast] = useState({ show: false, title: "", desc: "" });

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  // ROI Calculator State
  const [welders, setWelders] = useState(2);
  const [monthlyCost, setMonthlyCost] = useState(6500);
  const [hours, setHours] = useState(16);

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ROI Math
  const cellInvestment = 220000;
  const shiftMultiplier = hours / 8;
  const monthlyOperatorExpense = welders * monthlyCost * shiftMultiplier;
  const reworkAndScrapSavings = monthlyOperatorExpense * 0.18;
  const totalMonthlySavings = monthlyOperatorExpense * 0.65 + reworkAndScrapSavings;
  const annualSavings = totalMonthlySavings * 12;

  let paybackMonths = cellInvestment / totalMonthlySavings;
  if (paybackMonths < 2.5) paybackMonths = 2.5;
  if (paybackMonths > 36) paybackMonths = 36;

  const prodGain = Math.round(110 + shiftMultiplier * 45 + welders * 12);

  // Open Modal Helper
  const handleOpenModal = (title = "Agendar Demonstração Gratuita") => {
    setModalTitle(title);
    setModalOpen(true);
  };

  // Submit Lead Form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setModalOpen(false);
      setToast({
        show: true,
        title: "Solicitação Enviada com Sucesso!",
        desc: "Nossa equipe técnica entrará em contato em instantes.",
      });

      setTimeout(() => {
        setToast({ show: false, title: "", desc: "" });
      }, 4500);
    }, 800);
  };

  const faqs = [
    {
      q: "Preciso de um engenheiro de robótica ou programador para operar?",
      a: "Não. A interface foi desenhada especificamente para soldadores industriais. O cobot possui a função 'Lead-Through' (ensino por arrasto): você segura a tocha com a mão, posiciona no ponto inicial, aperta o botão de gravação e move até o ponto final. Em poucos toques no tablet touch, você escolhe se quer solda contínua, pulsada ou com tecimento.",
    },
    {
      q: "O robô é realmente seguro para trabalhar ao lado de pessoas sem gaiola?",
      a: "Sim. Nossos robôs são certificados sob a norma internacional ISO 10218-1/2 e a norma brasileira NR-12 para operação colaborativa. Cada junta possui sensores de torque de altíssima velocidade que interrompem o movimento em milissegundos se detectarem qualquer contato externo acima do limite pré-estabelecido.",
    },
    {
      q: "Preciso trocar minha fonte de solda atual?",
      a: "Na grande maioria dos casos, não. Nossos sistemas possuem módulos de interface analógica e digital (I/O, Profinet, EtherNet/IP, Modbus) que se conectam facilmente às principais marcas do mercado nacional, como Fronius, Miller, ESAB, Lincoln Electric, Bambozzi, Balmer e fontes laser de fibra.",
    },
    {
      q: "Como funcionam as opções de financiamento?",
      a: "Temos opções facilitadas via BNDES Finame, linhas Finep para inovação tecnológica, Proger e também opções de locação operacional (Robot as a Service - RaaS), onde sua empresa paga uma mensalidade fixa que inclui manutenção e atualização sem descapitalizar o caixa.",
    },
    {
      q: "Qual é a garantia e a disponibilidade de peças no Brasil?",
      a: "Oferecemos 2 anos de garantia integral de fábrica e mantemos centro de distribuição de peças de reposição e consumíveis em São Paulo e Santa Catarina, com envio em até 24 horas para qualquer estado.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 antialiased font-sans selection:bg-brand-accent selection:text-white overflow-x-hidden relative">
      {/* Ambient Glow and Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-accent opacity-15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-brand-cyan opacity-10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-brand-accent opacity-10 rounded-full blur-[150px]" />
        <div className="tech-grid absolute inset-0 opacity-20" />
      </div>

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-brand-dark/85 border-b border-brand-border/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-accent to-amber-600 flex items-center justify-center shadow-lg shadow-brand-accent/20 border border-brand-accent/40 group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-wider text-xl text-white flex items-center gap-1.5">
                VORTEX<span className="text-brand-accent">WELD</span>
              </span>
              <span className="text-[10px] tracking-widest text-brand-muted uppercase font-mono">
                Cobots de Precisão
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#solucoes" className="hover:text-white transition-colors">
              Vantagens
            </a>
            <a href="#modelos" className="hover:text-white transition-colors">
              Modelos
            </a>
            <a href="#processos" className="hover:text-white transition-colors">
              Processos
            </a>
            <a
              href="#roi-calculator"
              className="flex items-center gap-1.5 text-brand-cyan hover:text-cyan-300 transition-colors"
            >
              <Calculator className="w-4 h-4" />
              Simulador de ROI
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Header */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+551140028922"
              className="text-xs text-brand-muted hover:text-slate-200 transition-colors hidden xl:flex items-center gap-1.5 font-mono"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-accent" /> (11) 4002-8922
            </a>
            <button
              onClick={() => handleOpenModal("Agendar Demonstração Gratuita")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-accent to-orange-600 text-white font-medium text-sm shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <span>Agendar Demonstração</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-surface border-b border-brand-border px-6 py-6 space-y-4">
            <a
              href="#solucoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 py-1"
            >
              Vantagens
            </a>
            <a
              href="#modelos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 py-1"
            >
              Modelos
            </a>
            <a
              href="#processos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 py-1"
            >
              Processos de Solda
            </a>
            <a
              href="#roi-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-brand-cyan py-1 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" /> Simulador de ROI
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 py-1"
            >
              Perguntas Frequentes
            </a>
            <div className="pt-4 border-t border-brand-border/60">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenModal("Agendar Demonstração Gratuita");
                }}
                className="w-full py-3 rounded-xl bg-brand-accent text-white font-medium text-center flex items-center justify-center gap-2"
              >
                Agendar Demonstração
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION CINEMÁTICA COM NEXT/IMAGE ULTRA RÁPIDO */}
      <section className="relative min-h-[92vh] lg:min-h-[98vh] flex items-center justify-center overflow-hidden z-10 border-b border-brand-border/60">
        {/* Background Image com Next.js Image Optimization */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/hero-perfect-welding.jpg"
            alt="Robô colaborativo de soldagem industrial em plena operação com arco elétrico"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center filter brightness-90 contrast-105"
          />

          {/* Máscaras Cinemáticas de Contraste */}
          <div className="absolute inset-0 bg-brand-dark/45 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-dark/85 via-brand-dark/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-transparent pointer-events-none" />
        </div>

        {/* Conteúdo Hero em Toda a Largura */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-brand-accent/50 backdrop-blur-md text-xs font-mono text-slate-100 mb-6 shadow-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
            <span className="text-brand-accent font-semibold">ROBÓTICA COLABORATIVA 4.0</span>
            <span className="text-brand-border">•</span>
            <span>NR-12 & ISO 10218-1/2</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] max-w-5xl">
            Solda industrial com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-orange-400 to-amber-300">
              precisão cirúrgica
            </span>{" "}
            e zero enclausuramento.
          </h1>

          {/* Descrição */}
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-100 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Elimine a escassez de soldadores, acabe com o retrabalho e aumente a produtividade da
            sua fábrica em até <strong className="text-white font-semibold">300%</strong>. Cobots
            intuitivos que qualquer operador programa por arrasto manual em minutos.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleOpenModal("Agendar Demonstração Gratuita")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-accent to-orange-600 text-white font-semibold text-base shadow-2xl shadow-brand-accent/50 hover:shadow-brand-accent/70 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-5 h-5" />
              <span>Solicitar Demonstração</span>
            </button>
            <a
              href="#roi-calculator"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 text-slate-100 font-semibold text-base transition-all flex items-center justify-center gap-2 hover:border-brand-cyan shadow-xl"
            >
              <Calculator className="w-5 h-5 text-brand-cyan" />
              <span>Simulador de ROI</span>
            </a>
          </div>

          {/* Métricas Rápidas */}
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-6 sm:gap-12 max-w-3xl w-full">
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                ±0.02<span className="text-brand-accent text-lg">mm</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-medium drop-shadow">
                Repetibilidade
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                &lt; 8 <span className="text-brand-cyan text-lg">meses</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-medium drop-shadow">
                Payback Médio
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                100<span className="text-amber-400 text-lg">%</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-medium drop-shadow">
                Sem Gaiola (NR-12)
              </div>
            </div>
          </div>

          {/* Barra de Marcas */}
          <div className="mt-14 pt-8 border-t border-white/15 w-full">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4 text-center">
              Compatível Plug & Play com as principais fontes de solda do mundo:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-85 hover:opacity-100 transition-opacity">
              <span className="font-mono font-bold tracking-wider text-base sm:text-xl text-slate-200 drop-shadow">
                FRONIUS
              </span>
              <span className="font-mono font-bold tracking-wider text-base sm:text-xl text-slate-200 drop-shadow">
                MILLER
              </span>
              <span className="font-mono font-bold tracking-wider text-base sm:text-xl text-slate-200 drop-shadow">
                ESAB
              </span>
              <span className="font-mono font-bold tracking-wider text-base sm:text-xl text-slate-200 drop-shadow">
                LINCOLN ELECTRIC
              </span>
              <span className="font-mono font-bold tracking-wider text-base sm:text-xl text-slate-200 drop-shadow">
                KEMPPI
              </span>
              <span className="font-mono font-bold tracking-wider text-base sm:text-xl text-slate-200 drop-shadow">
                HYPERTHERM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VANTAGENS / DIFERENCIAIS */}
      <section id="solucoes" className="py-24 bg-brand-surface/60 border-y border-brand-border/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-mono text-brand-cyan mb-3">
              POR QUE ROBÔS COLABORATIVOS?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              A automação que cabe no chão de fábrica da pequena e média indústria
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Ao contrário dos robôs industriais tradicionais gigantescos e caros, o cobot não exige
              reprogramação complexa por engenheiros e opera no mesmo espaço dos seus colaboradores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-card/70 border border-brand-border rounded-2xl p-7 hover:border-brand-accent/40 hover:bg-brand-card transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                Segurança Sem Gaiolas (NR-12)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sensores de torque de alta resolução em cada junta. Ao menor contato humano acidental,
                o braço para instantaneamente, eliminando grades caras.
              </p>
            </div>

            <div className="bg-brand-card/70 border border-brand-border rounded-2xl p-7 hover:border-brand-cyan/40 hover:bg-brand-card transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Hand className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                Programação por Ensino Manual
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pegue a tocha com a mão, guie pelo cordão de solda e salve os pontos com um clique.
                Qualquer soldador aprende a programar em minutos.
              </p>
            </div>

            <div className="bg-brand-card/70 border border-brand-border rounded-2xl p-7 hover:border-amber-500/40 hover:bg-brand-card transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Repeat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                Flexibilidade para Lotes Pequenos
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Perfeito para fábricas de múltiplos produtos (&quot;high-mix, low-volume&quot;). Troque de
                gabarito e carregue uma nova receita em segundos.
              </p>
            </div>

            <div className="bg-brand-card/70 border border-brand-border rounded-2xl p-7 hover:border-brand-accent/40 hover:bg-brand-card transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                Cordão Perfeito e Repetível
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Controle absoluto de velocidade, tecimento (weaving) e aporte térmico. Redução
                drástica de respingos e consumo de gás e arame.
              </p>
            </div>

            <div className="bg-brand-card/70 border border-brand-border rounded-2xl p-7 hover:border-brand-cyan/40 hover:bg-brand-card transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                Valorização da Equipe
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Elimine a rotatividade por fadiga física ou fumos pesados. Seus soldadores viram
                supervisores de células de alta tecnologia.
              </p>
            </div>

            <div className="bg-brand-card/70 border border-brand-border rounded-2xl p-7 hover:border-emerald-500/40 hover:bg-brand-card transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BadgeDollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                Apoio a Financiamentos
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Facilidades de aquisição via BNDES, FINAME e PROGER com carência estendida. A própria
                economia paga as parcelas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODELOS DE COBOTS */}
      <section id="modelos" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-mono text-brand-accent mb-3">
                LINHA DE EQUIPAMENTOS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Escolha o alcance ideal para a sua produção
              </h2>
              <p className="mt-2 text-slate-300 max-w-xl">
                Células completas integradas com tocha refrigerada, limpador automático e mesa
                gabaritada.
              </p>
            </div>
            <div className="mt-6 md:mt-0 font-mono text-xs text-brand-muted">
              Todos os modelos incluem 2 anos de garantia nacional
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Modelo 1 */}
            <div className="bg-brand-card border border-brand-border rounded-3xl p-8 flex flex-col justify-between hover:border-slate-500 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-brand-muted uppercase">Linha Compacta</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-slate-300">
                    Peças Pequenas
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">Vortex Weld 5</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Ideal para subconjuntos, suportes, conexões tubulares e serralheria técnica.
                </p>

                <div className="mt-6 pt-6 border-t border-brand-border/60 space-y-3 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Raio de Alcance:</span>
                    <span className="text-white font-semibold">900 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Capacidade de Carga:</span>
                    <span className="text-white font-semibold">5 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Repetibilidade:</span>
                    <span className="text-brand-cyan font-semibold">± 0.02 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Graus de Liberdade:</span>
                    <span className="text-white font-semibold">6 eixos rotacionais</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Mesa Integrada:</span>
                    <span className="text-slate-300">1200 x 800 mm</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border/60">
                <button
                  onClick={() => handleOpenModal("Orçamento: Vortex Weld 5")}
                  className="w-full py-3.5 rounded-xl bg-brand-surface hover:bg-brand-border border border-brand-border text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Solicitar Orçamento
                  <ChevronRight className="w-4 h-4 text-brand-accent" />
                </button>
              </div>
            </div>

            {/* Modelo 2 - PRO */}
            <div className="bg-gradient-to-b from-brand-card via-brand-card to-brand-surface border-2 border-brand-accent rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-brand-accent/15 relative transform lg:-translate-y-3">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-accent text-white font-mono text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                Mais Vendido
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-brand-accent uppercase">
                    Linha Performance
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/30 text-brand-accent">
                    Alta Produtividade
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">Vortex Weld 10 PRO</h3>
                <p className="text-sm text-slate-300 mt-2">
                  O campeão de vendas para caldeiraria, estruturas metálicas e autopeças.
                </p>

                <div className="mt-6 pt-6 border-t border-brand-border/60 space-y-3 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Raio de Alcance:</span>
                    <span className="text-white font-semibold">1.300 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Capacidade de Carga:</span>
                    <span className="text-white font-semibold">10 kg (Tocha refrig.)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Repetibilidade:</span>
                    <span className="text-brand-cyan font-semibold">± 0.03 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Tecimento Integrado:</span>
                    <span className="text-emerald-400 font-semibold">Senoidal, Triangular</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Mesa Demmeler 3D:</span>
                    <span className="text-slate-300">2000 x 1000 mm</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border/60">
                <button
                  onClick={() => handleOpenModal("Orçamento: Vortex Weld 10 PRO")}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-orange-600 hover:from-orange-600 hover:to-brand-accent text-white text-sm font-semibold shadow-lg shadow-brand-accent/30 transition-all flex items-center justify-center gap-2"
                >
                  Solicitar Proposta Comercial
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modelo 3 */}
            <div className="bg-brand-card border border-brand-border rounded-3xl p-8 flex flex-col justify-between hover:border-slate-500 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-brand-muted uppercase">Linha Pesada</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-slate-300">
                    Grandes Estruturas
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">Vortex Weld 16 MAX</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Projetado para estruturas de grande porte, chassi de veículos e caldeiraria contínua.
                </p>

                <div className="mt-6 pt-6 border-t border-brand-border/60 space-y-3 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Raio de Alcance:</span>
                    <span className="text-white font-semibold">1.700 mm (Opcional 7º Eixo)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Capacidade de Carga:</span>
                    <span className="text-white font-semibold">16 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Repetibilidade:</span>
                    <span className="text-brand-cyan font-semibold">± 0.03 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Grau de Proteção:</span>
                    <span className="text-white font-semibold">IP65 (Anti-fumos)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Multi-Estação:</span>
                    <span className="text-slate-300">Mesa rotativa / posic.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border/60">
                <button
                  onClick={() => handleOpenModal("Orçamento: Vortex Weld 16 MAX")}
                  className="w-full py-3.5 rounded-xl bg-brand-surface hover:bg-brand-border border border-brand-border text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Solicitar Orçamento
                  <ChevronRight className="w-4 h-4 text-brand-accent" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSOS DE SOLDA */}
      <section id="processos" className="py-20 bg-brand-surface/40 border-y border-brand-border/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-white">Suporte Completo aos Principais Processos</h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Nossos cobots contam com bibliotecas de software integradas para cada tipo de soldagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-brand-accent shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">MIG / MAG (GMAW)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pulsado, curto-circuito e arco spray. Controle de velocidade de arame e tensão direto
                  no tablet com Profinet/DeviceNet.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-brand-cyan shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">TIG (GTAW)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Excelente para inox e alumínio. Alimentador de arame frio e ignição HF de arco sem
                  interferência eletromagnética no robô.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Crosshair className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Solda a Laser de Fibra</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automatização de cabeçotes a laser portáteis (1.5kW a 3kW). Velocidade até 4x maior
                  que a solda convencional com ZAT mínima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULADORA DE ROI INTERATIVA */}
      <section id="roi-calculator" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-card via-brand-surface to-brand-card border border-brand-border/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan mb-3">
                ESTUDO DE VIABILIDADE FINANCEIRA
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Calcule o Retorno do Investimento (ROI) na sua Empresa
              </h2>
              <p className="mt-2 text-slate-300 text-sm sm:text-base">
                Mova os controles deslizantes abaixo e veja em quanto tempo o robô se paga na sua
                operação real.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-8 bg-brand-dark/50 p-6 sm:p-8 rounded-2xl border border-brand-border/60">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-slate-200">
                      Postos de Solda Atuais:
                    </label>
                    <span className="font-mono text-lg font-bold text-brand-accent">
                      {welders} postos
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={welders}
                    onChange={(e) => setWelders(Number(e.target.value))}
                    className="w-full h-2 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-brand-muted mt-1">
                    <span>1 posto</span>
                    <span>5 postos</span>
                    <span>10 postos</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-slate-200">
                      Custo Mensal por Soldador (Salário + Encargos):
                    </label>
                    <span className="font-mono text-lg font-bold text-white">
                      R$ {monthlyCost.toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3500"
                    max="15000"
                    step="500"
                    value={monthlyCost}
                    onChange={(e) => setMonthlyCost(Number(e.target.value))}
                    className="w-full h-2 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-brand-muted mt-1">
                    <span>R$ 3.500</span>
                    <span>R$ 9.000</span>
                    <span>R$ 15.000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-slate-200">
                      Horas de Trabalho por Dia da Empresa:
                    </label>
                    <span className="font-mono text-lg font-bold text-brand-cyan">
                      {hours}h ({hours / 8} Turno{hours > 8 ? "s" : ""})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="24"
                    step="8"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-brand-muted mt-1">
                    <span>8h (1 Turno)</span>
                    <span>16h (2 Turnos)</span>
                    <span>24h (Contínuo)</span>
                  </div>
                </div>
              </div>

              {/* Resultados */}
              <div className="lg:col-span-5 bg-gradient-to-b from-brand-surface to-brand-card p-6 sm:p-8 rounded-2xl border-2 border-brand-cyan/40 shadow-xl relative overflow-hidden">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold mb-4">
                  PROJEÇÃO ESTIMADA
                </div>

                <div className="mb-6 pb-6 border-b border-brand-border/80">
                  <span className="text-xs text-brand-muted block">Tempo Estimado de Payback:</span>
                  <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight mt-1 flex items-baseline gap-2">
                    <span className="text-brand-accent">{paybackMonths.toFixed(1)}</span>
                    <span className="text-lg text-slate-300 font-normal">meses</span>
                  </div>
                  <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Retorno acelerado
                  </p>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-muted text-xs">Economia Anual Projetada:</span>
                    <span className="text-lg font-bold text-white">
                      R$ {Math.round(annualSavings).toLocaleString("pt-BR")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-brand-muted text-xs">Ganho de Produtividade:</span>
                    <span className="text-brand-cyan font-semibold">+{prodGain}% peças/hora</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-brand-muted text-xs">Redução de Retrabalho:</span>
                    <span className="text-emerald-400 font-semibold">-85% respingos</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => handleOpenModal("Relatório de Viabilidade e ROI em PDF")}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-accent to-orange-600 text-white font-semibold text-sm shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Receber Relatório Detalhado em PDF</span>
                    <Download className="w-4 h-4" />
                  </button>
                  <span className="block text-center text-[10px] text-brand-muted mt-2">
                    Sem custo ou compromisso de compra
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Resultados Comprovados no Brasil</h2>
            <p className="mt-3 text-slate-300">Veja o que dizem diretores industriais que já automatizaram suas linhas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-card border border-brand-border p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  &quot;Estávamos com 3 postos ociosos por falta de soldadores qualificados na região. O cobot entrou operando em 2 turnos e nossa produção mensal de chassis saltou de 120 para 340 unidades.&quot;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border/60">
                <div className="font-semibold text-white text-sm">Rodrigo Vasconcelos</div>
                <div className="text-xs text-brand-muted">Diretor Industrial • Metalúrgica RV, Joinville/SC</div>
              </div>
            </div>

            <div className="bg-brand-card border border-brand-border p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  &quot;A precisão no inox TIG foi o ponto chave. O acabamento dos tanques ficou tão homogêneo que nosso tempo de polimento e acabamento posterior caiu 70%.&quot;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border/60">
                <div className="font-semibold text-white text-sm">Cláudia Mendonça</div>
                <div className="text-xs text-brand-muted">Gerente de Qualidade • InoxTech, Caxias do Sul/RS</div>
              </div>
            </div>

            <div className="bg-brand-card border border-brand-border p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  &quot;O receio dos operadores de perder o emprego sumiu no primeiro dia. Hoje eles mesmos ajustam os programas pelo tablet e não precisam mais carregar tocha pesada o dia todo.&quot;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border/60">
                <div className="font-semibold text-white text-sm">Eduardo Bittencourt</div>
                <div className="text-xs text-brand-muted">Supervisor • Sul Máquinas Agrícolas, Piracicaba/SP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-brand-surface/50 border-t border-brand-border/60 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-mono text-brand-cyan mb-3">
              TIRA-DÚVIDAS TÉCNICO
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Perguntas Frequentes</h2>
            <p className="mt-3 text-slate-300">Tudo o que você precisa saber antes de automatizar sua solda.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-brand-border rounded-xl bg-brand-card/70 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-white hover:text-brand-accent transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-brand-muted shrink-0 transition-transform ${
                      activeFaq === index ? "rotate-90 text-brand-accent" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-brand-border/40 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-orange-600/90 via-brand-accent to-amber-600 p-8 sm:p-14 text-center text-white shadow-2xl shadow-brand-accent/25 overflow-hidden">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight relative z-10 leading-tight">
              Pronto para elevar o padrão da sua solda industrial?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto relative z-10">
              Envie sua amostra de peça ou agende uma visita de nossos engenheiros de aplicação na sua fábrica.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button
                onClick={() => handleOpenModal("Falar com um Engenheiro de Aplicação")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-dark text-white font-semibold text-base shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3"
              >
                <span>Falar com um Engenheiro de Aplicação</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </button>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20rob%C3%B4s%20colaborativos%20de%20solda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Comercial</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark border-t border-brand-border/60 py-12 text-slate-400 text-xs relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-white">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="font-mono font-bold text-lg text-white">
                  VORTEX<span className="text-brand-accent">WELD</span>
                </span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Especialistas em automação robótica colaborativa para processos de soldagem industrial.
              </p>
            </div>

            <div>
              <h5 className="text-white font-semibold font-mono uppercase text-xs mb-3">Modelos</h5>
              <ul className="space-y-2">
                <li><a href="#modelos" className="hover:text-slate-200">Vortex Weld 5 (Compacto)</a></li>
                <li><a href="#modelos" className="hover:text-slate-200">Vortex Weld 10 PRO (Mais Vendido)</a></li>
                <li><a href="#modelos" className="hover:text-slate-200">Vortex Weld 16 MAX (Longo Alcance)</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold font-mono uppercase text-xs mb-3">Recursos</h5>
              <ul className="space-y-2">
                <li><a href="#roi-calculator" className="hover:text-slate-200">Simulador de ROI</a></li>
                <li><a href="#solucoes" className="hover:text-slate-200">Conformidade NR-12</a></li>
                <li><a href="#faq" className="hover:text-slate-200">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold font-mono uppercase text-xs mb-3">Contato & Matriz</h5>
              <p className="text-xs text-brand-muted leading-relaxed">
                Av. das Indústrias, 1450 - Distrito Industrial<br />
                São Paulo - SP | CEP: 04571-010<br /><br />
                <span className="text-slate-200 font-mono">comercial@vortexweld.com.br</span><br />
                <span className="text-slate-200 font-mono">(11) 4002-8922</span>
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-muted">
            <div>&copy; 2026 Vortex Weld Robótica Industrial Ltda. Todos os direitos reservados.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">Privacidade</a>
              <a href="#" className="hover:text-slate-300">Termos de Uso</a>
              <a href="#" className="hover:text-slate-300">ISO 10218</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL DE LEAD */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-brand-surface border border-brand-border rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-brand-muted hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/30 text-[11px] font-mono text-brand-accent mb-2">
                SOLICITAÇÃO DE CONTATO TÉCNICO
              </div>
              <h3 className="text-2xl font-bold text-white">{modalTitle}</h3>
              <p className="text-xs text-slate-300 mt-1">
                Nossa equipe de engenharia entrará em contato em até 2 horas úteis.
              </p>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Eng. Carlos Silva"
                  className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Empresa / Metalúrgica *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Indústria Metalúrgica SA"
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  E-mail Corporativo *
                </label>
                <input
                  type="email"
                  required
                  placeholder="carlos@empresa.com.br"
                  className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Principal Processo de Interesse
                </label>
                <select className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors">
                  <option value="MIG/MAG">Solda MIG / MAG Automática</option>
                  <option value="TIG">Solda TIG (Inox / Alumínio)</option>
                  <option value="Laser">Solda a Laser de Fibra</option>
                  <option value="Estudo Geral">Gostaria de recomendação do especialista</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-orange-600 text-white font-semibold text-sm shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processando solicitação...</span>
                ) : (
                  <>
                    <span>Enviar e Falar com Especialista</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Vortex%20Weld%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20cobots%20de%20solda."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        aria-label="Fale pelo WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-brand-card text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-brand-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono">
          Falar no WhatsApp
        </span>
      </a>

      {/* TOAST NOTIFICATION */}
      {toast.show && (
        <div className="fixed bottom-6 left-6 z-50 bg-brand-card border border-emerald-500/50 text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <div>
            <div className="font-semibold text-xs">{toast.title}</div>
            <div className="text-[11px] text-slate-300">{toast.desc}</div>
          </div>
        </div>
      )}
    </div>
  );
}
