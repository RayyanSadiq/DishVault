import SideBar from "./components/SideBar"
import FavoritesPages from "./pages/FavoritesPages"
import HomePage from "./pages/HomePage"
import {Routes, Route} from "react-router-dom"

function App() {
  
  return (
  <main className="flex">
    <SideBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/favorites' element={<FavoritesPages/>}/> 
    </Routes>
  </main>
  )
}

export default App
