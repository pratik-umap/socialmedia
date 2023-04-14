import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function User({ UserId, name, avatar }) {
  return (
    <Link to={`/user/${UserId}`} className="homeUser">
      <img src={avatar} alt={name} />
      <Typography>{name}</Typography>
    </Link>
  );
}

export default User;
