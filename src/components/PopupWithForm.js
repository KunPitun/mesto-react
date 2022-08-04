function PopupWithForm(props) {

  if(props.isOpen) {
    document.querySelector(`.popup_type_${props.name}`).classList.add('popup_opened');
  }
  
  return (
    <section className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
          <form className="popup__form" name={`${props.name}-form`} noValidate>
            {props.children}
          </form>
        </div>
        <button onClick={props.onClose} className={`popup__close-btn poup__close-btn_type_${props.name}`} type="button"></button>
      </section>
  );
}

export default PopupWithForm;