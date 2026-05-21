import { useState } from "react";
import "../styles/moodsearch.css";
function MoodSearch({onMoodSearch}){
    const [mood , setMood]=useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!mood.trim())
            return;
        onMoodSearch(mood);
        //setMood("");
    };
    return(
        <form className="mood-form" onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Ola..!What is your mood now ?"
            value={mood}
            onChange={(e)=>
                setMood(e.target.value)
            }
            className="mood-input"
            />

            <button type="submit" className="mood-btn">
                AI Match 

            </button>
        </form>

    );
}

export default MoodSearch;