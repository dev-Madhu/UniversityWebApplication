import React, { useState, useEffect } from "react";
import { Profile } from "./Profile";

export const ProfileDashboard = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchdetails = async () => {
      const fulldata = await fetch("http://localhost:8082/api/v1/users/all");
      const response = await fulldata.json();
      setUserDetails(response);
    };
    fetchdetails();
  }, []);

  return (
    <div className="main-dashboard">
      {userDetails.map((user) => (
        <Profile userProfile={user} key={user.id} />
      ))}
    </div>
  );
};
