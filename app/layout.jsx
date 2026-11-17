import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  display: 'swap',
})

export const metadata = {
  title: 'VORTEX WELD // Robôs Colaborativos de Solda de Alta Precisão',
  description: 'Automatize suas operações de soldagem MIG/MAG, TIG e Laser com robôs colaborativos (cobots). Precisão de 0.03mm, setup em minutos e retorno sobre o investimento em menos de 8 meses.',
}

export const viewport = {
  themeColor: '#08090D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-brand-dark text-slate-100 antialiased font-sans overflow-x-hidden selection:bg-brand-accent selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
