/* eslint-disable react/prop-types */


//import { useState } from 'react'
//import reactLogo from '../assets/react.svg'
//import viteLogo from ''
//import '../styles/App.css'
import '../styles/mode1.css'

import Page from './Page'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Page/>
    </>
  )
}

export default App
