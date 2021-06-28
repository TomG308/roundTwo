import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar.component'
import SupportersList from './components/supportersList.component'
import EditSupporters from './components/editSupporters.component'
import CreateSupporters from './components/createSupporters.component'

function App() {
  return (
    <Router>
      <div className='container'>
      <Navbar />
      <br/>
      <Route path="/" exact component={SupportersList} />
      <Route path='/edit/:id' component={EditSupporters} />
      <Route path='/create' component={CreateSupporters} />
      </div>
    </Router>
  );
}

export default App;
