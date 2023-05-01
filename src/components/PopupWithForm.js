function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  text,
  onClose,
  onSubmit,
  textLoading,
  isLoading,
}) {
  return (
    <div
      className={`popup popup_overlay popup_type_${name} ${
        isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <button
            className="popup__close"
            type="button"
            onClick={onClose}
          ></button>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {isLoading ? textLoading : text}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
