import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';


//Movie Service Class
export default class MoviesService{

    constructor(){}

    //get movies from database in JSON format
    getMovies() {
        const url = `${API_URL}/api/`;
        return axios.get(url).then(response => response.data);
    }  

    //get details of a specific movie with primary key or id, pk in DB
    getMovie(pk) {
        const url = `${API_URL}/api/${pk}`;
        return axios.get(url).then(response => response.data);
    }

    //delete movie with primary key or id, pk in DB
    deleteMovie(pk){
        const url = `${API_URL}/api/${pk}/delete/`;
        return axios.delete(url);
    }

    //create new movie
    createMovie(movie){
        const url = `${API_URL}/api/create/`;
        return axios.post(url,movie);
    }

    //update details of movie with primary key or id, pk in DB
    updateMovie(movie, pk){
        const url = `${API_URL}/api/${pk}/update/`;
        return axios.put(url,movie);
    }

    //get result of movies to be suggested to user
    getResults() {
        const url = `${API_URL}/api/result/`;
        return axios.get(url).then(response => response.data);
    }  

    // post user's data to backend
    sendData(searchtype, moviename, numberofmovies){
        const url = `${API_URL}/api/suggest/`;
        let form_data = new FormData();
        form_data.append('searchtype', searchtype);
        form_data.append('moviename', moviename);
        form_data.append('numberofmovies', numberofmovies);

        return axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        });
    }
}