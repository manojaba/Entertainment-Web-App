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
            <Trending />

            <Panel />






        </div>
    )
}

export default Home