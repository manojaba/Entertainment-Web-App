import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import AppContext from "./Context";
import ThumbnailTrending from "./ThumbnailTrending";




function Trending1() {


    const { movies, handleData } = useContext(AppContext);
    let trendingMovies = movies.filter((each) => each.isTrending === true)



    const settings = {
        dots: false,

        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",


    };





    return (
        <div className="slider-container max-w-[1200px] ">


            <Slider {...settings} className="ml-[16px] md:ml-0 rounded-[8px] mb-[24px] md:mb-[40px]  ">
                {
                    trendingMovies.map((movie) => {
                        return (
                            <ThumbnailTrending key={movie.title} thumbnail={movie.thumbnail.trending} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} isBookmarked={movie.isBookmarked}></ThumbnailTrending>

                        )
                    })
                }

            </Slider>



        </div>
    )
}

export default Trending1