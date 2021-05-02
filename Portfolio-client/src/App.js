import React from 'react'
import {Route} from 'react-router-dom'
import Welcome from '../src/pages/Welcome/Welcome'
import Home from '../src/pages/Home/Home'
import Projects from '../src/components/Projects/Projects'
import About from '../src/components/About/About'
import Skills from '../src/components/Skills/Skills'
import Certificates from './components/Certicates/Certificates'
import Contact from './components/Contact/Contact'

const App = () => {
    return (
        <>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/home' component={Home} />   
            <Route path='/home/projects' component={Projects} />
            <Route path='/home/aboutme' component={About}/>
            <Route path='/home/skills' component={Skills}/>
            <Route path='/home/certificates' component={Certificates}/>
            <Route path='/home/contact' component={Contact}/>
        </>
    )
}

export default App;