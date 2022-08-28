const API_KEY="b8bed0e227972da2924cc120b9dfa8a4";
const requests={
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=fr-FR` ,
    fetchNetflixOriginal: `/discover/movie?api_key=${API_KEY}&with_network=213&language=fr-FR`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28&language=fr-FR`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35&language=fr-FR`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27&language=fr-FR`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=fr-FR`,
    fetchDocument : `/discover/movie?api_key=${API_KEY}&with_genres=99&language=fr-FR`,
}
export default requests;