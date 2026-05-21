import {  useContext } from "react";
import {FaHeart} from "react-icons/fa";

import{
    FavoritesContext,
}from "../context/FavoritesContext";


import "../styles/moviecard.css";

function MovieCard({movie}){
    const imageURL = `${import.meta.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`;
    
   const {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
   } =useContext(FavoritesContext);
   const favorite = isFavorite(movie.id);
   const handleFavoriteClick = ()=>{
    if (favorite){
        removeFromFavorites(movie.id);
    }
    else{
        addToFavorites(movie);
    }
   };

    return(
        <div className="movie-card">
            <img
               src={imageURL}
               alt={movie.title}
               loading="lazy"
               />

               <button className={`favorite-btn ${favorite ? "active":""}`}  onClick={handleFavoriteClick}>
                 <FaHeart  />

               </button>

               <div className="movie-info">
                <h3>{movie.title}</h3>

                <div className="movie-details">
                    <span>
                        {movie.release_date?.split("-")[0]}
                    </span>

                    <span>⭐ {movie.vote_average.toFixed(1)}</span>

                </div>

               </div>

        </div>
    );
}

export default MovieCard;