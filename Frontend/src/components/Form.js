import React from "react";
import { Form, Input, Button, InputNumber } from "antd";   {/*Importing important form components from antd UI Framework*/}

const FormItem = Form.Item;

class CustomForm extends React.Component {
  handleFormSubmit = async (event, requestType, movieID) => {
    event.preventDefault();
    const moviename=event.target.elements.moviename.value;
    const director=event.target.elements.director.value;
    const actors=event.target.elements.actors.value;
    const year=event.target.elements.year.value;
    const plot=event.target.elements.plot.value;

  }

  render() {
    return (
    {/*Beginning of the Form*/}
      <div>
        <Form>
        <Form onSubmit={event =>this.handleFormSubmit(this.props.requestType, this.props.movieID)}>

          <FormItem label="Movie Name">
            <Input name="moviename" placeholder="Add movie name here ..." />
          </FormItem>

          <FormItem label="Director">
            <Input name="director" placeholder="Add director here ..." />
          </FormItem>

          <FormItem label="Actors">
            <Input name="actors" placeholder="Add actors here ..." />
          </FormItem>

          <FormItem label="Year">
            <InputNumber name="year" placeholder="Add Year here ..." />
          </FormItem>

          <FormItem number="Plot">
            <Input name="plot" placeholder="Add Plot here ..." />
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </FormItem>

        </Form>
      </div>
    {/*End of the Form*/}
    );
  }
}

export default CustomForm;
