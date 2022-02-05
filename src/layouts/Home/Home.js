import React, { useEffect, useState } from "react";
import GroupIcon from "@material-ui/icons/Group";
import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import NoteIcon from "@material-ui/icons/Note";

import { getIndividual } from "../../data/individualData";
import { getCompany } from '../../data/companyData';

import "./Home.css";

const Home = () => {
  const [individual, setIndividual] = useState([]);
  const [company, setCompany] = useState([]);

  const getList = async () => {
    const list = await getIndividual();
    setIndividual(list);
  };
  
  const getListCompany = async () => {
    const list = await getCompany();
    setCompany(list);
  }

  useEffect(() => {
    getList();
    getListCompany();
  }, []);

  return (
    <div className="main">
      <div className="row">
        <div className="col-x3-3 col-m3-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row nogutters align-items-center">
                <div className="col mr-2">
                  Доставувачи: {" "}
                  <span className="text-info">
                    {individual.length === 0 ? (
                     <img className="home-loader" src="/images/home-loader.svg" alt="" />
                    ) : (
                      individual.length + company.length
                    )}
                  </span>
                </div>
                <div className="col-auto">
                  <GroupIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-x3-3 col-m3-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row nogutters align-items-center">
                <div className="col mr-2">
                  Откупи: <span className="text-success">2</span>
                </div>
                <div className="col-auto">
                  <BarChartIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-x3-3 col-m3-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row nogutters align-items-center">
                <div className="col mr-2">
                  Откупено грозје:{" "}
                  <span className="text-primary">19,400 кг</span>
                </div>
                <div className="col-auto">
                  <AssignmentIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-x3-3 col-m3-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row nogutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Извештаи
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    Детален извештај за влез и излез
                  </div>
                </div>
                <div className="col-auto">
                  <NoteIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
