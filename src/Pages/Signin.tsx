import { useNavigate } from "react-router-dom";
import InputBox from "../Components/inputbox";

export default function Signup() {
  const nav = useNavigate();

  return (
    <div className="h-screen  w-screen bg-gradient-tow-screen h-screen bg-gradient-to-r from-gray-900 to-slate-950 flex justify-center items-center">
      <div className="bg-white bg-opacity-5 p-8 rounded-xl shadow-md w-full max-w-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-white   ">
         Hello, welcome back
        </h2>
      
        <InputBox
          inputType="text"
          label="Username"
          placeholder="johnDoe"
          onChange={() => {}}
        />
        <InputBox
          inputType="password"
          label="Password"
          placeholder="password"
          onChange={() => {}}
        />
        <button className="w-full p-4 my-4 rounded-xl bg-white bg-opacity-90 font-bold hover:bg-opacity-5 hover:text-white transition ease-in-out duration-200">
          Submit
        </button>
        <div className="flex justify-center text-center items-center">
          <h1 className="text-white mr-2">Don't have an account ? </h1>
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
