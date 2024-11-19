import { useContext } from "react";
import AppContext from "./Context";
import ThumbnailTrending from "./ThumbnailTrending";




function Trending() {

    const movies = useContext(AppContext);
    let trendingMovies = movies.filter((each) => each.isTrending === true)



    return (
        <div className="flex">
            {
                trendingMovies.map((movie) => {
                    return (
                        <ThumbnailTrending key={movie.title} thumbnail={movie.thumbnail.trending.large} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked} />

                    )
                })
            }

        </div>
    )
}

export default Trending