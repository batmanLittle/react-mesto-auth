function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_image popup_overlay ${
        card.link && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <img className="popup__zoom-image" src={card.link} alt={card.name} />
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__zoom-title">{card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;
