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