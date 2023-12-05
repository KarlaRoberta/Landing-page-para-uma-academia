
import './App.css'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import About from './components/about/About'
import Service from './components/servic/Service'
import Location from './components/depositions/Depositions'
import Contacts from './components/contacts/Contacts'

function App() {
  

  return (
    <>
    <div>
      <Menu/>
      <Header/>
      <About/>
      <Service/>
      <Location/>
      <Contacts/>
    </div>
    </>
  )
}

export default App
