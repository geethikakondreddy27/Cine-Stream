# Prompts Used

1. I was building an AI-powered movie recommendation feature where users can enter moods or prompts like “I am happy suggest animated movies.” However, the AI-generated movie titles sometimes returned unrelated or adult-content movies from TMDB search results. Can you help me filter and clean the AI recommendation flow so the suggestions feel more accurate and family-friendly?

2. While implementing AI mood-based movie recommendations, the results took several seconds to appear and users had no visual feedback during loading. The page looked frozen until the movies suddenly appeared. Can you help me create a better loading experience for the AI search flow using React state and conditional rendering?

3. I implemented infinite scrolling for popular movies using Intersection Observer, but after performing AI searches the homepage kept loading unrelated popular movies underneath the AI recommendations. I wanted infinite scroll to work only on the homepage and not during custom searches. Can you help me separate homepage scrolling logic from AI search results properly?

4. While integrating TMDB movie search, I noticed exact movie title matching caused many valid results to disappear if the title formatting differed slightly. I wanted the search experience to behave more like Netflix where partial titles and related matches still appear naturally. Can you help me improve the search functionality using flexible query matching?

5. I created a favorites feature where users can save movies they like, but after redesigning the movie cards with glassmorphism effects and hover animations, the favorites page layout started behaving inconsistently. Can you help me create reusable movie card styling that works cleanly across both homepage and favorites page?

6. While redesigning the Cine-Stream UI, I wanted the application to feel more cinematic and modern using mesh gradients, glassmorphism cards, neon accents, hover effects, and soft shadows. Can you help me redesign the CSS structure to achieve a premium streaming-platform appearance without making the UI cluttered?

7. I implemented responsive layouts for the movie application, but maintaining responsiveness across mobiles, tablets, laptops, and ultrawide screens became difficult because different components used fixed widths and heights. Can you help me build a scalable responsive design system using CSS Grid, clamp(), flexible containers, and modern responsive techniques?

8. While implementing debounce functionality for the movie search bar, both the AI search and normal TMDB search started interfering with each other. Sometimes one feature worked while the other stopped functioning completely. Can you help me stabilize the debounce logic and separate the search flows without rewriting the entire architecture?

9. I added a Home button using React Router navigation, but clicking Home while already on the homepage did not reset the movie results properly after AI searches or normal searches. The navigation worked only when switching through Favorites first. Can you help me fix same-route navigation behavior cleanly in React Router?

10. While integrating OpenRouter API with my Node.js backend server, I wanted the AI prompts to generate clean movie recommendations without unnecessary explanations or formatting. However, the responses sometimes included numbering, extra text, or inconsistent formatting. Can you help me structure better AI prompts and parse the responses more reliably?

11. I created a modern loader animation for Cine-Stream, but after integrating multiple asynchronous movie fetches the loading state became inconsistent across homepage scrolling, AI searches, and normal searches. Can you help me organize loading states properly using React hooks and async functions?

12. While deploying the Cine-Stream application on Vercel, React Router routes such as Favorites and Home caused refresh and navigation issues after deployment. I needed proper rewrite configuration support for SPA routing. Can you help me configure Vercel deployment correctly for a React + Vite application?

13. I implemented a responsive navigation bar with React Router links, but homepage navigation behaved inconsistently when users were already on the same route. I wanted navigation to feel smooth and predictable no matter whether the user came from AI search, favorites, or normal search results. Can you help me stabilize the navbar routing behavior?

14. While styling the movie cards, I wanted hover animations, glass blur effects, responsive poster scaling, and cinematic gradients without making the cards laggy or visually overwhelming. Can you help me optimize the card UI design for both aesthetics and responsiveness?

15. I wanted Cine-Stream to feel more like a real streaming platform instead of a basic React project. I needed guidance for combining TMDB APIs, AI-generated recommendations, responsive UI design, debounce search, infinite scrolling, favorites management, and modern styling into one clean user experience. Can you help me organize the project architecture professionally?

---

# Project

Cine-Stream Movie Recommendation Web Application

Built using:
- React.js
- Vite
- React Router DOM
- TMDB API
- OpenRouter API
- Node.js
- CSS3
- Local Storage 