import React from 'react'

const limit=10;	//No of movies to show on live search

//Movie suggestion component function
const Suggestions = (props) => {
	let countMovies=0;
  	const options = props.results.map(r => {
  		if(countMovies++<limit){
  			return (
  				<li key={r.id}>
		      		{r.title}
		    	</li>
		    );
  		}
	})

	return <ul>{options}</ul>
}
export default Suggestions