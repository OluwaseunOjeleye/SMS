import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";  //Import tools from react-router-dom for linking the pages
import './App.css';
import 'antd/dist/antd.css';                                  //import antd style manually
import CustomLayout from './containers/Layout';               //import CusromLayout from Layout.js

import Home from './containers/pages/Home';                   //import Home from Home.js
import SearchByName from './containers/pages/SearchByName';   //import SearchByName from SearchByName.js
import SearchByGenre from './containers/pages/SearchByGenre'; //import SearchByGenre from SearchByGenre.js
import SearchByPlot from './containers/pages/SearchByPlot';   //import SearchByPlot from SearchByPlot.js
import Login from './containers/pages/Login';                 //import Login from Login.js
import NoMatch from './containers/pages/NoMatch';             //import NoMatch from NoMatch.js

import MovieList from './containers/views/MovieListView';     //import MovieList from MovieListView.js
import MovieDetail from './containers/views/MovieDetailView'; //import MovieDetail from MovieDetailView.js


{/*<img src={logo} className="App-logo" alt="logo" />*/}

class App extends React.Component {
  render() {
  	return(
  		<div>
	  		<BrowserRouter>
		    	<CustomLayout>
			    	<Switch>	
			    		{/*initializing routers for linking pages*/}
			    		<Route exact path="/" component={Home} />{" "}
			    		<Route exact path="/SearchByName" component={SearchByName} />{" "}
			    		<Route exact path="/SearchByGenre" component={SearchByGenre} />{" "}
			    		<Route exact path="/SearchByPlot" component={SearchByPlot} />{" "}
			    		<Route exact path="/admin" component={Login} />{" "}
					    <Route exact path="/movies" component={MovieList} />{" "}
					    <Route exact path="/movies/:movieID/" component={MovieDetail} />{" "}
					    <Route component={NoMatch} />
					</Switch>
		    	</CustomLayout>
	    	</BrowserRouter>
    	</div>
  	);
  }
}
export default App;
