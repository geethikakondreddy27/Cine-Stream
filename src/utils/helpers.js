import tmdbAPI from "../api/tmdb";

export const fetchPopularMovies = async (page = 1) => {
    try{
        const response  = await tmdbAPI.get(`/movie/popular?page=${page}`);
        console.log(response.data);
        return response.data.results;
    }catch(error){
        console.log(error);
        return[];
    }
};

export const searchMovies = async(query)=>{
    try{
        const response = await tmdbAPI.get(
            `/search/movie?query=${query}`
        );
        return response.data.results;
    } catch(error){
        console.log(error);
        return [];
    }
};

export const getMovieFromMood = async(mood)=>{
    try{

        const response = await fetch(
              "https://cine-stream-uiun.onrender.com/mood",
            {
                method:"POST",
                headers: {
                    "Content-Type":
                       "application/json",
                },
                body: JSON.stringify({mood}),
            }
            );
       const data = await response.json();

const movieTitles =
  data.choices[0].message.content
    .split("\n")
    .map((movie)=>movie.replace(/[-*0-9.]/g, "").trim()
        )
    .filter(movie => movie.length>0);

console.log(movieTitles);

return movieTitles;

return movieTitles;
    } catch(error){
         console.log(error);
         return[];
    }


};