import React from 'react';
import { Row, Col } from 'antd';

import Movies from "../../components/Movies";
import Suggestions from "../../components/Suggestions"
import  MoviesService  from  "../../http_client/MoviesService";

//Creating a movie service object for communicating with backend
const  moviesService=new  MoviesService();

//React Class Component for searching movies by movie name
class SearchByName extends React.Component {
	//page state
	state={
		query: '',
		moviesSearch: [],
		movies: []
	};

	//function to fetch movies to be recommended to user
	fetchMovies=()=> {
		var self = this;
		moviesService.getResults().then(function (result) {
		  console.log(result);
		  self.setState({movies: result});
		}).catch(function(error){
			console.log(error.response);
		});
	}

	componentDidMount() {
		//this.fetchMovies();
	}

	//fetch movie title/name suggestions to user
	fetchMoviesSuggestion=()=> {
		var self = this;
		moviesService.getMovies().then(function (result) {

			result = result.filter(result => {
                return result.title.toLowerCase().match(self.state.query.toLowerCase());
            });
            console.log(result);
		  	self.setState({moviesSearch: result});
		});
	}

	//on input change function for input box 
	handleInputChange = () => {
		this.setState({query: this.search.value},() => {
			if (this.state.query && this.state.query.length>0) {
  					this.fetchMoviesSuggestion();
			} 
			else if (!this.state.query) {

			}
	    })
	}

	//function for sending user's searched movie name to backend for movie suggestion
	suggestMovies =async (event)=> {
		event.preventDefault();
		const moviename=event.target.elements.moviename.value;
    	const numberofmovies=event.target.elements.numberofmovies.value;
    	if(moviename!=="" && numberofmovies>0){
    		try{
	    		const response= await moviesService.sendData("searchbyname", moviename, numberofmovies)
				if(response.status===200){
			    	this.fetchMovies();
				}
			}catch(error){
				console.log(error);
			}


    	}
    	else{
			alert("Wrong Input!");    	
		}
	}

	render() {
		return (
		<div>
		    <Row>
				<form onSubmit={event =>this.suggestMovies(event)}>
					<Col span={12}>
						<center>
						<input
				        	type="text" 
				        	name="moviename"
							placeholder="Search for..."
							ref={input => this.search = input}
							onChange={this.handleInputChange}
							style={{
							    borderRadius: '5px',
							    width: '400px',
							    height:'40px',
							    textAlign:'center'
							}}
				        />
				        <br/><br/>
				        <input
				        	type="number"
				        	name="numberofmovies"
							placeholder="Input no of movies"
							style={{
							    borderRadius: '5px',
							    width: '400px',
							    height:'40px',
							    textAlign:'center'
							}}
				        /><br/><br/>
				        <input type="submit" value="Submit" />
				        </center>
			      	</Col>

			      	<Col span={12}>
			      		<Suggestions results={this.state.moviesSearch} />
			      	</Col>
		      </form>
	      	</Row>
	      	<Row>
			  	<br/>
			    <Movies data={this.state.movies}/>
		    </Row>
		</div>
		);
	}
}
export default SearchByName;
