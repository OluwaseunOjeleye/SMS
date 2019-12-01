import React from "react";
import { Button, Card } from "antd";             //Importing important tools from antd UI Framework
import CustomForm from "../../components/Form";  //Importing CustomForm from Form.js file

import  MoviesService  from  "../../http_client/MoviesService";


//movie information data class 
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

const  moviesService=new  MoviesService();

class MovieDetail extends React.Component {

  state = {
    movie: {}
  };

  //getting data from database
  componentDidMount() {
    var self = this;
    const movieID = self.props.match.params.movieID;
    moviesService.getMovie(movieID).then(function (result) {
    console.log(result);
    self.setState({movie: result});
    });
  }

  //function for deleting movie from Database
  handleDelete=(event)=>{
    var self = this;
    const movieID = self.props.match.params.movieID;
    moviesService.deleteMovie(movieID);
    this.props.history.push(`/movies/`);
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        //movie information titles  
        <Card title={this.state.movie.title}>
          Director: {this.state.movie.directors}<br/>
              Actors: {this.state.movie.actors}<br/>
              Genre: {this.state.movie.genres}<br/>
              Year: {this.state.movie.year}<br/>
              Plot: {this.state.movie.plot}
        </Card>

        //Delete & Update movie buttons
        <CustomForm requestType="put" movieID={this.props.match.params.movieID} btnText="Update"/>
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>

      </div>
    );
  }
}

export default MovieDetail;