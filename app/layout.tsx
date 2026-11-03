import type { Metadata } from 'next';
import './globals.css';
import Shell from '../components/Shell';
export const metadata: Metadata = { title: 'Assis Lima - Portfólio', description: 'Portfólio web SENAC' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body><Shell>{children}</Shell></body></html>}
