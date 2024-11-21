import React, { useContext } from 'react'
import AppContext from './Context'
import ThumbnailRegular from './ThumbnailRegular'

function Panel() {
    const { movies, handleClick } = useContext(AppContext)

    return (
        <div className=' px-4 md:px-6 max-w-[1500px] bg-red-500'>
            <h1 className=' text-white font-Outfit font-light text-[20px] mb-6 '>Recommended for you</h1>
            <div className="  grid grid-cols-2  gap-[16px] md:grid-cols-3 xl:grid-cols-4 justify-items-center ">
                {
                    movies.map(movie => {
                        return (
                            <ThumbnailRegular key={movie.title} thumbnail={movie.thumbnail.regular} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked} handleClick={handleClick} ></ThumbnailRegular>
                        )

                    })
                }
            </div >
        </div>
    )
}

export default Panel