import { useState } from 'react'
import { Container } from 'react-bootstrap'

import {Route, Routes} from 'react-router-dom'

//pages
import {Home} from './pages/Home'
import {Store} from './pages/Store'
import {About} from './pages/About'

//components
import { Navbar } from './components/Navbar'
import { CartProvider } from './context/CartContext'



function App() {

  return (
    <CartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App
