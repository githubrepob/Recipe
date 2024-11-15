import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './ap.css'
import Byconti from './component/Byconti'
import ByName from './component/Byname'
import Byid from './component/Byregion'
import {Route,Routes} from "react-router-dom";
import Byregion from './component/Byregion'
import Bysubregion from './component/Bysubregion'
import Recipeofday from './component/Recipeofday'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Mainpage /> */}
      <Routes>
        <Route path = '/' element= {<Recipeofday />}/>
        <Route path = ""></Route>
      </Routes>
    </>
  )
}

export default App
