export default function Card({ card , onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }  

  return(
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="card__container">
        <h2 className="card__label">{card.name}</h2>
        <div className="card__like_container">
          <button type="button" className="card__like-button">
          </button>
          <p className="card__like_count">{card.likes.length}</p>
        </div>
      </div> 
      <button className="card__delete-button"></button>
    </li>
  )
}