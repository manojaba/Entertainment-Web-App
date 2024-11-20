import { useContext } from "react";
import AppContext from "./Context";

export default function SearchBar() {
    const { movies, handleClick, setSearchFilter } = useContext(AppContext);
    return (
        <form className="flex space-x-7">
            <button><img className="w-6 h-6" src='./assets/icon-search.svg' alt='search-icon'></img></button>
            <input className="bg-[#10141E] font-['Outfit'] font-extralight" type='text' placeholder="Search for movies or TV series " onChange={(e) => setSearchFilter(e.target.value)}></input>
        </form>
    )
}