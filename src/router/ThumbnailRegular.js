export default function ThumbnailRegular({ title, thumbnail, year, category, rating }) {

    return (
        <div>
            <div className=''>
                <img className="w-72 h-44 rounded-lg" src={thumbnail}></img>
            </div>
            <ul className="flex ">
                <li>{year}</li>
                <li>{category}</li>
                <li>{rating}</li>
            </ul>
            <p>{title}</p>
        </div>
    )
}