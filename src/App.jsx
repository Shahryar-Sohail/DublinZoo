import { useState } from 'react'
import './index.css'
import 'flowbite'
import 'flowbite/dist/flowbite.min.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Section2 from './pages/Section2'
import Section3 from './pages/Section3'
import Section4 from './pages/Section4'
import Section5 from './pages/Section5'
import Section6 from './pages/Section6'
import Section7 from './pages/Section7'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
    <Navbar />
    <Home />
    <Section2 />
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/> 
    <Section7/>
    <Footer/>
    
    </div>
  )
}

export default App
