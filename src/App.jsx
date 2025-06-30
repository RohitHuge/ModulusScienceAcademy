import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Mentor from './pages/mentor'
import Courses from './pages/courses'
import Achievements from './pages/achievements'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import ModulusScienceAcademyHero from './pagesnotused/Modulus-Science-Academy-Hero'
import Blog from './pages/blog'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modulus-science-academy-hero" element={<ModulusScienceAcademyHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
