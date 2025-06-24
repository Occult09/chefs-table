import './App.css'
import Cookings from './components/Cookings/Cookings'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>
      <Header></Header>
      <main className='max-w-[1320px] mx-auto md:flex gap-10'>
        <Recipes></Recipes>
        <Cookings></Cookings>
      </main>
    </>
  )
}

export default App
