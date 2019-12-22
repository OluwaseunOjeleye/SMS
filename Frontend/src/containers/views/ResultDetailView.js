import React from "react";
import { Button, Card } from "antd";
import CustomForm from "../../components/Form";

import  MoviesService  from  "../../http_client/MoviesService";


//Creating a movie service object for communicating with backend
const  moviesService=new  MoviesService();

/*React Class Component for Displying Details
  of a specific movie to user */
class ResultDetail extends React.Component {

  //page state
  state = {
    movie: {}
  };

  //function for getting details of a specific movie from db
  componentDidMount() {
    var self = this;
    const movieID = self.props.match.params.movieID;
    moviesService.getMovie(movieID).then(function (result) {
    console.log(result);
    self.setState({movie: result});
    });
  }


  render() {
    return (
      <div>
        <Card title={this.state.movie.title}>
          Director: {this.state.movie.directors}<br/>
              Actors: {this.state.movie.actors}<br/>
              Genre: {this.state.movie.genres}<br/>
              Year: {this.state.movie.year}<br/>
              Plot: {this.state.movie.plot}
        </Card>
      </div>
    );
  }
}

export default ResultDetail;