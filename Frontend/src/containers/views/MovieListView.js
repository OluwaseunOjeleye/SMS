import React from "react"; 
import Movies from "../../components/Movies";   //Importing Movies from Movies.js file
import CustomForm from "../../components/Form"; //Importing CustomForm from Form.js file

import  MoviesService  from  "../../http_client/MoviesService";

{/*movie information data class*/}
const listData = [];
for (let i = 1; i <= 23; i++) {
  listData.push({
    href: 'http://smsmovie.com',
    title: `Movie Name ${i}`,
    director: 'movie director',
    actors: 'movie actors',
    plot: 'movie plot',
    year: '2019',
    image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  });
}

//Creating a movie service object for communicating with backend
const  moviesService=new  MoviesService();

/*React Class Component for adding a new movie
It is also for displaying all the movies in the DB */
class MovieList extends React.Component {
  //page state
  state={
    movies: []
  };

  //function to fetch all movies in DB
  fetchMovies=()=> {
    var self = this;
    moviesService.getMovies().then(function (result) {
      console.log(result);
      self.setState({movies: result});
    }).catch(function(error){
      console.log(error.response);
    });
  }

  componentDidMount() {
    this.fetchMovies();
  }


  render() {
    return (
      <div>
      {/*view the movie list*/}
        <Movies data={this.state.movies}/>
        <br/>
      {/*add new movie info and creat the movie by adding it to the movie list*/}
        <h2>Add New Movie</h2>
        <CustomForm requestType="post" movieID={null} btnText="Create"/>
      </div>
    );
  }
}
export default MovieList;
