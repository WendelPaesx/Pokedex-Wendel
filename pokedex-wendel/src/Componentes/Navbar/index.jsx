import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function NavBar() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [pokemonsData, setPokemonsData] = React.useState([]);

  const handleSearchChange = async (evento) => {
    const query = evento.target.value;
    setSearchTerm(query);

    try {
      if (query) {
        // Fazer a requisição à API para obter a lista de pokémons
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}/`);
        setPokemonsData([response.data]);
      } else {
        setPokemonsData([]);
      }
    } catch (error) {
      console.error('Erro ao obter a lista de pokémons:', error);
      setPokemonsData([]);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <h2>Pokedex</h2>
            <p>tenha os nomes dos pokémons na palma de sua mão!</p>
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Procure aqui"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <ul>
        {pokemonsData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </Box>
  );
}
export default NavBar;
  