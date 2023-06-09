// import logo from './logo.svg';


// import React from 'react';
// import Card from './components/card';

// function App() {
//   return (
//     <div className="App">
//       <Card />
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import { useEffect, useState } from 'react';

function App() {
  const [arr, setArr] = useState([]);

  const getData = async() => {
    await fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET"
    })
    .then(res => res.json()).then(data => {
      const newData = data.splice(0,20);
      setArr(newData);
    });
  }

  useEffect(() => {
    getData();
  },[]);

  console.log(arr);

  return (
    <div className="App">
    {arr.map((el) => {
      return(
        <Card
          name={el.title}
          image = {el.url} />
      );
    })

    }
    </div>
  );
}

export default App;