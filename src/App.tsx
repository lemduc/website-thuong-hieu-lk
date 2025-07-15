import { HashRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './Layout'
import About from './pages/About'
import Brands from './pages/Brands'
import BrandDetail from './pages/BrandDetail'
import Treatments from './pages/Treatments'
import TreatmentDetail from './pages/TreatmentDetail'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:brandId" element={<BrandDetail />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:treatmentId" element={<TreatmentDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<NewsDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
