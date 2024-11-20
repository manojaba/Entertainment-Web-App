import React, { useContext } from 'react'
import AppContext from './Context'
import ThumbnailRegular from './ThumbnailRegular'

function Bookmarked() {

    const { movies, handleClick } = useContext(AppContext)
    let bookmarkList = movies.filter((movie) => movie.isBookmarked == true)


    return (
        <div className='grid grid-cols-4'>
            {
                bookmarkList.map((movie) => {
                    return (
                        <ThumbnailRegular key={movie.title} thumbnail={movie.thumbnail.regular.large} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked} f handleClick={handleClick}></ThumbnailRegular>

                    )
                })
            }
        </div>
    )
}

export default Bookmarked