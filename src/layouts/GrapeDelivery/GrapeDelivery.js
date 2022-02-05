import React from "react";
import './styles.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { Link } from "react-router-dom";

const GrapeDelivery = () => {
  return (
    <div className="main">
      <div className="card-grapedelivery">
        <Link to="/grapeDelivery/review" className="grapeDelivery"><ArrowForwardIcon/> Преглед</Link>
        <Link to="/grapeDelivery/new_grapeDelivery" className="grapeDelivery"><ArrowForwardIcon/> Нов Откуп</Link>
      </div>
    </div>
  );
};

export default GrapeDelivery;
