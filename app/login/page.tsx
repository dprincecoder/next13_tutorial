"use client";
import { useState } from "react";

interface loginProps {
  name: string;
  firtname: string;
  lastname: string;
  age: number;
}

const Login = () => {
  const [userDetails, setUserDetails] = useState<any>();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  return (
    <section>
      <h1>Login to get Started</h1>
      <form action="">
        <input
          type="text"
          name="firstname"
          value={userDetails?.firtname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          value={userDetails?.lastname}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={userDetails?.age}
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default Login;
