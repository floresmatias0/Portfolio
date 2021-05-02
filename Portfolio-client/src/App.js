import React from 'react'
import {Route} from 'react-router-dom'
import Welcome from '../src/pages/Welcome/Welcome'
import Home from '../src/pages/Home/Home'
import Nav from '../src/components/Nav/Nav'
import Projects from '../src/components/Projects/Projects'
import About from '../src/components/About/About'
import Skills from '../src/components/Skills/Skills'

const App = () => {
    return (
        <>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/home' component={Home} />   
            <Route path='/home/projects' component={Projects} />
            <Route path='/home/aboutme' component={About}/>
            <Route path='/home/skills' component={Skills}/>
        </>
    )
}

export default App;