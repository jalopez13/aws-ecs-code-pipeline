'use server';

export const getCharacter = async () => {
  const id = Math.floor(Math.random() * 83) + 1;
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const character = await response.json();

    return character.name;
  } catch (error) {
    console.log(error);
  }
};
