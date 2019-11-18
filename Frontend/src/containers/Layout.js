import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';	{/*Importing important layout from antd UI Framework*/}



const { Header, Content, Footer } = Layout;

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
					Home
				</Menu.Item>

				<Menu.Item key="2">
					Admin
				</Menu.Item>
			</Menu>
		</Header>
	{/*End Of Header layout*/}

    {/*Beggining of content layout*/}
		<Content style={{ padding: '0 50px', marginTop: 64 }}>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>
          			Search By:
					Movie Name
				</Breadcrumb.Item>

				<Breadcrumb.Item>
		          Genre
		        </Breadcrumb.Item>

				<Breadcrumb.Item>
		          Movie Plot
		        </Breadcrumb.Item>
			</Breadcrumb>

			<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
				{this.props.children}
			</div>
		</Content>
	{/*End Of content layout*/}

    {/*Beginning of Footer layout*/}
		<Footer style={{ textAlign: 'center' }}>SMS ©2019 Created by SMS Tech</Footer>
	{/*End of Footer Layout*/}

	</Layout>
	);
  }
}

export default CustomLayout;
