// import React from "react";

const GitHubUser = ({
  name,
  location,
  avatar,
  createdDate,
  updatedDate,
  bio,
}: any) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{location}</h1>
      <img src={avatar} height={200} />
      <p>{createdDate}</p>
      <p>{updatedDate}</p>
      <p>{bio}</p>
    </div>
  );
};

export default GitHubUser;
