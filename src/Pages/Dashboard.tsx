import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  const singoutHandler = () => {
    nav("/signin");
  };

  return (
    <div>
      <button
        className="bg-red-900 p-4 text-white rounded-full"
        onClick={singoutHandler}
      >
        Signout
      </button>
    </div>
  );
}
