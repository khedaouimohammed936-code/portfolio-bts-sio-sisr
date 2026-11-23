import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'

import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Preloader } from './components/Preloader'
import { Competences } from './pages/Competences'
import { Entreprise } from './pages/Entreprise'
import { Formation } from './pages/Formation'
import { Home } from './pages/Home'
import { Realisations } from './pages/Realisations'
import { Veille } from './pages/Veille'
import { Work } from './pages/Work'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 50)
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="realisations/:slug" element={<Work />} />
          <Route path="formation" element={<Formation />} />
          <Route path="entreprise" element={<Entreprise />} />
          <Route path="competences" element={<Competences />} />
          <Route path="veille" element={<Veille />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Preloader />
      <ScrollManager />
      <Nav />
      <Pages />
      <Footer />
    </BrowserRouter>
  )
}
