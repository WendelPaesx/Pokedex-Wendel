import React, { useState } from "react";
import { Container, Grid} from "@mui/material";
import PokemonCard from "../../Componentes/PokemonCard";
import Page from "../../Componentes/Page";
import usePokemonService from "../../services";
import Paginacao from "../../Componentes/Paginacao";



export default function Home() {
  const { pokemons } = usePokemonService();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, pokemons.length);
  const pokemonsForPage = pokemons.slice(startIndex, endIndex);
  

  return (
    <Page >
      <Grid container spacing={2}>
        {pokemonsForPage.map((pokemon, index) => (
          <Grid item xs={3} key={pokemon.name}>
            <PokemonCard pokemonId={startIndex + index + 1} name={pokemon.name} />
          </Grid>
        ))}
      </Grid>
      <Paginacao 
        currentPage={currentPage}
        totalPages={Math.ceil(pokemons.length / itemsPerPage)}
        onPageChange={handlePageChange}
        
      />
    </Page>
   
  );
}