import React from "react";
import "./styles.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidenav">
        <div className="logolink">
          <Link to="/">
            <div className="logo">
              <img src="/images/valavino-logo.png" alt="" />
            </div>
          </Link>
        </div>
        <ul>
          {SidebarData.map((SidebarData) => (
            <li key={SidebarData.id}>
              <Link to={SidebarData.path}>
                {SidebarData.icon} {SidebarData.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
