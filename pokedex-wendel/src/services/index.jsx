import { useState, useEffect } from 'react';
import axios from 'axios';

const usePokemonService = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        setPokemons(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons };
};

export default usePokemonService;