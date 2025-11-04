import React, { useState } from 'react'
import UncontrolledAccordion from './components/UncontrolledAccordion.jsx'
import ControlledAccordion from './components/ControlledAccordion.jsx'

export default function App() {
  const [mode, setMode] = useState('controlled')

  return (
    <main className="container">
      <header className="header">
        <h1>React State Sharing Demo</h1>
        <p className="subtitle">
          Explore uncontrolled vs controlled components, and lifting state up.
        </p>
      </header>

      <div className="toolbar">
        <button
          className="btn"
          onClick={() => setMode(prev => prev === 'controlled' ? 'uncontrolled' : 'controlled')}
        >
          Switch to {mode === 'controlled' ? 'Uncontrolled' : 'Controlled'}
        </button>
      </div>

      <section className="content">
        {mode === 'controlled' ? <ControlledAccordion /> : <UncontrolledAccordion />}
      </section>

      <footer className="footer">
        <small>React 19 + Vite • Sharing state between components</small>
      </footer>
    </main>
  )
}
