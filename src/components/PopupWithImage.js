function PopupWithImage(props) {

  if(props.isOpen) {
    document.querySelector('.popup_type_place').classList.add('popup_opened');
  }

  return (
    <section className="popup popup_type_place">
      <div className="popup__container popup__container_type_place">
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <h2 className="popup__title popup__title_type_place">{props.card.name}</h2>
        <button onClick={props.onClose} className="popup__close-btn popup__close-btn_type_place" type="button"></button>
      </div>
    </section>
  );
}

export default PopupWithImage;