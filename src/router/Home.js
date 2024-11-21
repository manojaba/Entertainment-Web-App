import React, { useContext } from 'react'
import AppContext from './Context'
import Panel from './Panel'
import SearchBar from './SearchBar'
import Trending from './Trending'

function Home() {
    const data = useContext(AppContext)
    return (
        <div >
            <SearchBar />
            <h1 className="text-white ml-[16px] md:ml-0 mb-[16px] md:mb-[25px] font-Outfit font-light text-[20px] md:text-[32px]">Trending</h1>
            <Trending />




            <Panel />






        </div>
    )
}

export default Home