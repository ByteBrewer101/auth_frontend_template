import { useNavigate } from "react-router-dom";
import InputBox from "../Components/inputbox";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handler = async () => {
    try {
   
      const response =  await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          
          username,
          password,
        }
      );
      
      if(response.status===200)
      {
        nav("/dashboard")
      }
      else{
        alert("something is wrong")
      }

    } catch (err) {
      console.error(err);
      alert("something went wrong")
      
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-900 to-slate-950 flex justify-center items-center">
      <div className="bg-white bg-opacity-5 p-8 rounded-xl shadow-md w-full max-w-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Hello, welcome back
        </h2>

        <InputBox
          inputType="text"
          label="Username"
          placeholder="johnDoe"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          inputType="password"
          label="Password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full p-4 my-4 rounded-xl bg-white bg-opacity-90 font-bold hover:bg-opacity-5 hover:text-white transition ease-in-out duration-200"
          onClick={handler} 
        >
          Submit
        </button>
        <div className="flex justify-center text-center items-center">
          <h1 className="text-white mr-2">Don't have an account?</h1>
          <button
            className="text-white underline"
            onClick={() => {
              nav("/signup");
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
