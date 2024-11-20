import React, { useContext } from 'react';
import AppContext from './Context';
import SearchBar from './SearchBar';
import ThumbnailRegular from './ThumbnailRegular';

function Tvseries() {
    const { movies, handleClick, searchFilter } = useContext(AppContext);
    let seriesList = movies.filter((movie) => movie.category == 'TV Series');
    let searchList = seriesList.filter((movie) => movie.title.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1)
    console.log(searchList);



    return (
        <div>
            <SearchBar />
            <div className='grid grid-cols-4'>
                {
                    searchList.map((movie) => {
                        return (
                            <ThumbnailRegular key={movie.title} thumbnail={movie.thumbnail.regular.large} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked} handleClick={handleClick} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Tvseries