export default function ThumbnailRegular({ title, thumbnail, year, category, rating, isBookmarked, handleClick }) {

    return (
        <div>
            <div className='relative w-72'>
                <img className="w-72 h-44 rounded-lg" src={thumbnail}></img>
                <div onClick={() => handleClick(title)} className=" absolute top-2 right-2 bg-gray-400 bg-opacity-40 rounded-3xl w-8 h-8 content-center  ">{isBookmarked ? <img className="mx-auto" src="./assets/icon-bookmark-full.svg"></img> : <img className="mx-auto" src="./assets/icon-bookmark-empty.svg"></img>}</div>
            </div>
            <ul className="flex text-white ">
                <li>{year}</li>
                <li>{category}</li>
                <li>{rating}</li>
            </ul>
            <p className="text-white">{title}</p>
        </div>
    )
}