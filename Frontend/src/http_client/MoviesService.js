import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';

export default class MoviesService{

    constructor(){}

    getMovies() {
        const url = `${API_URL}/api/`;
        return axios.get(url).then(response => response.data);
    }  

    getMovie(pk) {
        const url = `${API_URL}/api/${pk}`;
        return axios.get(url).then(response => response.data);
    }

    deleteMovie(pk){
        const url = `${API_URL}/api/${pk}/delete/`;
        return axios.delete(url);
    }

    createMovie(movie){
        const url = `${API_URL}/api/create/`;
        return axios.post(url,movie);
    }

    updateMovie(movie, pk){
        const url = `${API_URL}/api/${pk}/update/`;
        return axios.put(url,movie);
    }
}