import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Register from "./pages/Register";
import {useSelector} from 'react-redux';

function App() {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/ghee-wala/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success/:paymentId" element={<Success/>}/>
        <Route path="/login" element={user ? <Navigate to="/ghee-wala/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
