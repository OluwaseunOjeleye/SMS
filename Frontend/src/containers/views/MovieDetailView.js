import React from "react";
import { Button, Card } from "antd";             {/*Importing important tools from antd UI Framework*/}
import CustomForm from "../../components/Form";  {/*Importing CustomForm from Form.js file*/}


{/*movie information data class */}

const listData = [];
  for (let i = 1; i <= 23; i++) {
    listData.push({
      href: 'http://smsmovie.com',
      title: `Movie Name ${i}`,
      director: 'movie director',
      actors: 'movie actors',
      plot: 'movie plot',
      year: '2019',
      image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    });
  }

class MovieDetail extends React.Component {
  render() {
    return (
      <div>
{/*movie information titles*/}  
        <Card title="Moviename">
          <p> Director </p>
          <p> Actors </p>
          <p> Year </p>
          <p> Plot </p>
{/*Delete & update movie buttons*/}
        </Card>
        <CustomForm requestType="put" articleID={null} btnText="Update"/>        
        <form>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

export default MovieDetail;