import React from 'react';
import { Link, withRouter } from 'react-router-dom'; /*Import tools from react-router-dom for linking the pages*/
import { Layout, Menu, Breadcrumb } from 'antd';	/*Importing important layout from antd UI Framework*/


const { Header, Content, Footer } = Layout;

//Website Custom Layout Class
class CustomLayout extends React.Component {
  render() {
	return (
		<Layout>
    {/*Beginning Of Header layout*/}
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
			<div className="logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				style={{ lineHeight: '64px' }}
			>
				<Menu.Item key="1">
					{/*link to Home page*/}
					<Link to="/">Home</Link>  
				</Menu.Item>
                 
				<Menu.Item key="2">
					{/*link admin button to admin login page*/}
					<Link to="/admin">Admin</Link>
				</Menu.Item>
			</Menu>
		</Header>
	{/*End Of Header layout*/}

    {/*Beggining of content layout*/}
		<Content style={{ padding: '0 50px', marginTop: 64 }}>
			<Breadcrumb style={{ margin: '16px 0' }}>

				<Breadcrumb.Separator>
          			 Search By :
          		</Breadcrumb.Separator>

          
          		<Breadcrumb.Item>
					 <Link to="/searchbyname">Movie Name</Link>  {/*link Movie Name button to searchbyname*/}
				</Breadcrumb.Item>

				<Breadcrumb.Item>
					 <Link to="/searchbygenre">Genre</Link>     {/* link Genre button to searchbygenre*/}
		        </Breadcrumb.Item>
			
				<Breadcrumb.Item>
					 <Link to="/searchbyplot">Movie Plot</Link> {/*link Movie Plot button to searchbyplot*/}
		        </Breadcrumb.Item>
			</Breadcrumb>

			<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
					{this.props.children}
			</div>
		</Content>
	{/*End Of content layout*/}

    {/*Beginning of Footer layout*/}
		<Footer style={{ textAlign: 'center' }}>SMS ©2019 Created by SMS Tech</Footer>

	</Layout>
	);
  }
}

export default CustomLayout;
