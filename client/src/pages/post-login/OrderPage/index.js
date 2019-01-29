import React from "react";
import Menu from "../../../components/Menu/index.jsx";
// import { Row, Col } from "react-bootstrap";
import { Container, Row, Col } from "../../../components/Grid";
import API from "../../../utils/API";
import "./index.css";

class OrderPage extends React.Component {
  state = {
    restaurantId: sessionStorage.getItem("restID"),
    restaurant: {},
    categories: [],
    orderedItems: []
  };

  componentDidMount = () => {
    console.log(this.state.restaurantId);
    this.showItems();
  };

  getMenu = () => {
    this.getRestaurant((result) => {
      const Restaurant = result;
      const Menu = Restaurant.Menus[0];
      const Categories = Menu.Categories;
      this.setState({
        restaurant: Restaurant,
        categories: Categories
      });
    });
  };

  getRestaurant = (callback) => {
    API.getRestaurants().then((restaurants) => {
      const restaurant = restaurants.data[0];
      callback(restaurant);
    });
  };

  showItems = () => {
    this.getMenu();
  };

  orderItem = (i) => {
    let array = this.state.orderedItems;
    array.push(i);
    this.setState({
      orderedItems: array
    });
  };

  render () {
    return (
      <Container>
        <Row>
          <Col size="sm-4">
            <div className="box">
              <Container>
                <Row>
                  <h3>Placeholder</h3>
                </Row>
                <Row>
                  <table >
                    <tbody className='text-left'>  
                    <tr>
                      <th>Item</th>
                      <th className='text-right'>Cost</th>
                    </tr>
                    {this.state.orderedItems.map((item, i) => {
                      return (
                        <tr  key={i}>
                          <td>{item.name}</td>
                          <td className='text-right'>{item.price}</td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </Row>
                
              </Container>
              <button className="btn btn-warning"> Save Order</button>
            </div>
          </Col>
          <Col size="sm-8">
            <div className="box">
              <Menu
                categories={this.state.categories}
                orderItem={this.orderItem}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default OrderPage;
