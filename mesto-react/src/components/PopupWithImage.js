function PopupWithImage() {
  return (
    <section className="popup popup_type_place">
      <div className="popup__container popup__container_type_place">
        <img className="popup__image" src="#" alt="" />
        <h2 className="popup__title popup__title_type_place"></h2>
        <button className="popup__close-btn popup__close-btn_type_place" type="button"></button>
      </div>
    </section>
  );
}

export default PopupWithImage;