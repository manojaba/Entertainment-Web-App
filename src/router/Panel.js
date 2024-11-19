import React, { useContext } from 'react'
import AppContext from './Context'
import ThumbnailRegular from './ThumbnailRegular'

function Panel() {
    const movies = useContext(AppContext)



    return (
        <div className='grid grid-cols-4'>
            {
                movies.map(movie => {
                    return (
                        <ThumbnailRegular key={movie.title} thumbnail={movie.thumbnail.regular.large} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked}></ThumbnailRegular>
                    )

                })
            }
        </div >
    )
}

export default Panel