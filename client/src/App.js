import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/UserLogin";
import RegisterRestaurant from "./components/RegisterRestaurant";
import RegisterUser from "./components/RegisterUser";
import FloorPlan from "./pages/post-login/FloorPlan";
import home from "./pages/no-login/home";
import Home from "./pages/post-login/Home";
import Order from "./pages/post-login/OrderInput";
import reservationList from "./pages/post-login/reservationlist";
import Reservations from "./pages/no-login/reservations";
import menuTest from "./pages/no-login/menuTest";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/register/restaurant"
            component={RegisterRestaurant}
          />
          <Route exact path="/register/user" component={RegisterUser} />
          <Route path="/floorplan" component={FloorPlan} />
          <Route path="/order" component={Order} />
          <Route path="/restlogin" component={Home} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/reservationlist" component={reservationList} />
          <Route path="/menutest" component={menuTest} />
        </div>
      </Router>
    );
  }
}

export default App;
