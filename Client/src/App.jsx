import { useEffect } from "react";
import { useState } from "react";


const App = () => {
  const [message, setMessage] = useState([]);

  async function fetchMsg(){
    try {
      let res = await fetch("http://localhost:8080");
      let result = await res.json();
      setMessage(result);

    } catch (error) {
      console.log("err :", error);
    }
  }

  useEffect(() => {
    fetchMsg()
  },[message]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl mb-4">Messages</h1>

      <ul className="space-y-3">
        {message.map(({ msg }, index) => (
          <li key={index} className="text-xl">
            {msg}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App