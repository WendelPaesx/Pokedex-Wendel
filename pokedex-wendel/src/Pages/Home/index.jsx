import React, { useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import PokemonCard from "../../Componentes/PokemonCard";
import Page from "../../Componentes/Page";
import usePokemonService from "../../services";
import Paginacao from "../../Componentes/Paginacao";
import styled, { ThemeProvider } from "styled-components";

const mainContent = styled.div`
  margin-top: ${({ theme }) =>
    theme.spacing(
      4
    )}; // Importante: o "theme" é passado automaticamente pelo "ThemeProvider" do styled-components
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: flex-start; /* Alinha o conteúdo ao topo verticalmente */
`;

const fixedPagination = styled.div`position: fixed;
  marginTop:10px
  bottom: ${({ theme }) => theme.spacing(4)}
  
  width: 100%;
  background-color: #fff;
  padding: ${({ theme }) => theme.spacing(2)};
  border-top: 2px solid ${({ theme }) => theme.palette.divider};`;

// componente home
export default function Home() {
  const { pokemons } = usePokemonService();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(pokemons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, pokemons.length);
  const pokemonsForPage = pokemons.slice(startIndex, endIndex);

  return (
    <ThemeProvider theme={{ spacing: 8, palette: { divider: "#000" } }}>
      <Page>
        <mainContent>
          <Grid container spacing={2}>
            {pokemonsForPage.map((pokemon, index) => (
              <Grid item xs={3} key={pokemon.name}>
                <PokemonCard
                  pokemonId={startIndex + index + 1}
                  name={pokemon.name}
                />
              </Grid>
            ))}
          </Grid>
        </mainContent>

        <fixedPagination>
          <Paginacao
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </fixedPagination>
      </Page>
    </ThemeProvider>
  );
}
