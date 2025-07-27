import { useParams } from "react-router-dom";
import Pokemon from "./Pokemon"; // Adjust path if needed

const PokemonWrapper = () => {
  const { pokemonIndex } = useParams();
  return <Pokemon pokemonIndex={pokemonIndex} />;
};

export default PokemonWrapper;
