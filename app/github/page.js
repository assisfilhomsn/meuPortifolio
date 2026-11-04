"use client";
import {useEffect,useState} from 'react';

export default function GitHub(){
  const [repos,setRepos]=useState([]),[error,setError]=useState(''),[loading,setLoading]=useState(true);useEffect(()=>{fetch('/api/github').then(async r=>{const x=await r.json();if(!r.ok)throw Error(x.error);setRepos(x)}).catch(e=>setError(e.message)).finally(()=>setLoading(false))},[]);return <section className="panel"><h2>Meu GitHub</h2><p className="muted">Projetos públicos e, se configurado um token autorizado, também privados. Nunca exponha seu token no navegador.</p>{loading?<p>Carregando...</p>:error?<p role="alert">{error}</p>:repos.length?repos.map(x=><div className="item" key={x.id}><div><a href={x.url} target="_blank" rel="noopener noreferrer">{x.name}</a><p>{x.description}</p></div><strong>{x.private?'Privado':'Público'}</strong></div>):<p>Nenhum repositório encontrado.</p>}</section>}
