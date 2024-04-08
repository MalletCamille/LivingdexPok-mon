import '../Generation/Generation.css'
import GenerationTitle from '../GenerationTitle/GenerationTitle';
import gen01 from '../../data/gen01.json'
import gen02 from '../../data/gen02.json'
import gen03 from '../../data/gen03.json'
import gen04 from '../../data/gen04.json'
import gen05 from '../../data/gen05.json'
import gen06 from '../../data/gen06.json'
import gen07 from '../../data/gen07.json'
import gen08 from '../../data/gen08.json'
import gen09 from '../../data/gen09.json'
import PokemonCard from '../PokemonCard/PokemonCard.jsx'

function Generation() {
    return (
        <section className='generation__section'>
            <GenerationTitle title="Génération 01"></GenerationTitle>
            <div className='generation__content'>
                {gen01.map((pokemon, index) => (
                    <PokemonCard
                    key={index}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    namefr={pokemon.namefr}
                    />
                ))}
            </div>
            <GenerationTitle title="Génération 02"></GenerationTitle>
            <div className='generation__content'>
            {gen02.map((pokemon, index) => (
                    <PokemonCard
                    key={index}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    namefr={pokemon.namefr}
                    />
                ))}
            </div>
            <GenerationTitle title="Génération 03"></GenerationTitle>
            <div className='generation__content'>
            {gen03.map((pokemon, index) => (
                    <PokemonCard
                    key={index}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    namefr={pokemon.namefr}
                    />
                ))}
            </div>
            <GenerationTitle title="Génération 04"></GenerationTitle>
            <div className='generation__content'>
            {gen04.map((pokemon, index) => (
                    <PokemonCard
                    key={index}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    namefr={pokemon.namefr}
                    />
                ))}
            </div>
            <GenerationTitle title="Génération 05"></GenerationTitle>
            <div className='generation__content'>
            {gen05.map((pokemon, index) => (
                    <PokemonCard
                    key={index}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    namefr={pokemon.namefr}
                    />
                ))}
            </div>
            <GenerationTitle title="Génération 06"></GenerationTitle>
            <div className='generation__content'>
            {gen06.map((pokemon, index) => (
                    <PokemonCard
                    key={index}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    namefr={pokemon.namefr}
                    />
                ))}
            </div>
            <GenerationTitle title="Génération 07"></GenerationTitle>
            <div className='generation__content'>
            {gen07.map((pokemon, index) => (
                    <PokemonCard
                    key={index}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    namefr={pokemon.namefr}
                    />
                ))}
            </div>
            <GenerationTitle title="Génération 08"></GenerationTitle>
            <div className='generation__content'>
            {gen08.map((pokemon, index) => (
                    <PokemonCard
                    key={index}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    namefr={pokemon.namefr}
                    />
                ))}
            </div>
            <GenerationTitle title="Génération 09"></GenerationTitle>
            <div className='generation__content'>
            {gen09.map((pokemon, index) => (
                    <PokemonCard
                    key={index}
                    id={pokemon.id}
                    sprite={pokemon.sprite}
                    namefr={pokemon.namefr}
                    />
                ))}
            </div>
        </section>    
    );
  }
  
  export default Generation;