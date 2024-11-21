import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AppContext from './Context';
import ThumbnailTrending from './ThumbnailTrending';


function Trending() {

    const { movies, handleData } = useContext(AppContext);
    let trendingMovies = movies.filter((each) => each.isTrending === true)


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1.5, // Show 1.5 slides
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: false, // Centering disabled
        arrows: false,

        responsive: [
            {
                breakpoint: 1800, // Screens smaller than 1536px
                settings: {
                    slidesToShow: 2.5, // Show 2.5 slides
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 1536, // Screens smaller than 1536px
                settings: {
                    slidesToShow: 2.5, // Show 2.5 slides
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 1280, // Screens smaller than 1024px
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 768, // Screens smaller than 768px
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                },
            },
        ],




    };

    return (
        <div className="slider-container max-w-[1240px] 2xl:max-w-[1440px] bg-blue-200 ml-[16px] rounded-2xl ">
            <Slider {...settings} className=" md:ml-0 rounded-[8px] mb-[24px] md:mb-[40px]  ">
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

export default Trending