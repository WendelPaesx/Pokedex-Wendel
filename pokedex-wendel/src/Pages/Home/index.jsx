import React from "react";
import { Container, Grid } from "@mui/material";
import PokemonCard from "../../Componentes/PokemonCard";
import Page from "../../Componentes/Page";
import usePokemonService from "../../services";

export default function Home() {
  const {pokemons } = usePokemonService();

  

 
  return (
    <Page>
      
        <Grid container spacing={2}>
          {pokemons.map((pokemon) => (
            <Grid item xs={3} key ={pokemon.name}  >

              <PokemonCard name={pokemon.name}  />
            </Grid>
          ))}
        </Grid>
      
    </Page>
  );
}
