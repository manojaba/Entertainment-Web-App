export default function SearchBar() {
    return (
        <form className="flex space-x-7">
            <button><img className="w-6 h-6" src='./assets/icon-search.svg' alt='search-icon'></img></button>
            <input className="bg-[#10141E] font-['Outfit'] font-extralight" type='text' placeholder="Search for movies or TV series "></input>
        </form>
    )
}