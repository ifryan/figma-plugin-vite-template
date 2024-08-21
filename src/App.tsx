import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { MyChart } from './components/MyChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 h-full">

        <MyChart />
        <Button onClick={() => {
          setCount((count) => count + 1)
        }}>
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
