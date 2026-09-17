import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/v2/LandingPage'

function AppV2() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default AppV2
