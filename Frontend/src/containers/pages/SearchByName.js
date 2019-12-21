import React from 'react';
import { AutoComplete, Input, Button } from 'antd';  {/*Import important tools from antd UI framework*/}

//movies that have the same letters with the input
const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street','The Dark Night','jumanji'];

//search by name form style
const { Search } = Input;
const SearchByName = props => {
  return (
    <div>

		<AutoComplete
		      placeholder="input movie name"
		      dataSource={dataSource}
		      style={{ width: 400 }}
		      filterOption={(inputValue, option) =>
	          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
	     	  }
		  
	    />
	    <Button type="primary" htmlType="submit" className="search-form-button">
        	    Search
      	</Button>

    </div>
  );
}
export default SearchByName;


