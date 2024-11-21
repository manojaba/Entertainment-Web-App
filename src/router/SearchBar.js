import { useContext } from "react";
import AppContext from "./Context";

export default function SearchBar() {
    const { movies, handleClick, setSearchFilter } = useContext(AppContext);
    return (
        <form className="flex items-center w-full py-[24px] pl-[16px] md:pl-0  space-x-[24px] ">
            <img className="w-[24px] md:w-[32px] md:h-[32px] h-[24px]" src='./assets/icon-search.svg' alt='search-icon'></img>
            <input className="bg-[#10141E] w-full font-light font-Outfit text-[16px] md:text-[24px] text-white placeholder-white placeholder-opacity-50 group-hover:placeholder-opacity-100 focus:outline-none" type='text' placeholder="Search for movies or TV series " onChange={(e) => setSearchFilter(e.target.value)}></input>
        </form>
    )
}