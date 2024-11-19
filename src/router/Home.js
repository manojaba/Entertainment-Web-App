import React, { useContext } from 'react'
import AppContext from './Context'
import Panel from './Panel'
import Trending from './Trending'

function Home() {
    const data = useContext(AppContext)
    return (
        <div >
            <Trending />

            <Panel />






        </div>
    )
}

export default Home