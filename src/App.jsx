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
import Molecule from './Fcomponents/Molecule_byname'
import Moleculeid from './Fcomponents/Molecule_byid'
import Moleculeofday from './Fcomponents/Moleculeofday'
import Rwhole from './Rcomp/Rwhole'
import Flav from './Fcomponents/flav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Mainpage /> */}
      <Routes>
        <Route path = '/' element= {<Rwhole/>}/>
        <Route path = ""></Route>
      </Routes>
    </>
  )
}

export default App
