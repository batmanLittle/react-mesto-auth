import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect } from "react";
function AddPlacePopup({ isOpen, onClose, onAddCard, isLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddCard({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      text="Сохранить"
      textLoading="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        id="title-input"
        className="popup__input popup__input_data_title"
        type="text"
        name="name"
        placeholder={"Название"}
        minLength="2"
        maxLength="30"
        required
        onChange={handleChangeName}
        value={name}
      />
      <span className="title-input-error popup__input-error"></span>
      <input
        id="image-input"
        className="popup__input popup__input_data_img"
        name="link"
        type="url"
        placeholder={"Ссылка на картинку"}
        required
        onChange={handleChangeLink}
        value={link}
      />
      <span className="image-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
