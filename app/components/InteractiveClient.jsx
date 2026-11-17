"use client";

import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Send,
  X,
  PhoneCall,
  Menu,
  Download,
  Flame,
  Sparkles,
} from "lucide-react";

function openLeadModal(title) {
  if (typeof window !== "undefined" && typeof window.__openLeadModal === "function") {
    window.__openLeadModal(title);
  }
}

// ─── NAVBAR (client: mobile menu state) ───────────────────────────────────────
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
          <a href="#solucoes" className="hover:text-white transition-colors">Vantagens</a>
          <a href="#modelos" className="hover:text-white transition-colors">Modelos</a>
          <a href="#processos" className="hover:text-white transition-colors">Processos</a>
          <a href="#roi-calculator" className="flex items-center gap-1.5 text-brand-cyan hover:text-cyan-300 transition-colors">
            <Calculator className="w-4 h-4" />Simulador de ROI
          </a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* CTA Header */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+551140028922" className="text-xs text-brand-muted hover:text-slate-200 transition-colors hidden xl:flex items-center gap-1.5 font-mono">
            <PhoneCall className="w-3.5 h-3.5 text-brand-accent" /> (11) 4002-8922
          </a>
          <button
            onClick={() => openLeadModal("Agendar Demonstração Gratuita")}
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
          <a href="#solucoes" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">Vantagens</a>
          <a href="#modelos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">Modelos</a>
          <a href="#processos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">Processos de Solda</a>
          <a href="#roi-calculator" onClick={() => setMobileMenuOpen(false)} className="block text-brand-cyan py-1 flex items-center gap-2">
            <Calculator className="w-4 h-4" /> Simulador de ROI
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">Perguntas Frequentes</a>
          <div className="pt-4 border-t border-brand-border/60">
            <button
              onClick={() => { setMobileMenuOpen(false); openLeadModal("Agendar Demonstração Gratuita"); }}
              className="w-full py-3 rounded-xl bg-brand-accent text-white font-medium text-center flex items-center justify-center gap-2"
            >
              Agendar Demonstração <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── HERO BUTTONS (client: onClick) ───────────────────────────────────────────
export function HeroCTAs() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
      <button
        onClick={() => openLeadModal("Agendar Demonstração Gratuita")}
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
  );
}

// ─── ROI CALCULATOR (client: sliders + state) ─────────────────────────────────
export function ROICalculator() {
  const [welders, setWelders] = useState(2);
  const [monthlyCost, setMonthlyCost] = useState(6500);
  const [hours, setHours] = useState(16);

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

  return (
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
              Mova os controles deslizantes abaixo e veja em quanto tempo o robô se paga na sua operação real.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-8 bg-brand-dark/50 p-6 sm:p-8 rounded-2xl border border-brand-border/60">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-200">Postos de Solda Atuais:</label>
                  <span className="font-mono text-lg font-bold text-brand-accent">{welders} postos</span>
                </div>
                <input type="range" min="1" max="10" value={welders}
                  onChange={(e) => setWelders(Number(e.target.value))}
                  className="w-full h-2 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-accent" />
                <div className="flex justify-between text-[11px] font-mono text-brand-muted mt-1">
                  <span>1 posto</span><span>5 postos</span><span>10 postos</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-200">Custo Mensal por Soldador (Salário + Encargos):</label>
                  <span className="font-mono text-lg font-bold text-white">R$ {monthlyCost.toLocaleString("pt-BR")}</span>
                </div>
                <input type="range" min="3500" max="15000" step="500" value={monthlyCost}
                  onChange={(e) => setMonthlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-accent" />
                <div className="flex justify-between text-[11px] font-mono text-brand-muted mt-1">
                  <span>R$ 3.500</span><span>R$ 9.000</span><span>R$ 15.000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-200">Horas de Trabalho por Dia da Empresa:</label>
                  <span className="font-mono text-lg font-bold text-brand-cyan">{hours}h ({hours / 8} Turno{hours > 8 ? "s" : ""})</span>
                </div>
                <input type="range" min="8" max="24" step="8" value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-cyan" />
                <div className="flex justify-between text-[11px] font-mono text-brand-muted mt-1">
                  <span>8h (1 Turno)</span><span>16h (2 Turnos)</span><span>24h (Contínuo)</span>
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="lg:col-span-5 bg-gradient-to-b from-brand-surface to-brand-card p-6 sm:p-8 rounded-2xl border-2 border-brand-cyan/40 shadow-xl relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold mb-4">PROJEÇÃO ESTIMADA</div>

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
                  <span className="text-lg font-bold text-white">R$ {Math.round(annualSavings).toLocaleString("pt-BR")}</span>
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
                  onClick={() => openLeadModal("Relatório de Viabilidade e ROI em PDF")}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-accent to-orange-600 text-white font-semibold text-sm shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all flex items-center justify-center gap-2"
                >
                  <span>Receber Relatório Detalhado em PDF</span>
                  <Download className="w-4 h-4" />
                </button>
                <span className="block text-center text-[10px] text-brand-muted mt-2">Sem custo ou compromisso de compra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ACCORDION (client: open/close state) ──────────────────────────────────
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

export function FAQAccordion() {
  const [activeFaq, setActiveFaq] = useState(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-brand-border rounded-xl bg-brand-card/70 overflow-hidden">
          <button
            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-white hover:text-brand-accent transition-colors"
          >
            <span>{faq.q}</span>
            <ChevronRight className={`w-5 h-5 text-brand-muted shrink-0 transition-transform ${activeFaq === index ? "rotate-90 text-brand-accent" : ""}`} />
          </button>
          {activeFaq === index && (
            <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-brand-border/40 pt-3">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── MODAL + TOAST + WHATSAPP (client: shared state manager) ──────────────────
export function InteractiveOverlays() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Agendar Demonstração Gratuita");
  const [toast, setToast] = useState({ show: false, title: "", desc: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenModal = (title = "Agendar Demonstração Gratuita") => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setModalOpen(false);
      setToast({ show: true, title: "Solicitação Enviada com Sucesso!", desc: "Nossa equipe técnica entrará em contato em instantes." });
      setTimeout(() => setToast({ show: false, title: "", desc: "" }), 4500);
    }, 800);
  };

  return (
    <>
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-brand-surface border border-brand-border rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl">
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-brand-muted hover:text-white p-1">
              <X className="w-6 h-6" />
            </button>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/30 text-[11px] font-mono text-brand-accent mb-2">
                SOLICITAÇÃO DE CONTATO TÉCNICO
              </div>
              <h3 className="text-2xl font-bold text-white">{modalTitle}</h3>
              <p className="text-xs text-slate-300 mt-1">Nossa equipe de engenharia entrará em contato em até 2 horas úteis.</p>
            </div>
            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Seu Nome Completo *</label>
                <input type="text" required placeholder="Ex: Eng. Carlos Silva"
                  className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Empresa / Metalúrgica *</label>
                  <input type="text" required placeholder="Ex: Indústria Metalúrgica SA"
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">WhatsApp / Telefone *</label>
                  <input type="tel" required placeholder="(11) 98765-4321"
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">E-mail Corporativo *</label>
                <input type="email" required placeholder="carlos@empresa.com.br"
                  className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Principal Processo de Interesse</label>
                <select className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors">
                  <option value="MIG/MAG">Solda MIG / MAG Automática</option>
                  <option value="TIG">Solda TIG (Inox / Alumínio)</option>
                  <option value="Laser">Solda a Laser de Fibra</option>
                  <option value="Estudo Geral">Gostaria de recomendação do especialista</option>
                </select>
              </div>
              <button type="submit" disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-orange-600 text-white font-semibold text-sm shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all flex items-center justify-center gap-2">
                {isSubmitting ? <span>Processando solicitação...</span> : (
                  <><span>Enviar e Falar com Especialista</span><Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp */}
      <a href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Vortex%20Weld%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20cobots%20de%20solda."
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        aria-label="Fale pelo WhatsApp">
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-brand-card text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-brand-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono">
          Falar no WhatsApp
        </span>
      </a>

      {/* Toast */}
      {toast.show && (
        <div className="fixed bottom-6 left-6 z-50 bg-brand-card border border-emerald-500/50 text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <div>
            <div className="font-semibold text-xs">{toast.title}</div>
            <div className="text-[11px] text-slate-300">{toast.desc}</div>
          </div>
        </div>
      )}

      {/* Expose modal opener globally for static sections */}
      <ModalOpenerBridge onOpen={handleOpenModal} />
    </>
  );
}

// Bridge: exposes modal open function via custom event
function ModalOpenerBridge({ onOpen }) {
  if (typeof window !== "undefined") {
    window.__openLeadModal = onOpen;
  }
  return null;
}

// ─── MODAL TRIGGER BUTTON (for use inside server components) ──────────────────
export function ModalTriggerButton({ title, className, children }) {
  return (
    <button
      className={className}
      onClick={() => openLeadModal(title)}
    >
      {children}
    </button>
  );
}
