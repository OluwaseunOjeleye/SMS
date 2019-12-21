import React from 'react';
import { Checkbox, Form, Button } from 'antd';    {/*Import important tools from antd UI framework*/}

{/*types lists*/}
let list_genre=[], list_directors=[], list_actors=[], list=[];

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

{/*options according to the type :genres ,directors , actors*/}
const Genres=['Comedy', 'Drama', 'Sci-fi'];
const Directors=['Amal', 'Seun', 'Selen'];
const Actors=['Jimmy', 'Cool joe', '50 kurus'];


const SearchByGenre = props => { //form of the check box
  return (
    <div>
        {/*<Form onSubmit={handleSubmit}>*/}
    	<Form>  
	    	<h2>Genre</h2>
	    	<Checkbox.Group classname="genre_class" options={Genres} defaultValue={['']} onChange={onchange} />
		    <hr />
		    <br />
	    	<h2>Director</h2>
	    	<Checkbox.Group classname="director_class" options={Directors} defaultValue={['']} onChange={onChange} />
		    <hr />
		    <br />
		    <h2>Actor</h2>
	    	<Checkbox.Group classname="actor_class" options={Actors} defaultValue={['']} onChange={onChange} />
	    	<div style={{ marginTop: 20 }}>
		        <Button type="primary" style={{ background: "light blue", borderColor: "white" }}> {/*search for the movie*/}
	            	Search
	          	</Button>
		  	</div>
	  	</Form>
    </div>
  );
}
export default SearchByGenre;