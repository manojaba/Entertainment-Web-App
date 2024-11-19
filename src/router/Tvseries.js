import React, { useContext } from 'react'
import AppContext from './Context'

function Tvseries() {
    const values = useContext(AppContext)
    return (
        <div>
            <h1>tv series page</h1>
            <p>{values[0].title}</p>
        </div>
    )
}

export default Tvseries