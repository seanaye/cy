import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [newString, setString] = useState("hi")

  useEffect(() => {
    console.log({ newString, count })
  }, [newString, count])

  function reset() {
    setCount(0)
    setString("string")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React! {newString}</p>
        <p>
          <button type="button" onClick={() => setCount((cur) => cur + 1)}>
            count is: {count}
          </button>
          <button type="button" onClick={() => setCount(69)}>
            make count 69
          </button>
          <button type="button" onClick={() => setCount((cur) => cur * 2)}>
            time 2
          </button>
          <button type="button" onClick={() => reset()}>
            Reset
          </button>

        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <MyComponent setText={setString} text={newString} />
        </p>
      </header>
    </div>
  )
}

function MyComponent({ setText, text }) {
  return (
    <div style={{ marginTop: "3rem", color: "red" }}> Hello World 
      <input type="text" onChange={(evt) => setText(evt.target.value)} value={text} /> 
    </div>
  )
}

export default App
