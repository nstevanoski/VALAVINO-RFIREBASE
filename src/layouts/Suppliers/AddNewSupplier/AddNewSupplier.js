import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const AddNewSupplier = () => {
  return (
    <div className="main">
      <div className="supplierCardBox">
        <Link to="/suppliers/individual" className="linkedCard">
          <div>
            <ArrowForwardIcon /> Физичко лице
          </div>
        </Link>
        <Link to="/suppliers/company" className="linkedCard">
          <div>
            <ArrowForwardIcon /> Правно лице
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddNewSupplier;
