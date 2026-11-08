import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import News from './pages/News'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      {/* On applique notre fond clair global ici */}
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
        
        {/* La Navbar sera visible sur toutes les pages */}
        <Navbar />

        {/* Le contenu principal (qui change selon l'URL) */}
        <main className="flex-grow p-6 md:p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Un petit footer discret en bas */}
        <footer className="py-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Matthieu - Construit avec React & Tailwind
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App