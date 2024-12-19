import { FC } from "react";

type WelcomeMessageProp = {
  isLoggedIn: boolean;
  user?: {
    name: String;
    role: "admin" | "moderator" | "guest";
  };
};

const WelcomeMessage: FC<WelcomeMessageProp> = ({ isLoggedIn, user }) => {
  if (user && user.role !== "admin") {
    return <h1>No Access for user</h1>;
  } else {
    return (
      <div>
        {isLoggedIn ? <h1>User Logged In</h1> : <h1>User Logged Out</h1>}
        {user && <h1>Hello,{user.name}</h1>}
      </div>
    );
  }
};

export default WelcomeMessage;
