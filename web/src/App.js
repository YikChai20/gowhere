import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Url from './components/url.component'

import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Url />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
