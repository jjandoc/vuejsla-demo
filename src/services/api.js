// Star Wars API: https://swapi.dev/

const BASE_URL = "https://swapi.dev/api/people";

// Recursively get data for everybody
export const fetchPeople = async () => {
  const people = [];
  const requestData = async (url = BASE_URL) => {
    const response = await fetch(url);
    const { next, results } = await response.json();
    people.push(...results);
    if (next) {
      await requestData(next);
    }
  };
  await requestData();

  return people;
};

// Grab data for a specific person
export const fetchPerson = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
};

export default {
  fetchPeople,
  fetchPerson,
};
