import{createContext, useEffect,useState,} from "react";
export const FavoritesContext = createContext();

function FavoritesProvider({children}){
    const [favorites,setFavorites]=useState([]);

    useEffect(()=>{
        const storedFavorites = localStorage.getItem("favorites");
        if(storedFavorites){
            setFavorites(
                JSON.parse(storedFavorites)
            );
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );
    },[favorites]);

    const addToFavorites = (movie) =>{
        const exists = favorites.some(
            (fav) =>fav.id === movie.id 
        );
        if(!exists){
            setFavorites([
                ...favorites,
                movie,
            ]);
        }
    };

    const removeFromFavorites = (
        movieId 
    ) => {
        setFavorites(
            favorites.filter(
                (movie)=>movie.id !== movieId 
            )
        );
    };

    const isFavorite = (movieId)=>{
        return favorites.some(
            (movie)=>movie.id === movieId 
        );
    };

    return(
        <FavoritesContext.Provider
        value = {{
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite, 
        }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesProvider;
