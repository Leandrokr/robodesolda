// SERVER COMPONENT — sem "use client"
import Image from "next/image";
import {
  ShieldCheck, Hand, Repeat, Gem, Users, BadgeDollarSign,
  Zap, Layers, Crosshair, Star, ArrowRight, MessageCircle, Flame,
} from "lucide-react";
import {
  Navbar, HeroCTAs, ROICalculator, FAQAccordion,
  InteractiveOverlays, ModalTriggerButton,
} from "./components/InteractiveClient";
import { RobotWeldingVideo } from "./components/RobotWeldingVideo";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 antialiased font-sans selection:bg-brand-accent selection:text-white overflow-x-hidden relative">

      {/* Ambient Glow — desativado em mobile para performance GPU */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-accent opacity-15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-brand-cyan opacity-10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-brand-accent opacity-10 rounded-full blur-[150px]" />
      </div>
      <div className="tech-grid fixed inset-0 opacity-20 z-0 hidden md:block pointer-events-none" />

      {/* NAVBAR — client (mobile menu) */}
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] lg:min-h-[98vh] flex items-center justify-center overflow-hidden z-10 border-b border-brand-border/60">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/hero-perfect-welding.jpg"
            alt="Robô colaborativo de soldagem industrial em plena operação"
            fill priority quality={80}
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover object-center brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-brand-dark/45 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-dark/85 via-brand-dark/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-brand-accent/50 backdrop-blur-md text-xs font-mono text-slate-100 mb-6 shadow-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
            <span className="text-brand-accent font-semibold">ROBÓTICA COLABORATIVA 4.0</span>
            <span className="text-brand-border">•</span>
            <span>NR-12 &amp; ISO 10218-1/2</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] max-w-5xl">
            Solda industrial com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-orange-400 to-amber-300">
              precisão cirúrgica
            </span>{" "}
            e zero enclausuramento.
          </h1>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-100 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Elimine a escassez de soldadores, acabe com o retrabalho e aumente a produtividade da
            sua fábrica em até <strong className="text-white font-semibold">300%</strong>. Cobots
            intuitivos que qualquer operador programa por arrasto manual em minutos.
          </p>

          {/* CTAs — client (onClick) */}
          <HeroCTAs />

          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-6 sm:gap-12 max-w-3xl w-full">
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">±0.02<span className="text-brand-accent text-lg">mm</span></div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-medium drop-shadow">Repetibilidade</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">&lt; 8 <span className="text-brand-cyan text-lg">meses</span></div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-medium drop-shadow">Payback Médio</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">100<span className="text-amber-400 text-lg">%</span></div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-medium drop-shadow">Sem Gaiola (NR-12)</div>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/15 w-full">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4 text-center">Compatível Plug &amp; Play com as principais fontes de solda do mundo:</p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-85">
              {["FRONIUS","MILLER","ESAB","LINCOLN ELECTRIC","KEMPPI","HYPERTHERM"].map((b) => (
                <span key={b} className="font-mono font-bold tracking-wider text-base sm:text-xl text-slate-200 drop-shadow">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RobotWeldingVideo />

      {/* ── VANTAGENS ─────────────────────────────────────────────── */}
      <section id="solucoes" className="py-24 bg-brand-surface/60 border-y border-brand-border/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-mono text-brand-cyan mb-3">POR QUE ROBÔS COLABORATIVOS?</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">A automação que cabe no chão de fábrica da pequena e média indústria</h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">Ao contrário dos robôs industriais tradicionais gigantescos e caros, o cobot não exige reprogramação complexa por engenheiros e opera no mesmo espaço dos seus colaboradores.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: ShieldCheck, c: "text-brand-accent", bg: "bg-brand-accent/10 border-brand-accent/30", hc: "group-hover:text-brand-accent", hb: "hover:border-brand-accent/40", label: "Segurança Sem Gaiolas (NR-12)", desc: "Sensores de torque de alta resolução em cada junta. Ao menor contato humano acidental, o braço para instantaneamente, eliminando grades caras." },
              { Icon: Hand, c: "text-brand-cyan", bg: "bg-brand-cyan/10 border-brand-cyan/30", hc: "group-hover:text-brand-cyan", hb: "hover:border-brand-cyan/40", label: "Programação por Ensino Manual", desc: "Pegue a tocha com a mão, guie pelo cordão de solda e salve os pontos com um clique. Qualquer soldador aprende a programar em minutos." },
              { Icon: Repeat, c: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30", hc: "group-hover:text-amber-400", hb: "hover:border-amber-500/40", label: "Flexibilidade para Lotes Pequenos", desc: 'Perfeito para fábricas de múltiplos produtos ("high-mix, low-volume"). Troque de gabarito e carregue uma nova receita em segundos.' },
              { Icon: Gem, c: "text-brand-accent", bg: "bg-brand-accent/10 border-brand-accent/30", hc: "group-hover:text-brand-accent", hb: "hover:border-brand-accent/40", label: "Cordão Perfeito e Repetível", desc: "Controle absoluto de velocidade, tecimento (weaving) e aporte térmico. Redução drástica de respingos e consumo de gás e arame." },
              { Icon: Users, c: "text-brand-cyan", bg: "bg-brand-cyan/10 border-brand-cyan/30", hc: "group-hover:text-brand-cyan", hb: "hover:border-brand-cyan/40", label: "Valorização da Equipe", desc: "Elimine a rotatividade por fadiga física ou fumos pesados. Seus soldadores viram supervisores de células de alta tecnologia." },
              { Icon: BadgeDollarSign, c: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30", hc: "group-hover:text-emerald-400", hb: "hover:border-emerald-500/40", label: "Apoio a Financiamentos", desc: "Facilidades de aquisição via BNDES, FINAME e PROGER com carência estendida. A própria economia paga as parcelas." },
            ].map(({ Icon, c, bg, hc, hb, label, desc }) => (
              <div key={label} className={`bg-brand-card/70 border border-brand-border rounded-2xl p-7 ${hb} hover:bg-brand-card transition-all group`}>
                <div className={`w-12 h-12 rounded-xl ${bg} ${c} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border`}><Icon className="w-6 h-6" /></div>
                <h3 className={`text-xl font-bold text-white mb-2 ${hc} transition-colors`}>{label}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODELOS ────────────────────────────────────────────────── */}
      <section id="modelos" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-mono text-brand-accent mb-3">LINHA DE EQUIPAMENTOS</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Escolha o alcance ideal para a sua produção</h2>
              <p className="mt-2 text-slate-300 max-w-xl">Células completas integradas com tocha refrigerada, limpador automático e mesa gabaritada.</p>
            </div>
            <div className="mt-6 md:mt-0 font-mono text-xs text-brand-muted">Todos os modelos incluem 2 anos de garantia nacional</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Modelo 1 */}
            <div className="bg-brand-card border border-brand-border rounded-3xl p-8 flex flex-col justify-between hover:border-slate-500 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-brand-muted uppercase">Linha Compacta</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-slate-300">Peças Pequenas</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Vortex Weld 5</h3>
                <p className="text-sm text-slate-300 mt-2">Ideal para subconjuntos, suportes, conexões tubulares e serralheria técnica.</p>
                <div className="mt-6 pt-6 border-t border-brand-border/60 space-y-3 font-mono text-xs">
                  {[["Raio de Alcance:", "900 mm","text-white"],["Capacidade de Carga:","5 kg","text-white"],["Repetibilidade:","± 0.02 mm","text-brand-cyan"],["Graus de Liberdade:","6 eixos rotacionais","text-white"],["Mesa Integrada:","1200 x 800 mm","text-slate-300"]].map(([k,v,c])=>(
                    <div key={k} className="flex justify-between"><span className="text-brand-muted">{k}</span><span className={`font-semibold ${c}`}>{v}</span></div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-border/60">
                <ModalTriggerButton title="Orçamento: Vortex Weld 5" className="w-full py-3.5 rounded-xl bg-brand-surface hover:bg-brand-border border border-brand-border text-white text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  Solicitar Orçamento <ArrowRight className="w-4 h-4 text-brand-accent" />
                </ModalTriggerButton>
              </div>
            </div>

            {/* Modelo 2 */}
            <div className="bg-gradient-to-b from-brand-card via-brand-card to-brand-surface border-2 border-brand-accent rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-brand-accent/15 relative transform lg:-translate-y-3">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-accent text-white font-mono text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">Mais Vendido</div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-brand-accent uppercase">Linha Performance</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/30 text-brand-accent">Alta Produtividade</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Vortex Weld 10 PRO</h3>
                <p className="text-sm text-slate-300 mt-2">O campeão de vendas para caldeiraria, estruturas metálicas e autopeças.</p>
                <div className="mt-6 pt-6 border-t border-brand-border/60 space-y-3 font-mono text-xs">
                  {[["Raio de Alcance:","1.300 mm","text-white"],["Capacidade de Carga:","10 kg (Tocha refrig.)","text-white"],["Repetibilidade:","± 0.03 mm","text-brand-cyan"],["Tecimento Integrado:","Senoidal, Triangular","text-emerald-400"],["Mesa Demmeler 3D:","2000 x 1000 mm","text-slate-300"]].map(([k,v,c])=>(
                    <div key={k} className="flex justify-between"><span className="text-brand-muted">{k}</span><span className={`font-semibold ${c}`}>{v}</span></div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-border/60">
                <ModalTriggerButton title="Orçamento: Vortex Weld 10 PRO" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-orange-600 hover:from-orange-600 hover:to-brand-accent text-white text-sm font-semibold shadow-lg shadow-brand-accent/30 transition-all flex items-center justify-center gap-2">
                  Solicitar Proposta Comercial <ArrowRight className="w-4 h-4" />
                </ModalTriggerButton>
              </div>
            </div>

            {/* Modelo 3 */}
            <div className="bg-brand-card border border-brand-border rounded-3xl p-8 flex flex-col justify-between hover:border-slate-500 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-brand-muted uppercase">Linha Pesada</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-slate-300">Grandes Estruturas</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Vortex Weld 16 MAX</h3>
                <p className="text-sm text-slate-300 mt-2">Projetado para estruturas de grande porte, chassi de veículos e caldeiraria contínua.</p>
                <div className="mt-6 pt-6 border-t border-brand-border/60 space-y-3 font-mono text-xs">
                  {[["Raio de Alcance:","1.700 mm (Opcional 7º Eixo)","text-white"],["Capacidade de Carga:","16 kg","text-white"],["Repetibilidade:","± 0.03 mm","text-brand-cyan"],["Grau de Proteção:","IP65 (Anti-fumos)","text-white"],["Multi-Estação:","Mesa rotativa / posic.","text-slate-300"]].map(([k,v,c])=>(
                    <div key={k} className="flex justify-between"><span className="text-brand-muted">{k}</span><span className={`font-semibold ${c}`}>{v}</span></div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-border/60">
                <ModalTriggerButton title="Orçamento: Vortex Weld 16 MAX" className="w-full py-3.5 rounded-xl bg-brand-surface hover:bg-brand-border border border-brand-border text-white text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  Solicitar Orçamento <ArrowRight className="w-4 h-4 text-brand-accent" />
                </ModalTriggerButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESSOS ──────────────────────────────────────────────── */}
      <section id="processos" className="py-20 bg-brand-surface/40 border-y border-brand-border/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-white">Suporte Completo aos Principais Processos</h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">Nossos cobots contam com bibliotecas de software integradas para cada tipo de soldagem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Zap, bg: "bg-orange-500/10", c: "text-brand-accent", title: "MIG / MAG (GMAW)", desc: "Pulsado, curto-circuito e arco spray. Controle de velocidade de arame e tensão direto no tablet com Profinet/DeviceNet." },
              { Icon: Layers, bg: "bg-cyan-500/10", c: "text-brand-cyan", title: "TIG (GTAW)", desc: "Excelente para inox e alumínio. Alimentador de arame frio e ignição HF de arco sem interferência eletromagnética no robô." },
              { Icon: Crosshair, bg: "bg-emerald-500/10", c: "text-emerald-400", title: "Solda a Laser de Fibra", desc: "Automatização de cabeçotes a laser portáteis (1.5kW a 3kW). Velocidade até 4x maior que a solda convencional com ZAT mínima." },
            ].map(({ Icon, bg, c, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border flex items-start gap-4">
                <div className={`p-3 rounded-xl ${bg} ${c} shrink-0`}><Icon className="w-6 h-6" /></div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR — client ────────────────────────────────── */}
      <ROICalculator />

      {/* ── DEPOIMENTOS ────────────────────────────────────────────── */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Resultados Comprovados no Brasil</h2>
            <p className="mt-3 text-slate-300">Veja o que dizem diretores industriais que já automatizaram suas linhas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Estávamos com 3 postos ociosos por falta de soldadores qualificados na região. O cobot entrou operando em 2 turnos e nossa produção mensal de chassis saltou de 120 para 340 unidades.", name: "Rodrigo Vasconcelos", role: "Diretor Industrial • Metalúrgica RV, Joinville/SC" },
              { text: "A precisão no inox TIG foi o ponto chave. O acabamento dos tanques ficou tão homogêneo que nosso tempo de polimento e acabamento posterior caiu 70%.", name: "Cláudia Mendonça", role: "Gerente de Qualidade • InoxTech, Caxias do Sul/RS" },
              { text: "O receio dos operadores de perder o emprego sumiu no primeiro dia. Hoje eles mesmos ajustam os programas pelo tablet e não precisam mais carregar tocha pesada o dia todo.", name: "Eduardo Bittencourt", role: "Supervisor • Sul Máquinas Agrícolas, Piracicaba/SP" },
            ].map(({ text, name, role }) => (
              <div key={name} className="bg-brand-card border border-brand-border p-7 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}</div>
                  <p className="text-sm text-slate-200 italic leading-relaxed">&quot;{text}&quot;</p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <div className="font-semibold text-white text-sm">{name}</div>
                  <div className="text-xs text-brand-muted">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-brand-surface/50 border-t border-brand-border/60 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-mono text-brand-cyan mb-3">TIRA-DÚVIDAS TÉCNICO</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Perguntas Frequentes</h2>
            <p className="mt-3 text-slate-300">Tudo o que você precisa saber antes de automatizar sua solda.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────────────── */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-orange-600/90 via-brand-accent to-amber-600 p-8 sm:p-14 text-center text-white shadow-2xl shadow-brand-accent/25 overflow-hidden">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight relative z-10 leading-tight">Pronto para elevar o padrão da sua solda industrial?</h2>
            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto relative z-10">Envie sua amostra de peça ou agende uma visita de nossos engenheiros de aplicação na sua fábrica.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <ModalTriggerButton title="Falar com um Engenheiro de Aplicação" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-dark text-white font-semibold text-base shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3">
                Falar com um Engenheiro de Aplicação <ArrowRight className="w-4 h-4 text-brand-accent" />
              </ModalTriggerButton>
              <a href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20rob%C3%B4s%20colaborativos%20de%20solda"
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-semibold text-base transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Comercial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="bg-brand-dark border-t border-brand-border/60 py-12 text-slate-400 text-xs relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-white"><Flame className="w-4 h-4" /></div>
                <span className="font-mono font-bold text-lg text-white">VORTEX<span className="text-brand-accent">WELD</span></span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">Especialistas em automação robótica colaborativa para processos de soldagem industrial.</p>
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
              <h5 className="text-white font-semibold font-mono uppercase text-xs mb-3">Contato &amp; Matriz</h5>
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

      {/* OVERLAYS GLOBAIS (modal + whatsapp + toast) */}
      <InteractiveOverlays />
    </div>
  );
}
