import React, { useContext } from 'react';
import AppContext from './Context';
import ThumbnailRegular from './ThumbnailRegular';

function Tvseries() {
    const { movies, handleClick } = useContext(AppContext);
    let seriesList = movies.filter((movie) => movie.category == 'TV Series');



    return (
        <div className='grid grid-cols-4'>
            {
                seriesList.map((movie) => {
                    return (
                        <ThumbnailRegular key={movie.title} thumbnail={movie.thumbnail.regular.large} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked} handleClick={handleClick} />
                    )
                })
            }





        </div>
    )
}

export default Tvseries