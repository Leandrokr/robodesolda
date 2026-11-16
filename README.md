# ⚡ VORTEX WELD — Landing Page de Robôs Colaborativos de Solda

Landing page moderna, minimalista e de alta conversão para venda de **robôs colaborativos de solda (cobots)** em processos MIG/MAG, TIG e Laser.

---

## 🚀 Funcionalidades Principais

- **Design Minimalista Industrial & Dark Mode:** Paleta com preto profundo (`#08090D`), grafite (`#161923`), laranja solda (`#FF5E1E`) e ciano plasma (`#00E5FF`).
- **Simulador Interativo de ROI:** Cálculo dinâmico em tempo real de payback, economia anual projetada e ganho percentual de peças/hora.
- **Gráfico Técnico Interativo do Braço Robótico:** Ilustração vetorial com telemetria simulada e arco de solda pulsante.
- **Cards Comparativos de Modelos:** Especificações técnicas (raio de alcance, carga na tocha, repetibilidade de ±0.02mm, tecimento).
- **Processos Homologados:** Seção detalhando MIG/MAG, TIG e Solda a Laser de Fibra.
- **Formulário de Captura de Leads com Modal Dinâmico:** Campos para empresa, telefone, e-mail corporativo e tipo de processo.
- **Botão Flutuante de WhatsApp:** Link direto com mensagem pré-preenchida.
- **FAQ com Accordion Interativo:** Respostas para as principais objeções técnicas (NR-12, programação manual sem engenheiro, fontes compatíveis, financiamento BNDES).
- **100% Responsivo:** Otimizado para desktop, tablets e smartphones.

---

## 📂 Estrutura de Arquivos

```
weld-cobot-landing/
│
├── index.html       # Estrutura HTML5 com Tailwind CSS CDN e ícones Lucide
├── styles.css       # Grid de fundo, estilização de sliders e micro-animações
├── script.js        # Lógica de cálculo de ROI, modais, acordeão e validação
└── README.md        # Documentação e instruções de uso
```

---

## 🛠️ Como Abrir e Testar Localmente

1. Basta dar um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Brave).
2. Se preferir rodar com um servidor local rápido (Python / Live Server):
   ```bash
   # Dentro da pasta weld-cobot-landing:
   python -m http.server 8080
   ```
   Acesse: `http://localhost:8080`

---

## ⚙️ Como Conectar o Formulário a um Serviço Real

No arquivo `script.js` (função `handleFormSubmit`), você pode integrar facilmente:
1. **Formspree / Getform:** Alterar a tag `<form>` no `index.html` para enviar diretamente via `POST`.
2. **Webhook (Zapier, Make, n8n, RD Station, HubSpot):** Adicionar um `fetch('SUA_URL_WEBHOOK', { method: 'POST', body: ... })`.
3. **Disparo para WhatsApp:** Redirecionar para a API do WhatsApp com os dados digitados pelo cliente.
