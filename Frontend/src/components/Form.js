import React from "react";
import { Form, Input, Button, InputNumber } from "antd";   {/*Importing important form components from antd UI Framework*/}

import  MoviesService  from  "../http_client/MoviesService";


//Creating a movie service object for communicating with backend
const  moviesService=new  MoviesService();

const FormItem = Form.Item; 

//Custom Form React Component
class CustomForm extends React.Component {
  handleFormSubmit = async (event, requestType, movieID) => {
    event.preventDefault();
    const moviename=event.target.elements.moviename.value;
    const director=event.target.elements.director.value;
    const actors=event.target.elements.actors.value;
    const genres=event.target.elements.genres.value;
    const year=event.target.elements.year.value;
    const plot=event.target.elements.plot.value;

    switch (requestType){
      //For Creating and Adding a new movie to database
      case 'post':
        moviesService.createMovie(
          {
          "title":  moviename,
          "directors": director,
          "actors":  actors,
          "plot":  plot,
          "year":  year,
          "genres":  genres
          }
        ).then(function (result) {
            console.log(result);
            alert("Movie Created!");
            }
          ).catch(()=>{
            alert('Movie Creation Error.');
          });

      //For Updating an already existing movie in database
      case 'put':
        moviesService.updateMovie(
          {
          "title":  moviename,
          "directors": director,
          "actors":  actors,
          "plot":  plot,
          "year":  year,
          "genres":  genres
          }, movieID).then(function (result) {
              console.log(result);
              alert("Movie updated!");
            }
          ).catch(()=>{
            alert('Movie Update Error.');
          });
    }

  }

  render() {
    return (

      <div>
        <Form onSubmit={event =>this.handleFormSubmit(
            event, 
            this.props.requestType, 
            this.props.movieID
            )}
        >

          <FormItem label="Movie Name">
            <Input name="moviename" placeholder="Add movie name here ..." />
          </FormItem>

          <FormItem label="Director">
            <Input name="director" placeholder="Add director here ..." />
          </FormItem>

          <FormItem label="Actors">
            <Input name="actors" placeholder="Add actors here ..." />
          </FormItem>

          <FormItem label="Genres">
            <Input name="genres" placeholder="Add genres here ..." />
          </FormItem>

          <FormItem label="Year">
            <InputNumber name="year" placeholder="Add Year here ..." />
          </FormItem>

          <FormItem label="Plot">
            <Input name="plot" placeholder="Add Plot here ..." />
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </FormItem>

        </Form>
      </div>
    );
  }
}

export default CustomForm;
