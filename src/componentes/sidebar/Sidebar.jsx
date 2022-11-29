import React from 'react';
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-danger text-white">InstaYA</div>
      <div className="list-group list-group-flush">
        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/login">
          Home
        </NavLink>
        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/order/create">
          Solicita InstaYA!
        </NavLink>
        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/status">
          Estado de solicitudes
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;