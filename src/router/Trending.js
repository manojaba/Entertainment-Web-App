import { useContext, useEffect, useState } from "react";
import AppContext from "./Context";
import ThumbnailTrending from "./ThumbnailTrending";




function Trending() {
    let [currentIndex, setCurrentIndex] = useState(2);

    const movies = useContext(AppContext);
    let trendingMovies = movies.filter((each) => each.isTrending === true)
    let movie = trendingMovies[currentIndex];

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => clearInterval(autoplay)
    }, [currentIndex])

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? trendingMovies.length - 1 : prevIndex - 1)

        )

    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === trendingMovies.length - 1 ? 0 : prevIndex + 1)
        )
    };



    return (
        <div className="max-w-[1440px] h-[780px] w-full mx-auto py-16 px-4 relative group">
            <ThumbnailTrending key={movie.title} thumbnail={movie.thumbnail.trending.large} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked} />


        </div>
    )
}

export default Trending