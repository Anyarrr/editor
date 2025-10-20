import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { Coupling } from './pages/Сoupling/Coupling.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Coupling />
  </StrictMode>,
)
