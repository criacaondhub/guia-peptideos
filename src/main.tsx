import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AppV2 from '@/v2/App.tsx'
import AppV3 from '@/v3/App.tsx'
import AppV4 from '@/v4/App.tsx'

// `BASE_URL` é '/guia-peptideos/' no build e '/' no dev (ver vite.config.ts) —
// em produção o site vive num subcaminho, então o router precisa do mesmo prefixo.
// A barra final tem que sair: com basename '/guia-peptideos/' o React Router
// não casa a URL '/guia-peptideos' (sem barra) e não renderiza nada.
const V1_BASENAME = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/'

// v2, v3 e v4 não são rotas filhas da v1: são caminhos irmãos no domínio
// (/guia-peptideos-v2, /guia-peptideos-v3, /guia-peptideos-v4), cada um com
// router próprio no Traefik apontando para este mesmo container (ver
// docker-compose.yml). Como o bundle é um só, quem decide qual app montar é a
// URL. O basename da v1 não serve aqui — o React Router só remove o prefixo
// quando o caractere seguinte é '/' ou o fim da string, então '/guia-peptideos'
// não casa '/guia-peptideos-v2', '/guia-peptideos-v3' nem '/guia-peptideos-v4'
// e a página sairia em branco.
const V2_BASENAME = '/guia-peptideos-v2'
const V3_BASENAME = '/guia-peptideos-v3'
const V4_BASENAME = '/guia-peptideos-v4'

function isUnder(basename: string) {
  const { pathname } = window.location
  return pathname === basename || pathname.startsWith(`${basename}/`)
}

const isV3 = isUnder(V3_BASENAME)
const isV4 = !isV3 && isUnder(V4_BASENAME)
const isV2 = !isV3 && !isV4 && isUnder(V2_BASENAME)

const basename = isV3 ? V3_BASENAME : isV4 ? V4_BASENAME : isV2 ? V2_BASENAME : V1_BASENAME
const AppToRender = isV3 ? AppV3 : isV4 ? AppV4 : isV2 ? AppV2 : App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <AppToRender />
    </BrowserRouter>
  </StrictMode>,
)
