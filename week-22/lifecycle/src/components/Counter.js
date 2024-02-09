import { useState, useEffect } from "react";

function Counter() {

  const [number, setNumber] = useState(0);
//   const [name, setName] = useState('nida');

  useEffect(() => {
    console.log("Component mount edildi");

    setInterval(() => {
        setNumber((n) => n + 1)
    }, 1000)

  }, []);

  useEffect(() => {
    console.log(" number state Guncellendi");
  }, [number]);

//   useEffect(() => {
//     console.log(" name state Guncellendi");
//   }, [name]);


  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      {/* <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Ayse")}>Click</button> */}
    </div>
  );
}

export default Counter;
