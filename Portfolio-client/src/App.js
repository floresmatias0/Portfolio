import React from 'react'
import {Route} from 'react-router-dom'
import Welcome from '../src/pages/Welcome/Welcome'
import Home from '../src/pages/Home/Home'

const App = () => {
    return (
        <>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/home' component={Home} />
        </>
    )
}

export default App;