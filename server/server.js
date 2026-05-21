import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app=express();
app.use(cors());

app.use(express.json());

app.post("/mood",async(req,res)=>{
    try{
        const{mood}=req.body;
        const response = await fetch(
             "https://openrouter.ai/api/v1/chat/completions",
            {
                method:"POST",
                headers: {
                    "Authorization":`Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type":
                       "application/json",
                },
                body: JSON.stringify({
                    model: "openai/gpt-3.5-turbo",
                    messages:[
                        {
                            role:"system",
                            content:
                            "You are a movie recommendation expert. Recommend accurate movies based on moods.",

                        },
                        {
                            role:"user",
                            content:  `
You are an expert movie recommendation assistant.

Suggest 10 movies that perfectly match this mood:
"${mood}"

Rules:
- Only recommend real, mainstream, emotionally safe movies
- Avoid explicit sexual content, erotic movies, pornography, exploitation films, or disturbing content unless asked for.
- Avoid documentaries, specials, interviews, short films, and unofficial content
- Romantic movies are allowed only if they are wholesome, emotional, or widely loved by general audiences
- Prefer critically acclaimed, family-friendly, comforting, magical, adventurous, emotional, or inspiring movies
- Only return movie titles
- No numbering
- No explanations
`
                            
                        },
                    ],
                }), 
            }
        );
                   
        const data= await response.json();
        console.log(data);
        res.json(data);

    }catch(error){
        console.log(error);
        res.status(500).json({
            error:"Something went wrong",
        });
    }
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});