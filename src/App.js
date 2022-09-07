import React from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import SearchPage from "./SearchPage"
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="appPage">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="appPage">
              <Sidebar />
              <Videos />
            </div>
          </Route>

        </Switch>
      </Router>


    </div>
  )
}

export default App