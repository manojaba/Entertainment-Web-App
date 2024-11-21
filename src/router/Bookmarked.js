import React, { useContext } from 'react'
import AppContext from './Context'
import SearchBar from './SearchBar'
import ThumbnailRegular from './ThumbnailRegular'

function Bookmarked() {

    const { movies, handleClick, searchFilter } = useContext(AppContext)
    let bookmarkList = movies.filter((movie) => movie.isBookmarked == true);
    let searchList = bookmarkList.filter((movie) => movie.title.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1)
    console.log(searchList);


    return (
        <div>
            <SearchBar />
            <h1 className='font-Outfit text-white font-light text-[20px] md:text-[32px] mb-[24px] mx-[16px]'>Bookmarked Movies</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[30px] mx-[16px]'>
                {
                    searchList.map((movie) => {
                        return (
                            <ThumbnailRegular key={movie.title} thumbnail={movie.thumbnail.regular} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked} handleClick={handleClick} />
                        )
                    })
                }

            </div>
        </div >
    )
}

export default Bookmarked