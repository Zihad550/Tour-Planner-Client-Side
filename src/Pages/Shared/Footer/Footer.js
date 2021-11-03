import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark d-flex justify-content-center">
      <div className=" text-white-50 w-50 justify-content-between d-flex flex-column flex-md-row align-items-center py-4">
        <h2>Tour Planner</h2>
        <ul className="list-unstyled m-0">
          <h4>Quick links </h4>
          <li>Home</li>
          <li>My Tours</li>
          <li>Manage All Tours</li>
          <li>Add Tour</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
