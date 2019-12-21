
import React from 'react';
import { Form, Icon, Input, Button, Card } from 'antd'; {/*import the important tools from antd UI framework*/}

 //login form class
class NormalLoginForm extends React.Component {
 //admin login verifying
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
	      //login form style
			<div style={{position: "fixed",
						width: "parent",
						height: "parent",
						textalign: "center"}}>
		      	<Form onSubmit={this.handleSubmit} className="login-form">
		      {/*username space*/}
		        <Form.Item>
		          {getFieldDecorator('username', {
		            rules: [{ required: true, message: 'Please input your username!' }],
		          })(
		            <Input
		              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
		              placeholder="Username"
		            />,
		          )}
		        </Form.Item>
	          
		        <Form.Item>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: 'Please input your Password!' }],
		          })(
		            <Input
		              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
		              type="password"
		              placeholder="Password"
		            />,
		          )}
		        </Form.Item>
	          {/*submit button*/}
		        <Form.Item>
		          <Button type="primary" htmlType="submit" className="login-form-button">
		            Log in
		          </Button>
		        </Form.Item>
		      </Form>
		    </div>
       
     	);
   }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;