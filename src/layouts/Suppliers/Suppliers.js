import React from "react";
import "./Suppliers.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const Suppliers = () => {
  return (
    <div className="main">
      <div className="supplierCardBox">
        <Link to="/suppliers/individual" className="linkedCard">
          <div>
            <ArrowForwardIcon /> Физички лица
          </div>
        </Link>
        <Link to="/suppliers/company" className="linkedCard">
          <div>
            <ArrowForwardIcon /> Правни лица
          </div>
        </Link>
        <Link to="/suppliers/add-new-supplier" className="linkedCard">
          <div>
            <ArrowForwardIcon /> Внеси нов доставувач
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Suppliers;
