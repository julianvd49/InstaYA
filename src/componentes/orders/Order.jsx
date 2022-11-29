import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    fecha: "29/11/2022",
    ciudad_entrega: "Cartagena",
    direccion_entrega: "Bocagrande",
    estado: "En envio",
  },
  {
    id: 2,
    fecha: "29/11/2022",
    ciudad_entrega: "Medellin",
    direccion_entrega: "Laureles",
    estado: "En envio",
  },
];

const labels = [
  "#SERVICIO",
  "FECHA",
  "CIUDAD DE ENTREGA",
  "DIRECCION DE ENTREGA",
  "ESTADO",
  "ACCION",
];

const OrderList = () => {
  return (
    <>
      <div className="books-home">
        <Link className="btn btn-primary" to="/order/create">
          Create
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
            {books.map((order, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    {/* <Link to={"/order/" + order.id}>{order.id}</Link> */}
                    {order.id}
                  </th>
                  <td>{order.fecha}</td>
                  <td>{order.ciudad_entrega}</td>
                  <td>{order.direccion_entrega}</td>
                  <td>{order.estado}</td>
                  <td className="d-flex gap-2 justify-content-center">
                    <Link
                      className="btn btn-success"
                      to={"/order/" + order.id + "/edit"}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger"
                      to={"/order/" + order.id + "/delete"}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderList;
