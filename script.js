/**
 * Vortex Weld - Interactive Landing Page Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initRoiCalculator();
  initFaqAccordion();
  initMobileMenu();
});

/* ==========================================================================
   1. CALCULADORA INTERATIVA DE RETORNO SOBRE O INVESTIMENTO (ROI)
   ========================================================================== */
function initRoiCalculator() {
  const weldersInput = document.getElementById('welders-count');
  const costInput = document.getElementById('monthly-cost');
  const shiftsInput = document.getElementById('work-shifts');

  const valWelders = document.getElementById('val-welders');
  const valCost = document.getElementById('val-cost');
  const valShifts = document.getElementById('val-shifts');

  const resPayback = document.getElementById('res-payback');
  const resAnnualSavings = document.getElementById('res-annual-savings');
  const resGain = document.getElementById('res-gain');

  function updateCalculations() {
    const welders = parseInt(weldersInput.value, 10);
    const monthlyCost = parseFloat(costInput.value);
    const hours = parseInt(shiftsInput.value, 10);

    // Update labels
    valWelders.textContent = welders;
    valCost.textContent = monthlyCost.toLocaleString('pt-BR');
    
    let shiftLabel = '1 Turno (8h)';
    if (hours === 16) shiftLabel = '2 Turnos (16h)';
    if (hours === 24) shiftLabel = 'Contínuo (24h)';
    valShifts.textContent = `${hours}h (${hours / 8} Turno${hours > 8 ? 's' : ''})`;

    // Math models:
    // Estimated average investment for complete turn-key cobot welding cell: ~ R$ 220.000,00
    const cellInvestment = 220000;
    
    // Direct operator savings (welders reassigned to setup/inspection + overtime reduction + scrap reduction)
    // Multiplied by shifts factor (e.g., in 24h work, human replacement/assistance saves 3x more shifts)
    const shiftMultiplier = hours / 8;
    const monthlyOperatorExpense = welders * monthlyCost * shiftMultiplier;
    
    // Total monthly operational efficiency savings (labor + reduced gas/wire waste + reduced rework)
    const reworkAndScrapSavings = monthlyOperatorExpense * 0.18; // ~18% savings on wire, gas and rework
    const totalMonthlySavings = (monthlyOperatorExpense * 0.65) + reworkAndScrapSavings;
    
    const annualSavings = totalMonthlySavings * 12;
    
    // Payback calculation in months
    let paybackMonths = cellInvestment / totalMonthlySavings;
    if (paybackMonths < 2.5) paybackMonths = 2.5;
    if (paybackMonths > 36) paybackMonths = 36;

    // Productivity gain estimation
    const prodFactor = Math.round(110 + (shiftMultiplier * 45) + (welders * 12));

    // Render into UI
    resPayback.textContent = paybackMonths.toFixed(1);
    resAnnualSavings.textContent = Math.round(annualSavings).toLocaleString('pt-BR');
    resGain.textContent = `+${prodFactor}% peças/hora`;
  }

  weldersInput.addEventListener('input', updateCalculations);
  costInput.addEventListener('input', updateCalculations);
  shiftsInput.addEventListener('input', updateCalculations);

  // Initial calculation
  updateCalculations();
}

/* ==========================================================================
   2. ACCORDION DO FAQ
   ========================================================================== */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-btn');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      const icon = button.querySelector('i');

      const isHidden = targetContent.classList.contains('hidden');

      // Close all other items for a clean accordion effect
      document.querySelectorAll('#faq-accordion > div > div').forEach(div => {
        div.classList.add('hidden');
      });
      document.querySelectorAll('.faq-btn i').forEach(ic => {
        ic.style.transform = 'rotate(0deg)';
      });

      // Toggle current
      if (isHidden) {
        targetContent.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(45deg)';
      }
    });
  });
}

/* ==========================================================================
   3. MENU MOBILE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* ==========================================================================
   4. MODAL CONTROLS & LEAD GENERATION
   ========================================================================== */
const leadModal = document.getElementById('lead-modal');
const modalTitle = document.getElementById('modal-title');
const leadForm = document.getElementById('lead-form');
const toast = document.getElementById('toast');

window.openModal = function(source = 'demo') {
  if (!leadModal) return;

  if (source === 'demo') {
    modalTitle.textContent = 'Agendar Demonstração Gratuita';
  } else if (source === 'catalogo') {
    modalTitle.textContent = 'Baixar Ficha Técnica & Catálogo';
  } else if (source === 'financiamento') {
    modalTitle.textContent = 'Simulação de Financiamento BNDES';
  } else if (source.startsWith('Vortex')) {
    modalTitle.textContent = `Orçamento: ${source}`;
  } else {
    modalTitle.textContent = 'Falar com Especialista em Solda';
  }

  leadModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

window.closeModal = function() {
  if (!leadModal) return;
  leadModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
};

// Close modal on click outside content
if (leadModal) {
  leadModal.addEventListener('click', (e) => {
    if (e.target === leadModal) {
      window.closeModal();
    }
  });
}

// CTA from ROI Calculator
window.requestCustomReport = function() {
  window.openModal('Relatório de Viabilidade e ROI em PDF');
};

/* ==========================================================================
   5. FORM SUBMISSION HANDLER & TOAST
   ========================================================================== */
window.handleFormSubmit = function(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById('btn-submit');
  const originalText = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    <span>Processando solicitação...</span>
  `;

  // Simulates API dispatch (e.g., webhook to CRM/Zapier/RD Station/HubSpot)
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    
    // Close modal
    window.closeModal();
    leadForm.reset();

    // Show toast confirmation
    showToast('Solicitação Recebida!', 'Nosso especialista entrará em contato via WhatsApp/E-mail.');
  }, 900);
};

function showToast(title, desc) {
  if (!toast) return;

  const toastTitle = document.getElementById('toast-title');
  const toastDesc = document.getElementById('toast-desc');

  if (toastTitle) toastTitle.textContent = title;
  if (toastDesc) toastDesc.textContent = desc;

  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4500);
}
