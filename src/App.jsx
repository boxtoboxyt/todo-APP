import { useState } from 'react'
import CustomForm from './components/CustomForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>Ma liste</header>
     <CustomForm />   
    </div>
  )
}

export default App
