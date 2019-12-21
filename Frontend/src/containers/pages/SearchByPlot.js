//Search by plot page

import React from 'react';
import { Input,Button } from 'antd'

const { TextArea } = Input;

const SearchByPlot = props => {
  return (
  	<div>
  	 {/*text box*/}
		<TextArea
		rows={4} 
		placeholder="input movie plot"/>

		<br />
		<br />
	{/*Search button*/}
		<Button type="primary" style={{ background: "light blue", borderColor: "white" }}> {/*search for the movie*/}
	        Search
	    </Button>
	    
    </div>
  );
}
export default SearchByPlot;
