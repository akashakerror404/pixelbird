import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Home/Hero'
import Headline from './Componets/Home/Headline'
import Video from './Componets/Home/Video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Headline/>
      <Video/>
    </>
  )
}

export default App
