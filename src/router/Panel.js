import React, { useContext } from 'react';
import AppContext from './Context';
import ThumbnailRegular from './ThumbnailRegular';

function Panel() {
    const { movies, handleClick, setSearchFilter, searchFilter } = useContext(AppContext);
    let searchList = movies.filter((movie) => movie.title.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1)
    console.log(searchList);

    return (
        <div className='   w-full '>
            <h1 className=' text-white font-Outfit font-light text-[20px] mb-6 md:text-[32px] '>Recommended for you</h1>
            <div className="  grid grid-cols-2  gap-[16px] md:gap-[30px] xl:gap-[40px] md:grid-cols-3 xl:grid-cols-4 justify-items-center ">
                {
                    searchList.map(movie => {
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