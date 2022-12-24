 const API_KEY ="af5f6a137e02c292119db472e96cca2b";

 const BASE_URL="https://api.themoviedb.org/3/trending/all/week";


const HomepageURLS= {

    trending:"https://api.themoviedb.org/3/trending/all/week?api_key=af5f6a137e02c292119db472e96cca2b&language=en-US&page=1",
    upcoming:'https://api.themoviedb.org/3/movie/upcoming?api_key=af5f6a137e02c292119db472e96cca2b&language=en-US&page=1',
    popular_movies:'https://api.themoviedb.org/3/movie/popular?api_key=af5f6a137e02c292119db472e96cca2b',
    popular_shows:'https://api.themoviedb.org/3/tv/popular?api_key=af5f6a137e02c292119db472e96cca2b&language=en-US&page=1'
}
export {API_KEY ,BASE_URL,HomepageURLS};