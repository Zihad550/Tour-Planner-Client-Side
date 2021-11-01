import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddNewTour from "./Pages/AddNewTour/AddNewTour";
import HomeContainer from "./Pages/Home/HomeContainer/HomeContainer";
import Login from "./Pages/Login/Login";
import ManageAllTours from "./Pages/ManageAllTours/ManageAllTours";
import MyTours from "./Pages/MyTours/MyTours";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route path="/home">
              <HomeContainer />
            </Route>
            <Route path="/myTours">
              <MyTours />
            </Route>
            <Route path="/manageAllTours">
              <ManageAllTours />
            </Route>
            <Route path="/addNewTour">
              <AddNewTour />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
