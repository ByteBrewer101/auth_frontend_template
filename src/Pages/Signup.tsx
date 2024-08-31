import { useNavigate } from "react-router-dom";
import InputBox from "../Components/inputbox";
import { useState } from "react";
import axios from "axios";



export default function Signup() {

const [email,setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const nav = useNavigate()

const handler = async () => {
  try {
    
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
      {
        email,
        username,
        password,
      }
    );

    if (response.status === 200) {
      nav("/signin"); 
    } else {
      
      console.error("Sign-up failed:", response.status);
    }
  } catch (error) {
    
    console.error("Error during sign-up:", error);
  }
};





    return (
      <div
      
        className=" overflow-hidden h-screen  w-screen bg-gradient-tow-screen h-screen bg-gradient-to-r from-gray-900 to-slate-950 flex justify-center items-center "
      
      >
        <div className="bg-white bg-opacity-5 p-8 rounded-xl shadow-md w-full max-w-md backdrop-blur-sm z-50 ">
          <h2 className="text-2xl font-bold text-center mb-6 text-white   ">
            Create an Account
          </h2>
          <InputBox
            inputType="text"
            label="Email"
            placeholder="john@email.com"
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <InputBox
            inputType="text"
            label="Username"
            placeholder="johnDoe"
            onChange={(e) => {setUsername(e.target.value)}}
          />
          <InputBox
            inputType="password"
            label="Password"
            placeholder="password"
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <button className="w-full p-4 my-4 rounded-xl bg-white bg-opacity-90 font-bold hover:bg-opacity-5 hover:text-white transition ease-in-out duration-200" onClick={handler}>
            Submit
          </button>
          <div className="flex justify-center text-center items-center">
            <h1 className="text-white mr-2">Already have an account ? </h1>
            <button
              className="text-white underline"
              onClick={() => {
                nav("/signin");
              }}
            >
              Signin
            </button>
          </div>
        </div>
       
      </div>
    );
}
