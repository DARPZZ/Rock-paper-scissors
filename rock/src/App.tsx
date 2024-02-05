
import './App.css'
import { Link, Route, Router, Routes } from 'react-router-dom';
import game from './components/game';
function App() {  
  
  return (
   <div>
      <Routes>
          <Route path='/' Component={game}/>
        </Routes>
   </div>
  )
}

export default App
