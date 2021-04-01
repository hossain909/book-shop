import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import AddBook from './components/AddBook/AddBook';
import Admin from "./components/Admin/Admin";
import CheckOut from './components/CheckOut/CheckOut';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageBooks from './components/ManageBooks/ManageBooks';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext()
export const BookDetailContext = createContext()

  function App() {
    const [loggedInUser, setLoggedInUser] = useState({})
    const [bookDetail,setBookDetail] = useState([])
    
    return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <BookDetailContext.Provider value={[bookDetail, setBookDetail]}>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/checkout">
                <CheckOut></CheckOut>
              </PrivateRoute>
              <Route path="/orders">
                <Orders></Orders>
              </Route>
              <PrivateRoute path="/admin">
                <Admin></Admin>
              </PrivateRoute>
              <PrivateRoute path="/manageBooks">
                <ManageBooks></ManageBooks>
              </PrivateRoute>
              <PrivateRoute path="/addBook">
                <AddBook></AddBook>
              </PrivateRoute>
            </Switch>
          </Router>
        </BookDetailContext.Provider>
      </UserContext.Provider>
    );
  }

  export default App;
