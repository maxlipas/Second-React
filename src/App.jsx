import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Page1 from "./Pages/Page1/Page1"
import Page2 from "./Pages/Page2/Page2"
import Page3 from "./Pages/Page3/Page3"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Page1/>}/>
          <Route path='/Page1' index element={<Page1/>}/>
          <Route path='/Page2' element={<Page2/>}/>
          <Route path='/Page3' element={<Page3/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
