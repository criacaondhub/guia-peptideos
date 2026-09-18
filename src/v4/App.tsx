import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/v4/LandingPage'

function AppV2() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default AppV2
