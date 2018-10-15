import axios from "axios"

const ROOT_URL = "http://localhost:5000"

export const FETCH_ANIMALS = "FETCH_ANIMALS"
export const FETCH_BREEDS = "FETCH_BREEDS"
export const FETCH_ANIMAL_BY_ID = "FETCH_ANIMAL_BY_ID"

//Fetches animals for animal list
export function fetchAnimals(breed, page) {

  let url = ROOT_URL + '/animals?breed=' + breed +'&page=' + page + '&sort=lowest';
  const request = axios.get(url, {headers: { "Content-Type" : "application/json"}})

  return {
    type: FETCH_ANIMALS,
    payload: request
  };
}

//Fetches breeds for breed dropdown list
export function fetchByBreed(breed) {

  let url = ROOT_URL + '/animals?breed=' + breed;
  const request = axios.get(url, {headers: { "Content-Type" : "application/json" }})

  return {
    type: FETCH_BREEDS,
    payload: request
  };
}

//Fetches animals by their ID in order to access animal details page
export function fetchAnimalById(animalid) {

  let url = ROOT_URL + '/animals/' + animalid;
  const request = axios.get(url, {headers: {"Content-Type" : "application/json" }})

  return {
    type: FETCH_ANIMAL_BY_ID,
    payload: request
  };
}