import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bookmarked from './Bookmarked'
import AppContext from './Context'
import data from './data'
import Home from './Home'
import Landing from './Landing'
import Movies from './Movies'
import Tvseries from './Tvseries'


function AppLayout() {




    return (
        <AppContext.Provider value={data}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />}>
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/movies' element={<Movies />}></Route>
                        <Route path='/tvseries' element={<Tvseries />}></Route>
                        <Route path='/bookmarked' element={<Bookmarked />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>

    )
}

export default AppLayout