import React, { useState } from 'react';
import './App.css';

function App () {
  const [characterDados, setCharacterDados] = useState(null); // Para armazenar os dados do personagem obtidos da API

  function fetchRandomCharacter() { // Para buscar um personagem aleatório da API
    
    const randomId = Math.floor(Math.random() * 671) + 1; // Calcula um ID aleatório (entre 1 e 671, pois a API tem 671 personagens) para buscar um personagem específico

    fetch(`https://rickandmortyapi.com/api/character/${randomId}`) // Para realizar uma solicitação à API "Rick and Morty".
      .then((response) => response.json()) // Para converter a resposta em formato JSON.
      .then((dados) => setCharacterDados(dados)) // Para atualizar o estado characterData com os dados do personagem obtidos da API

      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Informações de Personagem Rick and Morty</h1>
      <button onClick={fetchRandomCharacter}>Gerar Personagem</button>

      {/* && = Para exibir os dados do personagem somente quando o estado characterData não for null. Se characterData contiver dados, mostra a tag <div> com a imagem do personagem, seu nome, espécie, status, gênero e origem. */}
      {characterDados && ( 
        <div className="character-info">
          <img src={characterDados.image} alt={characterDados.name} />
          <h2>{characterDados.name}</h2>
          <p>Espécie: {characterDados.species}</p>
          <p>Status: {characterDados.status}</p>
          <p>Gênero: {characterDados.gender}</p>
          <p>Origem: {characterDados.origin.name}</p>
        </div>
      )}
    </div>
  );
};

export default App;