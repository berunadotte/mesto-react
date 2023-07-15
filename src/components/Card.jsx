export default function Card({ card , onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }  

  const currentUser = React.useContext(CurrentUserContext)

  const isOwn = card.owner._id === currentUser._id

  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (`card__like-button ${isLiked && 'card__like-button_active'}`)

  return(
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="card__container">
        <h2 className="card__label">{card.name}</h2>
        <div className="card__like_container">
          <button type="button" className={cardLikeButtonClassName}>
          </button>
          <p className="card__like_count">{card.likes.length}</p>
        </div>
      </div> 
      {isOwn && <button className="card__delete-button"></button>}
    </li>
  )
}