import axios from "axios"

const ROOT_URL = "http://localhost:3000"

export const FETCH_ANIMALS = "FETCH_ANIMALS"

// function _buildFilterOptions(query) {
//   let queryParams = []
//   for(var key in query)
//     //only look at the object, do not look at its
//     //prototype
//     if (query.hasOwnProperty(key))
//       queryParams.push(key + "=" + query[key])
  
//   if(queryParams.length > 0)
//     return '?' + queryParams.join('&');
//   else
//     return '';
//   //return queryParams.length > 0 ? '?' + queryParams.join('&') : '';
// }

export function fetchAnimals() {
  
  let url = ROOT_URL + '/animals'
  const request = axios.get(url, {headers: { "Content-Type" : "application/json"}})

  return {
    type: FETCH_ANIMALS,
    payload: request
  };
}