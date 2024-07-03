import axios from "axios";

const apiKey = "fc774c3845ae6ffdefec17c7db1f7fec";

const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getPopularMovies = () => {
  return moviesApi.get(`/movie/popular?api_key=${apiKey}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};
