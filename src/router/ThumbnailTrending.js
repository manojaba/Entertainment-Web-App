export default function ThumbnailTrending({ title, thumbnail, year, category, rating, isBookmarked }) {

    return (
        <div>
            <div className='relative '>
                <img style={{ width: 470, height: 230 }} className=" rounded-lg" src={thumbnail}></img>
                <div className=" absolute top-2 right-2 bg-gray-400 bg-opacity-40 rounded-3xl w-8 h-8 content-center  ">{isBookmarked ? <img className="mx-auto" src="./assets/icon-bookmark-full.svg"></img> : <img className="mx-auto" src="./assets/icon-bookmark-empty.svg"></img>}</div>
                <div className="absolute bottom-2 left-2">
                    <ul className="flex text-white space-x-2">
                        <li >{year}</li>
                        <li>{category}</li>
                        <li>{rating}</li>
                    </ul>
                    <p className="text-white font-bold">{title}</p>
                </div>
            </div>

        </div>
    )
}