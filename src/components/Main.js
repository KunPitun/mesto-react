import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCard] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCard(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /*На сколько я понял из предыдущих проектных, аватар должен задаваться тегом img, а тут в этой проектной исходя 
  из подсказки в задании, аватар задается обычным div и изменяется через background-img. Не совсем понял этот
  момент, но если это принципиально, то поправлю*/

  return (
    <main>
      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
        </div>
        <div className="profile__intro">
          <h1 className="profile__user-name">{userName}</h1>
          <button onClick={props.onEditProfile} className="profile__edit-btn" type="button"></button>
          <p className="profile__user-info">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-btn" type="button"></button>
      </section>
      <section className="places">
        <ul className="places__container">
          {cards.map((card, i) => (
            <Card onCardClick={props.onCardClick} card={card} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;