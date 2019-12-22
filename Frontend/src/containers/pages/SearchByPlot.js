import React from 'react';

import Movies from "../../components/Movies";
import  MoviesService  from  "../../http_client/MoviesService";

//Creating a movie service object for communicating with backend
const  moviesService=new  MoviesService();

//React Class Component for searching movies by movie name
class SearchByPlot extends React.Component {
	//page state
	state={
		movies: []
	};


	//function to fetch movies to be recommended to user
	fetchMovies= ()=> {
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


	//function for sending user's plot to backend for movie suggestion
	suggestMovies =async (event)=> {
		event.preventDefault();
		const moviename=event.target.elements.moviename.value;
    	const numberofmovies=event.target.elements.numberofmovies.value;

    	if(moviename!="" && numberofmovies>0){
    		try{
	    		const response= await moviesService.sendData("searchbyplot", moviename, numberofmovies)
				if(response.status===200){
			    	this.fetchMovies();
				}
				//this.fetchMovies();
			} catch(error){
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
			<center>
			<form onSubmit={event =>this.suggestMovies(event)}>
		        <input
		        	type="text" 
		        	name="moviename"
					placeholder="Input Plot..."
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
	      </form>
	      </center>
		  	<br/>
		    <Movies data={this.state.movies}/>
		</div>
		);
	}
}
export default SearchByPlot;
