import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";

export default function Navigation() {
  const cards = [
    { title: 'Damage Calculator', url: 'https://sv.pokesol.com/calc', image: '/images/damage_calc.png', contents: 'Damage calculation tool for Pokemon battle. Supported for Scarlet and Violet from regulation 1 to the latest' },
    { title: 'Pokemon Ability', url: 'https://yakkun.com/sv/zukan/', image: '/images/pokemon_ability.png', contents: 'Searchable abilities, moves, types, powers of all pokemon' },
    { title: 'Battle Analysis', url: 'https://sv.pokedb.tokyo/pokemon/list', image: '/images/battle_analysis.png', contents: 'List up all pokemon, providing how often each pokemon is used around the world in Master Ball Grade battle' }
  ]

  return (
    <div className='container'>
      <div className='post-feed'>
        {cards.map((card, i) => {
          return (
            <Link
              to={card.url}
              className="post-card"
              key={i}
              target="_blank"
            >
              <header className="post-card-header">
                {card.image ? 
                  <div
                    className="post-card-image"
                    style={{
                        backgroundImage: `url(${card.image})`,
                    }}
                  ></div>
                  :
                  <div className="post-card-image"></div>
                }
                <h2 className="post-card-title">{card.title}</h2>
              </header>
              <section className="post-card-contents">{card.contents}</section>
            </Link>
          )
        })}
      </div>
    </div>
  );

}