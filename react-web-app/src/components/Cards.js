import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";

export default function Navigation() {
  const cards = [
    { title: 'Damage Calculator', url: '', image: '/images/damage_calc.png', contents: 'This is ...' },
    { title: 'Pokemon Ability', url: '', image: '/images/pokemon_ability.png', contents: 'This is ...' },
    { title: 'Battle Analysis', url: '', image: '/images/battle_analysis.png', contents: 'This is ...' }
  ]

  return (
    <div className='container'>
      <div className='post-feed'>
        {cards.map((card, i) => {
          return (
            <Link to={card.url} className="post-card" key={i}>
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