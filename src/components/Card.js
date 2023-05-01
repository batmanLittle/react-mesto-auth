import trash from "../Images/Trash.svg";
import React from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }
  const currentUser = React.useContext(currentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  return (
    <li className="place">
      <img
        className="place__img"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="place__element">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__icon-group">
          <button
            className={`place__icon ${isLiked && "place__icon_black"}`}
            onClick={handleLikeClick}
            type="button"
          ></button>
          <p className="place__icon-number">{card.likes.length}</p>
        </div>
      </div>
      {isOwn && (
        <img
          className="place__delete"
          src={trash}
          alt="Иконка-удаление"
          onClick={handleDeleteClick}
        />
      )}
    </li>
  );
}
export default Card;
