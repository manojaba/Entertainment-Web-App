export default function ThumbnailRegular({ title, thumbnail, year, category, rating, isBookmarked, handleClick }) {

    return (
        <div className="relative  group  ">


            <div className="relative cursor-pointer">
                <img className="  rounded-[8px]   " src={thumbnail.medium} alt={title}>

                </img>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[117px] h-[48px] rounded-[26px] bg-white bg-opacity-25 space-x-[18px] py-[9px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="30"
                        height="30"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                            fill="#FFF" /></svg>
                    <span className="font-Outfit font-medium text-[18px] text-white">Play</span>
                </div>
            </div>




            <div onClick={() => handleClick(title)} className=" absolute top-2 md:top-[16px] md:right-[24px]  right-2 bg-[#10141E] bg-opacity-50 rounded-3xl w-8 h-8 content-center  ">{isBookmarked ? <img className="mx-auto" src="./assets/icon-bookmark-full.svg"></img> : <img className="mx-auto" src="./assets/icon-bookmark-empty.svg"></img>}</div>


            <div class="flex items-center text-white space-x-[7px] font-Outfit  font-light  md:text-[13px] text-[11px] opacity-75 mb-[4px] mt-[8px] cursor-pointer">
                <span>{year}</span>
                <span class="h-1 w-1 bg-white rounded-full"></span>
                <img src={category === 'Movie' ? './assets/icon-category-movie.svg' : './assets/icon-category-tv.svg'} alt="Movie Logo" class="h-4 w-4" />
                <span>{category}</span>
                <span class="h-1 w-1 bg-white rounded-full"></span>
                <span>{rating}</span>
            </div>

            <p className="text-white font-medium font-Outfit text-[14px] md:text-[18px] lg:text-[24px] cursor-pointer">{title}</p>



        </div>
    )
}