import '../PokemonCard/PokemonCard.css';

function PokemonCard({ id, sprite, namefr }) {
    return (
       <article className='pokemon__card'>
            <img src={sprite} alt={namefr} />
            <div className='infos__container'> 
                <span className='pokemon__id'>{id}</span>
                <span className='pokemon__namefr'>{namefr}</span>
            </div> 
       </article>
    );
}

export default PokemonCard;