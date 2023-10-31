import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<AuthUser>({} as AuthUser);
  console.log(isLoggedIn);

  const handleLogin = () => {
    setIsLoggedIn({
      name: "Rifqi",
      email: "rifqi@gmail.com",
    });
  };

  // const handleLogout = () => {
  //   setIsLoggedIn(null);
  // };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {isLoggedIn.name}</div>
      <div>User email is {isLoggedIn.email}</div>
    </div>
  );
};

export default LoggedIn;
