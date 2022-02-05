import React, {useEffect, useState} from "react";

import {
    getIndividual,
  } from "../../data/individualData";

import { ToastContainer, toast } from "react-toastify";

import { Link, Redirect } from 'react-router-dom';

const NewGrapeDelivery = (props) => {
    const [individual, setIndividual] = useState([]);
    const [individualName, setIndividualName] = useState("");

    const getList = async () => {
        try {
            const list = await getIndividual();
            setIndividual(list);
        } catch (error) {
            toast.error(error.message);
        }
    }
    
    const handleSubmitIndividual = (e) => {
        e.preventDefault();

        props.setSelectedNewGrapeDeliveryIme(individualName);
    }

    useEffect(() => {
        getList();
    }, [])

  return (
    <div className="main">
      <ToastContainer/>
      <div className="centered-text">
        <h2>Изберете постоечки доставувач</h2>
        <p>
          За полесно пронаоѓање на доставувач, користете ја формата за
          пребарување
        </p>
      </div>
      <div className="card">
        <div className="card-header">
          <span>Листа на доставувачи (физички лица)</span>
        </div>
        <div className="card-body">
          <form action="/grapeDelivery/new_grapeDelivery/individual" onSubmit={handleSubmitIndividual}>
            <div className="form-group">
            <select id="exampleFormControlSelect1" className="form-control" onChange={(e) => setIndividualName(e.target.value)}>
                {individual.map((individual) => 
                        <option key={individual.id}>{individual.ime} {individual.prezime}</option>
                )}
                </select>
            </div>
            
            <button type="submit"><Link to="/grapeDelivery/new_grapeDelivery/individual">test</Link></button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default NewGrapeDelivery;
