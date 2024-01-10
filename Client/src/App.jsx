import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './features/ProductList/ProductList'
import { Navbar } from './features/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Navbar></Navbar>
      <ProductList></ProductList>
    </div>
  )
}

export default App
