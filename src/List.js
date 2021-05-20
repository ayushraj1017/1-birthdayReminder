import React from 'react';

const List = ({value}) => {
  return (
    <>
      <div className="flex mt-2"
          key={value.id}>
          <div className="">
          <img 
          className=" w-24 h-24 object-cover rounded-full shadow-2xl"
          src={value.image} alt={value.name} 
          
            
          />
          </div>
          <div className="flex flex-col justify-start items-start ml-4 ">
          <h3 className="underline">{value.name}</h3>
          <small>{value.age} years</small>

          </div>
         
          </div>
    </>
  );
};

export default List;
