// import axios from "axios";

// // handling Get request

// export const useGet = async (url) => {
//   let errors = null;
//   try {
//     const result = await axios.get(url);
//   } catch (error) {
//     console.log(error);

//   } finally {
//     return {
//       result,
//       errors,
//     };
//   }
// };

// // handling POST requests

// export const usePost= async(url, body) => {
//     let errors = null
//     try {
//       const data = await axios.post(url, body);
//     } catch (error) {
//     } finally {
//       return {
//         data,
//         errors,
//       };
//     }
//   };

import React, { useState } from "react";

function useFetch({ url }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  
  const fetchData = async (body) => {
    try {
      const result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setData(result);
    } catch (error) {
      setError(error);
    }
  };
  return {data,fetchData,error}
}

export default useFetch;