import React from "react";

const GitHubUser = ({ name, location, avatar }: any) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{location}</h1>
      <img src={avatar} height={200} />
    </div>
  );
};

export default GitHubUser;
