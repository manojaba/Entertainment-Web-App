import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import AppContext from "./Context";
import ThumbnailTrending from "./ThumbnailTrending";




function Trending() {


    const { movies, handleData } = useContext(AppContext);
    let trendingMovies = movies.filter((each) => each.isTrending === true)

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false


    };





    return (
        <div >
            <Slider {...settings}>
                {
                    trendingMovies.map((movie) => {
                        return (
                            <ThumbnailTrending key={movie.title} thumbnail={movie.thumbnail.trending.large} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked}></ThumbnailTrending>

                        )
                    })
                }

            </Slider>



        </div>
    )
}

export default Trending