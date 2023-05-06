import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from "framer-motion"


function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.path} >
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:cuisine' element={<Cuisine />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/recipe/:id' element={<Recipe /> } />
    </Routes>
    </AnimatePresence>
  )
}

export default Pages
