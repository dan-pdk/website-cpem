import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import Materiais from './pages/Materiais.jsx'
import MaterialDetalhe from './pages/MaterialDetalhe.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/materiais" element={<Materiais />} />
        <Route path="/materiais/:id" element={<MaterialDetalhe />} />
      </Route>
    </Routes>
  )
}

export default App
