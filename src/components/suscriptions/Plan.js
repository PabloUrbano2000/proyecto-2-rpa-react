import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/plans.css";

function Plan({ tipo, precio, imagen, duracion, despues, beneficios }) {
  return (
    <div className="card plan animate__animated animate__fadeInUp mt-3 pt-4 pr-4 pl-3">
      <div className="overflow">
        <h5 className="font-weight-bold">{tipo}</h5>
        <img src={imagen} alt={tipo} className="mt-2 plan-img" loading="lazy" />
      </div>
      <div className="card-body">
        <div className="plan-parrafos">
          <h4 className="card-title text-center">
            <strong>S/ {precio} Al mes</strong>
          </h4>
          <p className="description text-center h6">
            {duracion ? `Durante ${duracion}` : ""}
          </p>
          <p className="text-center text-secondary h6">
            {despues ? `Luego $/${despues} Al mes` : ""}
          </p>
        </div>

        <Link
          className="btn btn-primary btn-block p-3 font-weight-bold border-0"
          to={"/"}>
          Suscribirme
        </Link>
        <ul className="mt-4">
          {beneficios.map((beneficio) => (
            <li>
              <span className="text-secondary">{beneficio}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Plan;
