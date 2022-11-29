import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componentes/auth/Login";
import Register from "./componentes/auth/Register";
import Sidebar from "./componentes/sidebar/Sidebar";
import Order from "./componentes/orders/Order";
import OrderNew from "./componentes/orders/OrderNew";
import OrderEdit from "./componentes/orders/OrderEdit";
import Welcome from "./componentes/Welcome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="d-flex" id="wrapper">
          <Sidebar />
          <div id="page-content-wrapper">
            {/* <!-- Page content--> */}
            <div className="container-fluid">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/status" element={<Order />} />
                <Route path="/order/create" element={<OrderNew />} />
                <Route path="/order/:id/edit" element={<OrderEdit />} />
                <Route path="/" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
