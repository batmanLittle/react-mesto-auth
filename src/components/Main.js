import vector from "../Images/Vector.png";
import React from "react";
import Card from "./Card";
import { currentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(currentUserContext);
  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="Аватар"
        />
        <button
          className="profile__avatar-button"
          onClick={onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__button" type="button" onClick={onAddPlace}>
          <img className="profile__img" src={vector} alt="Плюс" />
        </button>
      </section>
      <section className="places-container">
        <ul className="places">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                name={card.name}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
