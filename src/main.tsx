import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AppV2 from '@/v2/App.tsx'

// `BASE_URL` é '/guia-peptideos/' no build e '/' no dev (ver vite.config.ts) —
// em produção o site vive num subcaminho, então o router precisa do mesmo prefixo.
// A barra final tem que sair: com basename '/guia-peptideos/' o React Router
// não casa a URL '/guia-peptideos' (sem barra) e não renderiza nada.
const V1_BASENAME = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/'

// A v2 não é uma rota filha da v1: é um caminho irmão no domínio
// (/guia-peptideos-v2), com router próprio no Traefik apontando para este
// mesmo container (ver docker-compose.yml). Como o bundle é um só, quem decide
// qual app montar é a URL. O basename da v1 não serve aqui — o React Router só
// remove o prefixo quando o caractere seguinte é '/' ou o fim da string, então
// '/guia-peptideos' não casa '/guia-peptideos-v2' e a página sairia em branco.
const V2_BASENAME = '/guia-peptideos-v2'

function isUnder(basename: string) {
  const { pathname } = window.location
  return pathname === basename || pathname.startsWith(`${basename}/`)
}

const isV2 = isUnder(V2_BASENAME)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={isV2 ? V2_BASENAME : V1_BASENAME}>{isV2 ? <AppV2 /> : <App />}</BrowserRouter>
  </StrictMode>,
)
