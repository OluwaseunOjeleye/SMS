import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';	{/* importing Custom Layout from containers folder*/}




class App extends React.Component {
  render() {
  	return(
  		<div>
	    	<CustomLayout>	{/* Adding Custom Layout to website*/}
	    	</CustomLayout>
    	</div>
  	);
  }
}
export default App;
