import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [person,setPerson]=useState(data);

  console.log(person.length);



  return <div className="h-screen flex flex-col justify-center items-center">
      <div className="container">
      <h1  className="font-bold text-center text-4xl"
      >{person.length} Birthday today</h1>

      {person.map((value)=>{
        return(
          <List value={value}/>
        )
      })}

      <button className="p-4 m-5 bg-red-500 text-red-100"
      onClick={()=>{
        setPerson([])
      }}>Clear All</button>

</div>

  </div>
}

export default App;
