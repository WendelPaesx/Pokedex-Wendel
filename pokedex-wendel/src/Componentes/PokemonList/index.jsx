import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

const PokemonList = ({ pokemonData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14; // Defina o número de Pokémon por página aqui

  // Função para lidar com a mudança de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Lógica para calcular o índice inicial e final dos Pokémon para a página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, pokemonData.length);
  const pokemonsForPage = pokemonData.slice(startIndex, endIndex);

  return (
    <div>
      {pokemonsForPage.map((pokemon) => (
        <PokemonCard key={pokemon.id} name={pokemon.name} pokemonId={pokemon.id} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(pokemonData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PokemonList;
