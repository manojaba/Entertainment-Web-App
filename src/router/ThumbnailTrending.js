export default function ThumbnailTrending({ title, thumbnail, year, category, rating, isBookmarked }) {

    console.log(thumbnail);

    return (
        <div className="relative ">





            <img className="rounded-[8px] min-w-[240px] min-h-[140px] md:min-w-[240px] xl:min-w-[470px]  " src={thumbnail.large} alt='thumbnail trending' />



            <div className=" absolute top-2 md:top-[16px] md:right-[24px] right-2 bg-[#10141E] bg-opacity-50 rounded-3xl w-8 h-8 content-center  ">{isBookmarked ? <img className="mx-auto" src="./assets/icon-bookmark-full.svg"></img> : <img className="mx-auto" src="./assets/icon-bookmark-empty.svg"></img>}</div>
            <div className="absolute bottom-[16px] md:bottom-[24px] md:left[24px] left-[16px]">
                <div class="flex items-center text-white space-x-[7px] font-Outfit  font-light md:font-light md:text-[15px] text-[12px] opacity-75">
                    <span>{year}</span>
                    <span class="h-1 w-1 bg-white rounded-full"></span>
                    <img src={category === 'Movie' ? './assets/icon-category-movie.svg' : './assets/icon-category-tv.svg'} alt="Movie Logo" class="h-4 w-4" />
                    <span>{category}</span>
                    <span class="h-1 w-1 bg-white rounded-full"></span>
                    <span>{rating}</span>
                </div>

                <p className="text-white font-medium font-Outfit text-[15px] md:text-[24px]">{title}</p>
            </div>


        </div>
    )
}