// App.js
import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import SearchBar from './components/Searchbar';
import PokemonList from './components/PokemonList';
import TypeFilter from './components/TypeFilter';

function App() {
    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <SearchBar />
            <TypeFilter />
            <PokemonList />
        </Container>
    );
}

export default App;
