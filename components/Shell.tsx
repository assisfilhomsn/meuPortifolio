"use client";
import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
const links=[['/','Início'],['/sobre-mim','Sobre mim'],['/hobbies','Hobbies'],['/linkedin','Meu LinkedIn'],['/github','Meu GitHub'],['/api-cep','Exemplo de API']];
export default function Shell({children}:{children:React.ReactNode}) {
 const [open,setOpen]=useState(false);const pathname=usePathname();
 return <div className="shell"><header className="header"><div className="portrait"><img src="/images/perfil.jpg" alt="Foto de Assis Lima" onError={e=>{e.currentTarget.style.display='none'}}/></div><h1>ASSIS LIMA - PORTFÓLIO</h1><button className="menuButton" onClick={()=>setOpen(!open)} aria-label="Abrir ou fechar menu" aria-expanded={open}>☰ Menu</button></header><div className="bodyLayout"><aside className={'sidebar '+(open?'opened':'')}><nav aria-label="Menu principal">{links.map(([href,label])=><Link key={href} href={href} className={pathname===href?'active':''} onClick={()=>setOpen(false)}>{label}</Link>)}</nav></aside><main className="content">{children}</main></div><footer className="footer">© {new Date().getFullYear()} - Construído com Next.js - Todos os direitos reservados.</footer></div>;
}
