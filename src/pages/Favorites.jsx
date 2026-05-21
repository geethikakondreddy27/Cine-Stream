import { useContext } from "react";
import Navbar from "../components/Navbar";
import MovieGrid from "../components/MovieGrid";

import{
    FavoritesContext,
}from "../context/FavoritesContext";

function Favorites(){
    const {favorites} = useContext(FavoritesContext);
    return(
        <>
        <Navbar />
        <div className="page-container">
            <h1>My Favorites</h1>
            {favorites.length > 0 ?(
                <MovieGrid 
                movies={favorites}
                />
            ):(
                <p>
                    No favorite movies yet.. 
                </p>
            )}


        </div>
        </>
    );
}

export default Favorites;