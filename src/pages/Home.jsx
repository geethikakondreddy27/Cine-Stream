import { useEffect, useState , useRef } from "react";
import Navbar from "../components/Navbar";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

import  MoodSearch  from "../components/MoodSearch";
import {
    fetchPopularMovies,
    searchMovies,
    getMovieFromMood,
} from "../utils/helpers";

function Home(){
    const [movies,setMovies]=useState([]);
    const [page,setPage] = useState(1);
    const [loading , setLoading] = useState(false);
    const[isMoodSearch,setIsMoodSearch]=useState(false);
    
    const observerRef = useRef();
const loadPopularMovies = async () =>{
    setLoading(true);
    const data = await fetchPopularMovies(page);
    console.log(data);
    setMovies((prev) =>[
        ...prev,
        ...data,
    ]);
    setLoading(false);
  };



    useEffect(() => {
        loadPopularMovies();
        }, [page]);

        
  useEffect(()=>{
    setMovies([]);
   setPage(1);
  },[]); 
  

  const handleSearch= async(query)=>{
         setIsMoodSearch(false);
        
     const data = await searchMovies(query.trim());
     setMovies(data);
  };

 const handleMoodSearch = async (mood) => {
    setMovies([]);
    setIsMoodSearch(true);
    setLoading(true);

    try {

        const titlesArray = await getMovieFromMood(mood);

        const moviePromises = titlesArray.map(async (title) => {

            const data = await searchMovies(title); 

            const filteredMovies=data.filter(
    (movie) =>
        movie.vote_average >= 6.5 &&
        movie.vote_count >100 &&
        movie.poster_path &&
        movie.overview &&
        !movie.adult
); 
  return filteredMovies.slice(0,1);

        });

        const movieResults = await Promise.all(moviePromises);

        const allMovies = movieResults.flat();

        const uniqueMovies = allMovies.filter(
            (movie, index, self) =>
                index === self.findIndex((m) => m.id === movie.id)
        );

        console.log(uniqueMovies);

        setMovies(uniqueMovies);

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }

};    

  useEffect(() =>{
    const observer = new IntersectionObserver(
        (entries) =>{
            if(
                entries[0].isIntersecting && !loading && !isMoodSearch
            ){
                setPage((prev)=>prev+1);
            }
        },
        {
             threshold: 1,
        }
    );
    if(observerRef.current){
        observer.observe(observerRef.current);
    }
    return()=>{
        if(observerRef.current){
            observer.unobserve(observerRef.current);
        }
    };
  },[loading , isMoodSearch]);
          
   
 
    return (
    <>
       <Navbar />
         
      <div className="page-container">
        <h1>Popular Movies</h1>
        <MoodSearch onMoodSearch={handleMoodSearch} />
        {loading && <p className="loading-text">
            Finding Movies for your Mood..so chill</p>}
         <SearchBar  onSearch={handleSearch} />
        <MovieGrid movies={movies} />
        <div ref={observerRef}></div>
        {loading && <Loader />}
       
      </div>
    </>
  );
        
    
}

export default Home;