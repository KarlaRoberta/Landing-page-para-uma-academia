
import './App.css'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import About from './components/about/About'
import Service from './components/servic/Service'
import Location from './components/depositions/Depositions'

function App() {
  

  return (
    <>
    <div>
      <Menu/>
      <Header/>
      <About/>
      <Service/>
      <Location/>
    </div>
    </>
  )
}

export default App
