import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleEditPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      //profile
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="profile" title="Редактировать профиль">
        <input className="popup__input popup__input_type_name" type="text" placeholder="Имя пользователя"
          name="form-input-name" id="name-input" minLength="2" maxLength="40" required />
        <span className="popup__error name-input-error"></span>
        <input className="popup__input popup__input_type_user-info" type="text" placeholder="Информация о пользователе"
          name="form-input-info" id="info-input" minLength="2" maxLength="200" required />
        <span className="popup__error info-input-error"></span>
        <button className="popup__save-btn" type="submit">Сохранить</button>
      </PopupWithForm>
      //card
      <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="card" title="Новое место">
        <input className="popup__input popup__input_type_place" type="text" placeholder="Название" name="form-input-place"
          id="place-input" minLength="2" maxLength="30" required />
        <span className="popup__error place-input-error"></span>
        <input className="popup__input popup__input_type_link" type="url" placeholder="Ссылка на картинку"
          name="form-input-link" id="link-input" required />
        <span className="popup__error link-input-error"></span>
        <button className="popup__save-btn" type="submit">Создать</button>
      </PopupWithForm>
      //delete
      <PopupWithForm onClose={closeAllPopups} name="delete" title="Вы уверены?">
        <button className="popup__save-btn" type="submit">Да</button>
      </PopupWithForm>
      //avatar
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар">
        <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на картинку"
          name="form-input-avatar" id="avatar-input" required />
        <span className="popup__error avatar-input-error"></span>
        <button className="popup__save-btn" type="submit">Сохранить</button>
      </PopupWithForm>
      //image
      <PopupWithImage />
    </div>
  );
}

export default App;
