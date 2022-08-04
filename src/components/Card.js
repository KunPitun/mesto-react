function Card(props) {

function handleClick() {
  props.onCardClick(props.card);
}

  return (
    <li className="place-card">
      <img onClick={handleClick} className="place-card__image" src={props.card.link} alt={props.card.name} />
      <h2 className="place-card__title">{props.card.name}</h2>
      <div className="place-card__like-container">
        <button className="place-card__like-btn" type="button"></button>
        <p className="place-card__like-count">{props.card.likes.length}</p>
      </div>
      <button className="place-card__delete-btn" type="button"></button>
    </li>
  )
}

export default Card;