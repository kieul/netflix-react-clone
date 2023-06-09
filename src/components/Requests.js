const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=8b044c13595b4c24cd57500cc24b85fb&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=8b044c13595b4c24cd57500cc24b85fb&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=8b044c13595b4c24cd57500cc24b85fb`,
  requestHorror: `https://api.themoviedb.org/3/search/company?api_key=8b044c13595b4c24cd57500cc24b85fb&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=8b044c13595b4c24cd57500cc24b85fb&language=en-US&page=1`,
};

export default requests;
