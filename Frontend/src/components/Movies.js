import React from 'react';
import { List, Avatar, Icon } from 'antd';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

//Movie Component function
const Movies = props => {
  return (
    <List                 //item layout
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}

      dataSource={props.data} //getting data here

    //Beginning of the footer
      footer={
        <div>
          <b>SMS design</b>
        </div>
      }
    //End of the footer

  //item details
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={<a href={`${item.id}`}> {item.title} </a>
            }
            description={<div>
              Director: {item.directors}<br/>
              Actors: {item.actors}<br/>
              Genre: {item.genres}<br/>
              Year: {item.year}<br/>
              Plot: {item.plot}
            </div>}
          />
        </List.Item>
      )}
    />
  );
};

export default Movies;