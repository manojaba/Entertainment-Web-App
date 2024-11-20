import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AppContext from './Context'
import SearchBar from './SearchBar'

function Landing() {
    const data = useContext(AppContext)
    return (
        <div className='flex gap-9 h-full bg-[#10141E] pt-8 pl-8  '>

            <nav className='bg-[#161D2F] w-24 h-[960px] rounded-3xl pt-9 flex flex-col space-y-20  '>
                <div className='mx-auto' ><Link to={'/'}><img className=" w-8,h-6" src='./assets/logo.svg' alt='logo'></img></Link></div>
                <div className='flex flex-col space-y-10 mx-auto'>
                    <Link to={'/'}><img className="h-5 w-5" src='./assets/icon-nav-home.svg' alt='home-icon'></img></Link>
                    <Link to={'/movies'}><img className="h-5 w-5" src='./assets/icon-nav-movies.svg' alt='movie-icon'></img></Link>
                    <Link to={'/tvseries'}><img className="h-5 w-5" src='./assets/icon-nav-tv-series.svg' alt='tvseries-icon'></img></Link>
                    <Link to={'/bookmarked'}><img className="h-5 w-5" src='./assets/icon-nav-bookmark.svg' alt='bookmark-icon'></img></Link>




                </div>

            </nav>
            <div className='w-full pt-[32px]'>
                <SearchBar />


                <Outlet />
            </div>



        </div>
    )
}

export default Landing