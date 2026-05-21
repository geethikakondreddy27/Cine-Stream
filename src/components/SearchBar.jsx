import {useEffect , useState} from "react";
import { FaSearch } from "react-icons/fa";
import useDebounce from "../hooks/useDebounce";
import "../styles/searchbar.css";

function SearchBar({onSearch}){
    const [query,setQuery] = useState("");
    const debouncedQuery=useDebounce(query,500);
    useEffect(()=>{
        if(debouncedQuery.trim().length>0){
            onSearch(debouncedQuery.trim());
        }
    },[debouncedQuery, onSearch]);
   

    return(
           <div className="search-bar" >
            <input type="text"
                    placeholder="search movies..."
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
             />

             <button>
                <FaSearch />
             </button>
           </div>
    );

    
}

export default SearchBar;