import './globals.css'
import { Inter } from 'next/font/google'

// Carregando apenas Inter (sem Space Grotesk — reduz 1 requisição de fonte)
// Inter cobre todos os pesos necessários
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  // Apenas os pesos realmente usados no site
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'VORTEX WELD // Robôs Colaborativos de Solda de Alta Precisão',
  description: 'Automatize suas operações de soldagem MIG/MAG, TIG e Laser com robôs colaborativos (cobots). Precisão de 0.03mm, setup em minutos e retorno sobre o investimento em menos de 8 meses.',
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#08090D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Pré-conectar ao servidor de imagens da Vercel para acelerar next/image */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} bg-brand-dark text-slate-100 antialiased font-sans overflow-x-hidden selection:bg-brand-accent selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
