import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from "framer-motion"
import Lost from './Lost';


function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.path} >
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:cuisine' element={<Cuisine />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/recipe/:id' element={<Recipe /> } />
      <Route path='*' element={<Lost />} />
    </Routes>
    </AnimatePresence>
  )
}

export default Pages
