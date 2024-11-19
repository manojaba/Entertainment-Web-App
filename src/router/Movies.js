import React from 'react'
import Panel from './Panel'
import SearchBar from './SearchBar'
import Trending from './Trending'

function Movies() {
    return (
        <div>
            <SearchBar />
            <Trending />
            <Panel />
        </div>
    )
}

export default Movies