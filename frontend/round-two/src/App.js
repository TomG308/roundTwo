import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar.component'
import Home from './components/homeComponent/home.component'
import About from './components/aboutComponent/about.component'
import Events from './components/eventsComponent/events.component'
import Issues from './components/issuesComponent/issues.component'
import Volunteer from './components/volunteerComponent/volunteer.component'
import Footer from './components/footerComponent/Footer.component'
import ThankYou from './components/thankYou.Component.js/ThankYou.component'

function App() {
  return (
    <div>
    <Router>
      <div className='container'>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/events' component={Events} />
      <Route path='/issues' component={Issues} />
      <Route path='/volunteer' component={Volunteer} />
      <Route path='/thankYou' component={ThankYou} />
      </div>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
