import axios from "axios"

const ROOT_URL = "http://localhost:5000"

export const FETCH_ANIMALS = "FETCH_ANIMALS"
export const FETCH_BREEDS = "FETCH_BREEDS"
export const FETCH_ANIMAL_BY_ID = "FETCH_ANIMAL_BY_ID"

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

export function fetchAnimals(breed, page) {

  let url = ROOT_URL + '/animals?breed=' + breed +'&page=' + page + '&sort=lowest';
  const request = axios.get(url, {headers: { "Content-Type" : "application/json"}})

  return {
    type: FETCH_ANIMALS,
    payload: request
  };
}

export function fetchByBreed(breed) {

  let url = ROOT_URL + '/animals?breed=' + breed;
  const request = axios.get(url, {headers: { "Content-Type" : "application/json" }})

  return {
    type: FETCH_BREEDS,
    payload: request
  };
}

export function fetchAnimalById(animalid) {

  let url = ROOT_URL + 'animals/' + animalid;
  const request = axios.get(url, {headers: {"Content-Type" : "application/json" }})

  return {
    type: FETCH_ANIMAL_BY_ID,
    payload: request
  };
}