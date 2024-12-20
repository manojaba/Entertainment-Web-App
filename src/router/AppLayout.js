import React, { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Bookmarked from './Bookmarked'
import AppContext from './Context'
import data from './data'
import Home from './Home'
import Landing from './Landing'
import Movies from './Movies'
import Tvseries from './Tvseries'


function AppLayout() {

    const movieList = data;
    const [movies, setMovies] = useState(movieList)
    const [searchFilter, setSearchFilter] = useState('');
    console.log(searchFilter);




    function handleClick(title) {
        let index = movies.findIndex((movie) => movie.title === title);
        setMovies((olddata) => olddata.map((movie) => {
            if (movie.title === title) {
                if (movie.isBookmarked) {
                    return {
                        ...movie,
                        isBookmarked: !movie.isBookmarked,
                    };
                } else {
                    return {
                        ...movie,
                        isBookmarked: !movie.isBookmarked
                    };
                }
            }
            return movie;
        }
        ))


    }




    return (

        <AppContext.Provider value={{ movies, handleClick, setSearchFilter, searchFilter }}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Landing />}>
                        <Route index element={<Home />}></Route>
                        <Route path='/movies' element={<Movies />}></Route>
                        <Route path='/tvseries' element={<Tvseries />}></Route>
                        <Route path='/bookmarked' element={<Bookmarked />}></Route>

                    </Route>
                </Routes>
            </HashRouter>
        </AppContext.Provider>


    )
}

export default AppLayout