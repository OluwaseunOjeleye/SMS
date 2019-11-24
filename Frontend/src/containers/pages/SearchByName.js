import React from 'react';
import { AutoComplete, Button } from 'antd';  //*Import important tools from antd UI framework*/}

//movies that have the same letters with the input
const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street','The Dark Night','jumanji'];

//search by name form style
const SearchByName = props => {
  return (
    <div style={{position: "fixed",
				width: "parent",
				height: "parent",
				textalign: "center"}}>
    	<h2>Movie Name:
    	<AutoComplete           //text predicting
	      style={{ width: 200 }}
	      dataSource={dataSource}
	      placeholder="Input Movie Name"
	      filterOption={(inputValue, option) =>
	        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
	      }
	    />
	    <br/>
	    //submit button
	    <Button type="primary" htmlType="submit" className="search-form-button">
        	Search
      	</Button>
      	</h2>
    </div>
  );
}
export default SearchByName;

