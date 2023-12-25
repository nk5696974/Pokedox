// PokemonList.js
import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PokemonCard from './PokemonCard';
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const fetchPokemonList = useCallback(async () => {
        try {
            const response = await axios.get(nextPageUrl);
            setPokemonList((prevList) => [...prevList, ...response.data.results]);
            setNextPageUrl(response.data.next);
        } catch (error) {
            console.error('Error fetching Pokemon list:', error);
        }
    }, [nextPageUrl]);

    useEffect(() => {
        fetchPokemonList();
    }, [fetchPokemonList]);

    return (
        <InfiniteScroll
            dataLength={pokemonList.length}
            next={fetchPokemonList}
            hasMore={nextPageUrl !== null}
        >
            {pokemonList.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </InfiniteScroll>
    );
};

export default PokemonList;
