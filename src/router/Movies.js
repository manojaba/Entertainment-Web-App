import React, { useContext } from 'react';
import AppContext from './Context';
import ThumbnailRegular from './ThumbnailRegular';

function Movies() {
    const { movies, handleClick } = useContext(AppContext);



    let moviesList = movies.filter((movie) => movie.category == 'Movie');



    return (
        <div className='grid grid-cols-4'>
            {
                moviesList.map((movie) => {
                    return (
                        <ThumbnailRegular key={movie.title} thumbnail={movie.thumbnail.regular.large} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked} handleClick={handleClick} />
                    )
                })
            }





        </div>
    )
}

export default Movies