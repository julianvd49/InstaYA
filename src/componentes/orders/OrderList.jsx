import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";

const labels = [
  "#SERVICIO",
  "FECHA",
  "CIUDAD DE ENTREGA",
  "DIRECCION DE ENTREGA",
  "ESTADO",
  "ACCION",
];

const OrderList = () => {
  const [orders, setOrders] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const userId = "638e38702dcac6bc37a4a1e4";
    axios
      .get(`http://localhost:9000/api/orders?id_usuario=${userId}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, [update]);

  const handleDeleteClick = (orderId) => {
    axios.delete(`http://localhost:9000/api/orders/${orderId}`)
    .then((res) => {
      console.log(res);
      setUpdate(!update);
    })
    .catch((err) => console.log(err));
    
  };

  return (
    <>
      <div className="order-list">
        <h1>
          <i>Tus ordenes</i>
        </h1>
        <Link className="btn btn-primary order-list-create" to="/order/create">
          Crear Insta
        </Link>
        <table className="table">
          <thead>
            <tr>
              {labels.map((label, index) => {
                return (
                  <th key={index} scope="col">
                    {label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {orders ? orders.map((order, index) => {

                  return (
                    <tr key={index}>
                      <th scope="row">
                        {/* <Link to={"/order/" + order.id}>{order.id}</Link> */}
                        {index + 1}
                      </th>
                      <td>{dateFormat(order.fecha, "yyyy-mm-dd")}</td>
                      <td>{order.ciudad_entrega}</td>
                      <td>{order.dir_entrega}</td>
                      <td>{order.estado}</td>
                      <td className="d-flex gap-2 justify-content-center">
                        <Link
                          className="btn btn-success"
                          to={"/order/" + order._id + "/edit"}>
                          Editar
                        </Link>
                        <button
                          href="#"
                          className="btn btn-danger"
                          onClick={() => handleDeleteClick(order._id)}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                }) : ""}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderList;