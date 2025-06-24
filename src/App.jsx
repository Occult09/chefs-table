import { useState } from 'react'
import './App.css'
import Cookings from './components/Cookings/Cookings'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

  const [cookings, setCookings] = useState([])

  const handleAddToCookings = recipe => {
    const newCookings = [...cookings, recipe]
    setCookings(newCookings)
  }

  return (
    <>
      <Header></Header>
      <main className='max-w-[1320px] mx-auto md:flex gap-10'>
        <Recipes handleAddToCookings={handleAddToCookings}></Recipes>
        <Cookings cookings={cookings}></Cookings>
      </main>
    </>
  )
}

export default App
