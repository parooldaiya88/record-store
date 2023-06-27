// import React from "react";

// import { DataContext } from "../../store/context";
// import { useContext } from "react";
// import RecordCard from "./RecordCard";
// import { useParams } from "react-router-dom";

// const RecordsList = () => {
//   const { recordsState, cartState } = useContext(DataContext);

//   const { genre } = useParams();
//   const filteredData = genre
//     ? recordsState.data.filter(
//         (record) => record.genre.toLowerCase() === genre.toLowerCase()
//       )
//     : recordsState.data; //logic: recordsState

//     const containerWidth = cartState.isOpen ?"calc(100vw -300px)":"100px"
//   // console.log("filteredData", filteredData);
//   // console.log(genre);
//   // console.log("RecordsList", recordsState)
//   return filteredData.length > 0? (
//     <div className='records-container' style={{width: containerWidth}}>
//       {recordsState.data.map((item, index) => (
//         <RecordCard key={item._id} record={item} index={index}/>
//       ))}
//     </div>
//   ):(
// <div>Sorry, our collection does not include any {genre} records!</div>
//   )
// };

// export default RecordsList;

import React, { useEffect } from "react";
import { DataContext } from "../../store/context";
import { useContext, useState} from "react";
import RecordCard from "./RecordCard";
import { useParams } from "react-router-dom";


const RecordsList = () => {
  const { recordsState, cartState } = useContext(DataContext);

  const { genre } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 1000)
  },[])

  const filteredData = genre
    ? recordsState.data.filter(
        (record) => record.genre.toLowerCase() === genre.toLowerCase()
      )
    : recordsState.data;

  const containerWidth = cartState.isOpen ? "calc(100vw - 300px)" : "100%";

  return filteredData.length > 0 ? (
    <div className='records-container' style={{ width: containerWidth }}>
      {filteredData.map((item, index) => (
        <RecordCard key={item._id} record={item} index={index} />
      ))}
    </div>
  ) : (
    <div>Sorry, our collection does not include any {genre} records!</div>
  );
};

export default RecordsList;
