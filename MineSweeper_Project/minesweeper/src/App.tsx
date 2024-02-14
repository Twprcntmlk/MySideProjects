import React, { FC } from 'react'
import './App.css'
import { LegendComponent } from './components/Legend'

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LegendComponent/>
      </header>
    </div>
  )
}

export default App
